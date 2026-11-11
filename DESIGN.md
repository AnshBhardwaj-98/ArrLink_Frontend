# ArrLink UI conventions

The supplied Light Studio UI guidelines inform typography, semantic tokens,
compact corners, spacing and accessible inputs. Framework and application-shell
examples in that document target a Wails/Vue desktop app; this marketing site
retains React/Vite, its navigation and its light theme.

- Use semantic colors from `src/index.css`; map Tailwind utilities through
  `tailwind.config.ts`. Warm neutral surfaces, charcoal text and orange actions.
- Use the system sans-serif stack for headings and body text. No remote fonts.
  Body copy and form inputs are 16px; supporting labels are at least 12px.
- Use a 4px base radius, restrained borders, explicit labels and visible focus.
- Keep mobile layouts free of horizontal overflow. Reduce columns before
  shrinking text. Respect reduced motion preferences.
- The same `public/brand-mark.svg` powers the navigation, footer and favicon.
- Put client names near the top of the homepage. Distinguish client work from
  ArrLink-owned products. Do not invent logos, testimonials, numbers or outcomes.
- Technology descriptions explain what the tools are used for. Engagement cards
  connect a business problem to a concrete first deliverable.
- Contact links preselect the relevant engagement. Use inline errors and provide
  an email fallback; keep preferences optional.
- Portfolio graphics are labeled illustrations, not screenshots of delivered UI.
