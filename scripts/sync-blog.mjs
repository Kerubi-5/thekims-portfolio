#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const GENERATED_MARKER = 'generated-by: ara-blog-sync';

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed.slice(1, -1).split(',').map((item) => item.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
  }
  return trimmed.replace(/^['"]|['"]$/g, '');
}

export function parseFrontmatter(markdown) {
  if (!markdown.startsWith('---')) return { data: {}, body: markdown };
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) return { data: {}, body: markdown };
  const header = markdown.slice(4, end).split('\n');
  const data = {};
  for (const line of header) {
    const match = line.match(/^([\w-]+):\s*(.*)$/);
    if (match) data[match[1]] = parseScalar(match[2]);
  }
  return { data, body: markdown.slice(end + 4).replace(/^\n/, '') };
}

function isApproved(data) {
  return data.published === true || ['approved', 'published'].includes(String(data.status).toLowerCase());
}

function quote(value) {
  return JSON.stringify(String(value ?? ''));
}

export function toAstroPost(data, body) {
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const frontmatter = [
    '---',
    `${GENERATED_MARKER}`,
    `title: ${quote(data.title)}`,
    `date: ${quote(data.date)}`,
    `description: ${quote(data.description ?? '')}`,
    `tags: [${tags.map(quote).join(', ')}]`,
    'draft: false',
    '---',
    '',
  ].join('\n');
  return `${frontmatter}${body.trimEnd()}\n`;
}

export async function syncApprovedPosts({ source, destination, clean = false }) {
  const entries = (await fs.readdir(source, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .sort((a, b) => a.name.localeCompare(b.name));
  await fs.mkdir(destination, { recursive: true });
  const published = [];
  const skipped = [];
  const sourceNames = new Set();

  for (const entry of entries) {
    const filename = entry.name;
    const input = await fs.readFile(path.join(source, filename), 'utf8');
    const { data, body } = parseFrontmatter(input);
    if (!isApproved(data)) {
      skipped.push(filename);
      continue;
    }
    sourceNames.add(filename);
    await fs.writeFile(path.join(destination, filename), toAstroPost(data, body));
    published.push(filename);
  }

  const removed = [];
  if (clean) {
    for (const entry of await fs.readdir(destination, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.md') || sourceNames.has(entry.name)) continue;
      const output = await fs.readFile(path.join(destination, entry.name), 'utf8');
      if (output.includes(GENERATED_MARKER)) {
        await fs.rm(path.join(destination, entry.name));
        removed.push(entry.name);
      }
    }
  }
  return { published, skipped, removed };
}

function getArg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const source = path.resolve(getArg('--source', process.env.ARA_BLOG_DRAFTS ?? '../ara/Ara/Projects/Personal/Blog/Drafts'));
  const destination = path.resolve(getArg('--destination', 'src/content/blog'));
  const result = await syncApprovedPosts({ source, destination, clean: process.argv.includes('--clean') });
  console.log(`Published ${result.published.length} post(s); skipped ${result.skipped.length}; removed ${result.removed.length}.`);
}
