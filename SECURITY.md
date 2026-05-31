# Security Policy

## Supported Versions

The current `main` branch is the supported development version.

## Reporting A Vulnerability

Please open a private security advisory or contact the maintainer before publicly disclosing issues.

## Sensitive Data

Never commit:

- `.env`
- production database exports
- local SQLite files
- session secrets
- SMTP credentials
- WeChat AppSecret
- customer data

The repository includes `.env.example` only for documentation.
