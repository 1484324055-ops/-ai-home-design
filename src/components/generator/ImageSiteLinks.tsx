"use client";

const imageSiteGroups = [
  {
    title: "国内平台",
    description: "中文提示词优先，适合大多数用户直接复制后出图。",
    sites: [
      {
        name: "即梦",
        href: "https://jimeng.jianying.com/",
        logo: "https://www.google.com/s2/favicons?domain=jimeng.jianying.com&sz=64",
        mark: "即",
        accent: "from-rose-500 to-orange-400",
        description: "适合把中文提示词直接粘过去继续生图，也支持智能画布和图像编辑。",
        promptTip: "更推荐先复制中文提示词，再按画面结果补充空间细节。",
      },
      {
        name: "豆包",
        href: "https://www.doubao.com/chat/",
        logo: "https://www.google.com/s2/favicons?domain=doubao.com&sz=64",
        mark: "豆",
        accent: "from-sky-500 to-cyan-400",
        description: "对话式入口更轻，适合先快速试图，出图后再继续追问或微调画面。",
        promptTip: "进入后切到图片生成相关能力，中文提示词通常更顺手。",
      },
      {
        name: "通义万相",
        href: "https://tongyi.aliyun.com/wan/",
        logo: "https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=64",
        mark: "万",
        accent: "from-violet-500 to-blue-500",
        description: "偏适合中文工作流，进站后就能直接走文字作画或图像创作路线。",
        promptTip: "当前生成的中文提示词可以直接拿去试，通常比较省改写成本。",
      },
    ],
  },
  {
    title: "海外平台",
    description: "英文提示词备用版本更适合这些平台；免费额度会随账号和地区变化。",
    sites: [
      {
        name: "ChatGPT",
        href: "https://chatgpt.com/",
        logo: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
        mark: "C",
        accent: "from-emerald-500 to-teal-500",
        description: "适合用英文提示词做更细的对话式微调，也能继续追问修改构图和材质。",
        promptTip: "展开英文备用提示词复制过去，再用中文补一句你想修改的方向。",
      },
      {
        name: "Gemini",
        href: "https://gemini.google.com/app",
        logo: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
        mark: "G",
        accent: "from-blue-500 to-fuchsia-500",
        description: "适合图像生成和图像编辑类对话，能在同一轮里继续调整风格和细节。",
        promptTip: "英文提示词更稳，中文补充也能理解，适合反复微调。",
      },
      {
        name: "Midjourney",
        href: "https://www.midjourney.com/",
        logo: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=64",
        mark: "M",
        accent: "from-slate-800 to-slate-500",
        description: "海外高质量生图平台，适合追求画面质感、风格化表达和更成熟的视觉效果。",
        promptTip: "优先用英文备用提示词，室内空间类可以补充 --ar 16:9 或 --style raw 这类参数。",
      },
    ],
  },
];

export default function ImageSiteLinks() {
  return (
    <section
      id="image-platforms"
      className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-sm"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">下一步：选择生图平台</h2>
        <p className="text-sm text-[var(--foreground-secondary)]">
          复制上面的提示词后，选择一个平台打开粘贴即可。国内平台优先用中文，海外平台可以展开英文备用版本。
        </p>
      </div>

      <div className="mt-5 space-y-5">
        {imageSiteGroups.map((group) => (
          <div key={group.title} className="space-y-3">
            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">{group.title}</h3>
              <p className="mt-1 text-xs leading-5 text-[var(--foreground-secondary)]">
                {group.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.sites.map((site) => (
                <article
                  key={site.name}
                  className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-4"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${site.accent} text-sm font-bold text-white shadow-sm`}
                      >
                        <span>{site.mark}</span>
                        <img
                          src={site.logo}
                          alt={`${site.name} logo`}
                          className="absolute inset-0 h-full w-full bg-white object-contain p-2"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <h4 className="text-base font-semibold text-[var(--foreground)]">{site.name}</h4>
                    </div>
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
          </div>
        ))}
      </div>
    </section>
  );
}
