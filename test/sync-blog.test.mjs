import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { syncApprovedPosts } from '../scripts/sync-blog.mjs';

test('publishes only explicitly published Ara notes and skips other workflow states', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'blog-sync-'));
  const source = path.join(root, 'vault', 'Projects', 'Personal', 'Blog', 'Drafts');
  const destination = path.join(root, 'portfolio', 'src', 'content', 'blog');
  await fs.mkdir(source, { recursive: true });
  await fs.writeFile(path.join(source, 'published-note.md'), `---\ntitle: Published Note\ndate: 2026-08-08\nstatus: published\ntags: [one, two]\ndescription: A live note\n---\n\nHello from Ara.\n`);
  await fs.writeFile(path.join(source, 'draft-note.md'), `---\ntitle: Draft Note\ndate: 2026-08-08\nstatus: draft\ndescription: Not published\n---\n\nKeep private.\n`);
  await fs.writeFile(path.join(source, 'review-note.md'), `---\ntitle: Review Note\ndate: 2026-08-08\nstatus: review\ndescription: Needs review\n---\n\nAlso private.\n`);
  await fs.writeFile(path.join(source, 'approved-note.md'), `---\ntitle: Approved Note\ndate: 2026-08-08\nstatus: approved\ndescription: Old workflow state\n---\n\nStill private.\n`);

  const result = await syncApprovedPosts({ source, destination });

  assert.deepEqual(result.published, ['published-note.md']);
  assert.deepEqual(result.skipped, ['approved-note.md', 'draft-note.md', 'review-note.md']);
  assert.match(await fs.readFile(path.join(destination, 'published-note.md'), 'utf8'), /draft: false/);
  await assert.rejects(fs.access(path.join(destination, 'draft-note.md')));
});

test('does not treat a legacy publish flag as permission to publish', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'blog-sync-'));
  const source = path.join(root, 'drafts');
  const destination = path.join(root, 'blog');
  await fs.mkdir(source, { recursive: true });
  await fs.writeFile(path.join(source, 'flagged.md'), `---\ntitle: Flagged\npublished: true\ndate: 2026-08-08\ndescription: Not explicitly published\n---\n\nKeep private.\n`);

  const result = await syncApprovedPosts({ source, destination });

  assert.deepEqual(result.published, []);
  assert.deepEqual(result.skipped, ['flagged.md']);
  await assert.rejects(fs.access(path.join(destination, 'flagged.md')));
});

test('removes stale generated posts while syncing an explicitly published post', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'blog-sync-'));
  const source = path.join(root, 'drafts');
  const destination = path.join(root, 'blog');
  await fs.mkdir(source, { recursive: true });
  await fs.mkdir(destination, { recursive: true });
  await fs.writeFile(path.join(source, 'post.md'), `---\ntitle: Post\nstatus: published\ndate: 2026-08-08\ndescription: Published\n---\n\nContent.\n`);
  await fs.writeFile(path.join(destination, 'stale.md'), `---\n# generated-by: ara-blog-sync\n---\n\nOld.\n`);

  const result = await syncApprovedPosts({ source, destination, clean: true });

  assert.deepEqual(result.published, ['post.md']);
  await assert.rejects(fs.access(path.join(destination, 'stale.md')));
  assert.match(await fs.readFile(path.join(destination, 'post.md'), 'utf8'), /generated-by: ara-blog-sync/);
});
