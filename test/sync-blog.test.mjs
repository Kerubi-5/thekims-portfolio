import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { syncApprovedPosts } from '../scripts/sync-blog.mjs';

test('publishes approved Ara drafts and skips unapproved notes', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'blog-sync-'));
  const source = path.join(root, 'vault', 'Projects', 'Personal', 'Blog', 'Drafts');
  const destination = path.join(root, 'portfolio', 'src', 'content', 'blog');
  await fs.mkdir(source, { recursive: true });
  await fs.writeFile(path.join(source, 'approved-note.md'), `---\ntitle: Approved Note\ndate: 2026-08-08\nstatus: approved\ntags: [one, two]\ndescription: A published note\n---\n\nHello from Ara.\n`);
  await fs.writeFile(path.join(source, 'draft-note.md'), `---\ntitle: Draft Note\ndate: 2026-08-08\nstatus: draft\ndescription: Not published\n---\n\nKeep private.\n`);

  const result = await syncApprovedPosts({ source, destination });

  assert.deepEqual(result.published, ['approved-note.md']);
  assert.deepEqual(result.skipped, ['draft-note.md']);
  assert.match(await fs.readFile(path.join(destination, 'approved-note.md'), 'utf8'), /draft: false/);
  await assert.rejects(fs.access(path.join(destination, 'draft-note.md')));
});

test('supports a frontmatter publish flag and removes stale generated posts', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'blog-sync-'));
  const source = path.join(root, 'drafts');
  const destination = path.join(root, 'blog');
  await fs.mkdir(source, { recursive: true });
  await fs.mkdir(destination, { recursive: true });
  await fs.writeFile(path.join(source, 'post.md'), `---\ntitle: Post\npublished: true\ndate: 2026-08-08\ndescription: Published\n---\n\nContent.\n`);
  await fs.writeFile(path.join(destination, 'stale.md'), `---\n# generated-by: ara-blog-sync\n---\n\nOld.\n`);

  const result = await syncApprovedPosts({ source, destination, clean: true });

  assert.deepEqual(result.published, ['post.md']);
  await assert.rejects(fs.access(path.join(destination, 'stale.md')));
  assert.match(await fs.readFile(path.join(destination, 'post.md'), 'utf8'), /generated-by: ara-blog-sync/);
});
