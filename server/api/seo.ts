import { defineSitemapEventHandler, createRouter, useRuntimeConfig } from "#imports";

const router = createRouter();

router.get("/sitemap", defineSitemapEventHandler(async (e) => {
  const posts = await Promise.all([
    {
      _path: '/cn/blog/post-a',
      modifiedAt: new Date(),
    },
    {
      _path: '/cn/blog/post-b',
      modifiedAt: new Date(),
    },
    {
      _path: '/cn/blog/post-c',
      modifiedAt: new Date(),
    },
  ]);

  return posts.map((p) => {
    return {
      loc: p._path,
      lastmod: p.modifiedAt,
    };
  });
}));

export default useBase("/seo", router.handler);
