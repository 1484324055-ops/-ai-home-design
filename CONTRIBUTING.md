# Contributing

Thanks for helping improve AI Home Design.

## Good First Contributions

- Improve prompt templates for a specific room or cabinet type.
- Add more material/style combinations.
- Improve mobile layout.
- Improve WeChat Mini Program interactions.
- Add better error messages.
- Improve documentation.

## Development

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

## Pull Request Checklist

- [ ] No secrets, database files, or private project settings are committed.
- [ ] UI changes are tested on desktop and mobile sizes.
- [ ] Prompt-generation changes include before/after examples.
- [ ] Mini Program changes are tested in WeChat DevTools when relevant.
- [ ] `npm run lint` passes.

## Privacy And Assets

Do not commit user data, customer records, private design references, production database exports, or generated images without permission.
