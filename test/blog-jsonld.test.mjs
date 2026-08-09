import test from 'node:test';
import assert from 'node:assert/strict';

import { createBlogPostingSchema, serializeJsonLd } from '../scripts/blog-jsonld.mjs';

test('creates a complete BlogPosting schema from post metadata', () => {
  const schema = createBlogPostingSchema({
    post: {
      title: 'A <real> post',
      description: 'A description with & safely escaped content.',
      date: '2026-08-08',
      dateModified: '2026-08-09',
      tags: ['career', 'engineering'],
    },
    url: 'https://example.test/blog/post/',
    siteUrl: 'https://example.test',
  });

  assert.equal(schema['@type'], 'BlogPosting');
  assert.equal(schema.headline, 'A <real> post');
  assert.equal(schema.datePublished, '2026-08-08');
  assert.equal(schema.dateModified, '2026-08-09');
  assert.deepEqual(schema.author, { '@type': 'Person', name: 'John Kim', url: 'https://github.com/Kerubi-5' });
  assert.equal(schema.mainEntityOfPage['@id'], schema.url);
  assert.equal(schema.isPartOf.url, 'https://example.test/blog/');
  assert.equal(schema.keywords, 'career, engineering');
  assert.equal(JSON.parse(serializeJsonLd(schema)).headline, schema.headline);
});

test('omits optional fields rather than inventing metadata', () => {
  const schema = createBlogPostingSchema({
    post: { title: 'Post', description: 'Description', date: '2026-08-08' },
    url: 'https://example.test/blog/post/',
  });

  assert.equal('dateModified' in schema, false);
  assert.equal('keywords' in schema, false);
});

test('escapes script-sensitive characters while retaining valid JSON', () => {
  const encoded = serializeJsonLd({ description: '</script><script>alert(1)</script> &' });
  assert.equal(encoded.includes('</script>'), false);
  assert.deepEqual(JSON.parse(encoded), { description: '</script><script>alert(1)</script> &' });
});
