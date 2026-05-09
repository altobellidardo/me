# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| improve accessibility, a11y audit, WCAG compliance, screen reader support, keyboard navigation, make accessible | accessibility | C:\Users\Dardo\Documents\projects\me\.agents\skills\accessibility\SKILL.md |
| work with Astro, mentions .astro files, asks about static site generation (SSG), islands architecture, content collections, or deploying an Astro project | astro | C:\Users\Dardo\Documents\projects\me\.agents\skills\astro\SKILL.md |
| building, testing, bundling, or managing JavaScript/TypeScript applications. Reach for Bun when you need to run scripts, install packages, test code, or bundle applications faster than Node.js alternatives | bun | C:\Users\Dardo\Documents\projects\me\.agents\skills\bun\SKILL.md |
| build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI) | frontend-design | C:\Users\Dardo\Documents\projects\me\.agents\skills\frontend-design\SKILL.md |
| improve SEO, optimize for search, fix meta tags, add structured data, sitemap optimization, or search engine optimization | seo | C:\Users\Dardo\Documents\projects\me\.agents\skills\seo\SKILL.md |
| implementing complex type logic, creating reusable type utilities, or ensuring compile-time type safety in TypeScript projects | typescript-advanced-types | C:\Users\Dardo\Documents\projects\me\.agents\skills\typescript-advanced-types\SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### accessibility
- Alt text required for all images; use empty `alt=""` for decorative ones.
- Interactive elements must have accessible names (aria-label or visually hidden text).
- Maintain color contrast ratios: 4.5:1 for normal text, 3:1 for large text.
- Ensure full keyboard accessibility; no keyboard traps; use `:focus-visible`.
- Target size must be at least 24x24px (AA) or 44x44px (recommended).
- Respect `prefers-reduced-motion: reduce`.
- Use native elements over ARIA roles whenever possible.

### astro
- File-based routing in `src/pages/`.
- Component logic in frontmatter (`---`).
- Use `Astro.props` for component data.
- Assets in `public/` are copied as-is; assets in `src/` are processed.
- Run `npx astro check` before building.
- Site URL in `astro.config.mjs` for canonical links.

### bun
- Use `bun install` for package management (faster than npm/yarn).
- Use `bun run <file>` to execute TS/JS directly without a build step.
- Use `bun test` for Jest-compatible testing.
- Use `bun build` for bundling or creating standalone executables.
- Bun auto-loads `.env` files.
- Package scripts run faster with `bun run <script>`.

### frontend-design
- Choose a bold aesthetic direction (minimalist, brutalist, etc.) and commit.
- Typography: Use distinctive, characterful fonts; avoid generic system fonts.
- Composition: Use negative space, asymmetry, and grid-breaking elements.
- Motion: Prioritize CSS-only animations; focus on high-impact moments like page loads.
- Visuals: Use textures (noise, grain), gradients, and geometric patterns for depth.
- Avoid "AI slop" (predictable layouts, cliched purple gradients).

### seo
- Unique and descriptive `<title>` (50-60 chars) and `<meta name="description">` (150-160 chars).
- Logical heading hierarchy (one `<h1>`, no skipped levels).
- Optimized image filenames and alt text.
- Canonical URLs to prevent duplicate content.
- Use JSON-LD for structured data (Organization, Product, FAQ, etc.).
- Responsive viewport meta tag required.

### typescript-advanced-types
- Use Generics for reusable, type-safe components.
- Conditional types (`T extends U ? X : Y`) for type logic.
- Mapped types (`{[K in keyof T]: T[K]}`) for transformations.
- Template literal types for string pattern matching.
- Use `unknown` over `any` for safety.
- Leverage `infer` in conditional types to extract nested types.

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| README.md | README.md | Project overview and instructions |

Read the convention files listed above for project-specific patterns and rules. All referenced paths have been extracted — no need to read index files to discover more.
