# Deploy on GitHub Pages

GitHub Pages serves static files only — no Node/Cloudflare server. The site today is a TanStack **Start** app (SSR + server functions on Cloudflare Workers via Lovable). I'll convert it to a pure client-side SPA using TanStack **Router** only, then add a GitHub Actions workflow that builds and publishes to GitHub Pages.

## What changes

**Stack migration (Start → SPA)**
- Replace `vite.config.ts` (drop `@lovable.dev/vite-tanstack-config` + Cloudflare worker plugin) with a plain Vite + React + `@tanstack/router-plugin` config.
- Add `index.html` and `src/main.tsx` as the SPA entry (mounts `<RouterProvider />` into `#root`).
- Rewrite `src/routes/__root.tsx` to be a normal layout component — remove `HeadContent`, `Scripts`, `shellComponent`, and the `head()` meta block (those are Start-only). Move SEO `<title>` / `<meta>` into static `index.html` instead.
- Remove server-side files that won't work on a static host: `src/integrations/supabase/client.server.ts`, `auth-middleware.ts`, `auth-attacher.ts`, `src/start.ts` (if present), and any `*.functions.ts` / `*.server.ts`. Browser Supabase client stays — it works fine from a static SPA.
- Update `package.json` scripts to `vite` / `vite build` / `vite preview` and drop the Remix/Cloudflare-flavored scripts. Remove `@cloudflare/vite-plugin`, `@tanstack/react-start`, `@lovable.dev/vite-tanstack-config`, `wrangler.jsonc`.

**GitHub Pages specifics**
- Set Vite `base` to `/<repo-name>/` so assets resolve under `username.github.io/<repo-name>/`. (If you use a custom domain or a `username.github.io` repo, base stays `/`.)
- Add `public/404.html` that redirects to `index.html` so deep links like `/about-us` work on Pages (standard SPA fallback trick).
- Add `public/.nojekyll` so Pages serves files starting with `_`.

**GitHub Actions workflow** (`.github/workflows/deploy.yml`)
- Trigger on push to `main`.
- Steps: checkout → setup Bun → `bun install` → `bun run build` → upload `dist/` as Pages artifact → deploy via `actions/deploy-pages@v4`.
- You'll need to enable Pages in repo Settings → Pages → Source: "GitHub Actions" once.

## Trade-offs you should know

- **Lovable preview**: Lovable's preview is tuned for the Start template. After this migration the preview should still work (it's just Vite), but features that depend on Start (server functions, SSR meta, auth middleware) are gone.
- **No backend**: contact form, auth, server functions, Lovable Cloud server-side calls — all unavailable. Lovable Cloud's browser SDK still works for client-side reads/writes if you keep Cloud enabled, but anything sensitive must move to a third-party service (Formspree, Resend via a separate worker, etc.).
- **SEO**: meta tags become static (same `<title>`/`<description>` for every route) unless you add a client-side helper like `react-helmet-async`. Per-route SEO from Start's `head()` is lost.
- **One-way**: reverting to Start later means restoring the deleted files from git history.

## Open question

What is the **GitHub repo name** you'll deploy to? I need it to set Vite's `base`.
- If repo is `username.github.io` (user/org site) → base `/`
- If repo is `decades-capital` (project site) → base `/decades-capital/`
- If you'll attach a custom domain → base `/`

Reply with the repo name (or "custom domain") and I'll execute the plan.
