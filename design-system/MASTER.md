# JI Construction Design System

This document captures the production UI decisions after the UX/UI accessibility and conversion pass.

## Brand position

JI Construction should feel professional, premium, reliable and practical. The visual direction remains warm construction-neutral: cream backgrounds, charcoal text, copper accents, rounded but solid cards, and restrained motion.

## Core principles

1. **Accessibility first**: every interactive element must be keyboard reachable, visibly focused and large enough for touch.
2. **Quote conversion first**: the primary action across the site is “Demander un devis gratuit”. Secondary actions support comparison, contact and reassurance.
3. **Clear hierarchy**: each page starts with a direct benefit-oriented headline, a concise paragraph, and action or trust content.
4. **Low-friction mobile UX**: no horizontal scroll, comfortable input sizes, visible direct contact actions and simple navigation.
5. **Consistent components**: reuse tokenized colors, border radii, spacing and states rather than page-specific one-off styling.

## Tokens

### Color

The site uses CSS variables in `app/globals.css`.

- `--background`: warm cream page background
- `--foreground`: dark charcoal body text
- `--card`: clean elevated content panels
- `--primary`: copper/gold accent used for CTAs, focus rings and active states
- `--primary-foreground`: dark text on copper for contrast
- `--muted`: low-emphasis panels and chips
- `--muted-foreground`: secondary copy
- `--border`: subtle card and section borders
- `--ring`: visible keyboard focus color

Use primary for the main CTA only. Use muted/card surfaces for secondary choices, summaries and support content.

### Typography

- Display font: `Instrument Serif` for premium headings.
- Body font: `Plus Jakarta Sans` for readable UI and content.
- Mono font: `JetBrains Mono` for step numbers and technical accents.

Recommended sizes:

- Hero H1: responsive `text-5xl` to `text-9xl` on the home page; `text-3xl` to `text-5xl` on subpages.
- Section headings: `text-2xl` to `text-4xl`.
- Body copy: `text-sm` to `text-base`, with relaxed line height.
- Labels/kickers: uppercase, letter-spaced, small, never used as the only information.

### Spacing

- Page gutters: `px-6 sm:px-8 lg:px-12`.
- Section rhythm: `py-16 sm:py-24` for standard content, `py-20 sm:py-28` for feature sections.
- Card padding: `p-5` to `p-8` depending on density.
- Touch targets: minimum `44px` height/width for buttons, links, menu items and contact cards.

### Radius and elevation

- Standard controls: `rounded-lg`.
- Cards and summaries: `rounded-2xl`.
- Premium panels and sidebars: `rounded-3xl`.
- Primary CTAs: `rounded-full`.
- Shadows should be subtle; prefer border + background over heavy drop shadows.

## Components

### Primary CTA

Default copy: **Demander un devis gratuit**.

Use this for header, hero, service CTA, bungalow CTA and quote completion paths. Avoid competing primary labels.

### Secondary CTA

Use outline buttons for browsing actions such as comparing bungalows or viewing services.

### Forms

Required fields must include:

- explicit label
- accessible error text with `role="alert"`
- `aria-invalid` when invalid
- helpful hint text where it reduces uncertainty
- loading state on submit
- confirmation/summary after submission

The quote form is intentionally split into three steps: contact details, project details, summary.

### Trust chips

Use `.trust-chip` for compact reassurance near conversion points, for example:

- Réponse sous 24h
- Devis gratuit, sans obligation
- Visite de chantier sur rendez-vous

### Contact cards

Contact options should use a full-card link with icon, label, value and helper text. Keep them at least `min-h-16` on mobile.

## Motion

Motion is used for premium feel, but it must never block usability.

- Keep animations subtle and short.
- Avoid excessive hover-only information.
- Respect `prefers-reduced-motion` in CSS.
- Do not depend on animation for meaning.

## Accessibility checklist for new work

- Page has one clear H1.
- Interactive elements are keyboard accessible.
- Focus states are visible against the current background.
- Touch targets are at least 44px.
- Images have meaningful alt text or are decorative.
- Forms expose errors programmatically.
- No horizontal scrolling at 320px width.
- Reduced motion remains usable.
- Color contrast is checked for text, CTA and form states.

## Conversion checklist for new work

- Primary CTA points to `/devis`.
- CTA copy emphasizes free quote.
- Add reassurance near forms and high-intent sections.
- Explain response time and no-obligation quote.
- Keep mobile contact actions easy to tap.
- Ask only for information needed for the next sales step.
