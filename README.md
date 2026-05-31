# AI Home Design

AI Home Design is an AI prompt generator for whole-house customization and interior design workflows.

It helps users choose a space, cabinet type, style, material package, and advanced rendering options, then generates natural Chinese and English prompts that can be copied into image-generation tools.

The project includes:

- a Next.js web app
- a WeChat Mini Program version
- a Prisma/PostgreSQL backend
- prompt assets for interior-design scenes
- feedback and prompt-history workflows

## Product Status

- Web app: deployable on Vercel
- WeChat Mini Program: first version implemented for prompt generation, copy, local history, batch generation, and privacy notice
- Public product name: **栖案柜设灵感词**

## Features

- User registration, login, logout, and protected routes
- Space, cabinet, style, and material selectors
- Advanced options for residence type, camera angle, and lighting
- Chinese and English prompt generation
- Editable prompt result
- Copy Chinese prompt, English prompt, or full solution
- Prompt history, favorites, load, delete
- Batch prompt generation
- Feedback entry
- External image-generation platform shortcuts
- Mini Program local history and privacy-first feedback notes

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL, tested with Neon
- bcryptjs + jose for authentication
- Vercel deployment
- WeChat Mini Program with TypeScript

## Repository Structure

```text
app/                  Next.js app routes and API routes
src/components/       UI components
src/lib/              auth, session, data, history, prompt generation
prisma/               database schema and migrations
public/reference-images/
                      reference-image assets
wechat-miniapp/       WeChat Mini Program version
```

## Local Development

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

## Environment Variables

See [`.env.example`](.env.example).

Required:

- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: long random string for signing login tokens

Optional:

- `ADMIN_USERNAME`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `FEEDBACK_NOTIFY_EMAIL`

## WeChat Mini Program

Open `wechat-miniapp/` in WeChat DevTools.

See [`wechat-miniapp/README.md`](wechat-miniapp/README.md) for setup details.

## Deployment

The recommended deployment path is:

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Configure `DATABASE_URL` and `JWT_SECRET`.
4. Use Neon or another PostgreSQL provider.
5. Run Prisma migrations.
6. Deploy.

See [`DEPLOY.md`](DEPLOY.md) and [`VERCEL_DEPLOY.md`](VERCEL_DEPLOY.md).

## Roadmap

See [`ROADMAP.md`](ROADMAP.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Security

See [`SECURITY.md`](SECURITY.md).

## License

MIT. See [`LICENSE`](LICENSE).
