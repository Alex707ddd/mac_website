# Mac Website Context / Mac Website Context

> **Main File / Source of Truth:** `Website_Context.md`
> **You should read this for / 你要看：** Understand the Mac legal intake website prototype, app root, status, and safe resume rules.
> **I want you to know / 我想你知道：** This project is inactive/support-layer by default. Do not deploy, send email, or activate real AI intake without ZeRo approval.

---

## English

### Project Card

- Project: Mac Website / Legal Intake Portal
- Type: Next.js legal intake / sales front-end prototype
- Status: Inactive / support layer / resume only
- Owner: ZeRo
- Parent context: `../Mac_Context.md`
- Last standardization audit: 2026-06-30

### Inventory Audit 2026-06-30

| Area | Path | Status | Notes |
|---|---|---|---|
| Context | `Website_Context.md` | Active source of truth | Added during standardization audit. |
| App root | `./` | Next.js app | `package.json`, `src/`, `public/`, config files. |
| Source | `src/` | App code | Legal landing/intake code exists. |
| Planning | `tmp/legal_website_planning.md` | Reference | Original planning notes; not a source of truth. |
| Data | `data/profile.md` | Reference | Profile/content data. |
| Generated/deps | `.next/`, `.swc/`, `node_modules/` | Generated/ignored | Do not edit manually. |

### Developer Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm run test`

### Decision State

- The app is not active sales infrastructure right now.
- README was replaced from create-next-app boilerplate with project-specific handoff.
- No project-local skill is needed while inactive.
- Do not send real email via `nodemailer` or activate real AI intake without explicit approval.

### Resume Trigger

- Resume only if ZeRo asks to revive the legal intake website, landing page, form/email flow, sales front-end, or deploy pipeline.

---

## 繁體中文

### Project Card

- Project：Mac Website / Legal Intake Portal
- 類型：Next.js legal intake / sales front-end prototype
- 狀態：Inactive / support layer / resume only
- Owner：ZeRo
- Parent context：`../Mac_Context.md`
- Last standardization audit：2026-06-30

### Inventory Audit 2026-06-30

| Area | Path | Status | Notes |
|---|---|---|---|
| Context | `Website_Context.md` | Active source of truth | 本輪 standardization audit 新增。 |
| App root | `./` | Next.js app | `package.json`、`src/`、`public/`、config files。 |
| Source | `src/` | App code | Legal landing/intake code 已存在。 |
| Planning | `tmp/legal_website_planning.md` | Reference | 原 planning notes；不是 source of truth。 |
| Data | `data/profile.md` | Reference | Profile/content data。 |
| Generated/deps | `.next/`、`.swc/`、`node_modules/` | Generated/ignored | 不手動編輯。 |

### Developer Commands

- Dev：`npm run dev`
- Build：`npm run build`
- Lint：`npm run lint`
- Test：`npm run test`

### Decision State

- 目前不是 active sales infrastructure。
- README 已由 create-next-app boilerplate 改為 project-specific handoff。
- 閒置狀態下不需要 project-local skill。
- 沒有 explicit approval 前，不透過 `nodemailer` 發真 email，也不啟動 real AI intake。

### Resume Trigger

- 只有 ZeRo 要求恢復 legal intake website、landing page、form/email flow、sales front-end、deploy pipeline 時才 resume。
