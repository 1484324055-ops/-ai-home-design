"use client";

const imageSites = [
  {
    name: "即梦",
    href: "https://jimeng.jianying.com/",
    description: "适合把整套中英文提示词直接粘过去继续生图，也支持智能画布和图像编辑。",
    promptTip: "更推荐先复制英文提示词，再按需要补一点中文细节。",
  },
  {
    name: "豆包",
    href: "https://www.doubao.com/chat/",
    description: "对话式入口更轻，适合先快速试图，出图后再继续追问或微调画面。",
    promptTip: "进入后切到图片生成相关能力，中文提示词通常更顺手。",
  },
  {
    name: "通义万相",
    href: "https://tongyi.aliyun.com/wan/",
    description: "偏适合中文工作流，进站后就能直接走文字作画或图像创作路线。",
    promptTip: "你现在生成的中文提示词可以直接拿去试，通常比较省改写成本。",
  },
];

export default function ImageSiteLinks() {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">下一步：去生图网站直接出图</h2>
        <p className="text-sm text-[var(--foreground-secondary)]">
          这些是我在 2026 年 4 月 22 日核对过的网页入口。你可以先在本站生成提示词，再一键跳过去继续生图。
        </p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {imageSites.map((site) => (
          <article
            key={site.name}
            className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-4"
          >
            <div>
              <h3 className="text-base font-semibold text-[var(--foreground)]">{site.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-secondary)]">
                {site.description}
              </p>
            </div>

            <div className="mt-4 rounded-lg bg-[var(--card-bg)] px-3 py-2 text-xs leading-5 text-[var(--foreground-secondary)]">
              提示：{site.promptTip}
            </div>

            <a
              href={site.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              前往 {site.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
