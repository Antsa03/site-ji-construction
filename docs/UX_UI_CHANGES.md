# UX/UI Change Log

## Scope

Full accessibility, conversion, visual hierarchy, responsive UX and design-system pass for JI Construction.

## Key changes

- Added a global skip link and main landmark target.
- Strengthened global focus-visible states and mobile touch target handling.
- Corrected the hero headline from “Bâtit pour durer” to “Bâti pour durer”.
- Unified the primary CTA around “Demander un devis gratuit”.
- Improved the home hero copy to explain construction, renovation, civil works and custom bungalows.
- Reworked the quote form into a clearer 3-step flow with validation, error messages, loading state, review step and confirmation summary.
- Fixed the quote form project type state so the selected project is stored and shown in the summary.
- Added reassurance near the quote form: response time, no-obligation quote, direct contact options and next-step timeline.
- Improved contact page direct actions with call and WhatsApp CTAs, visible mobile sticky actions, response time and business hours.
- Expanded services to include gross structural work, masonry, renovation, roofing/framing, plumbing, electricity, finishing work, bungalows and planning.
- Improved bungalow model cards with local indicative pricing, clearer comparison fields and explicit pricing caveats.
- Added meaningful image alt text for bungalow model images.
- Reduced reliance on white text over primary CTA backgrounds where contrast was weaker.
- Documented the design system in `design-system/MASTER.md`.

## Remaining recommended manual checks

- Test the quote form with screen readers on Chrome/Edge and iOS Safari.
- Run Lighthouse mobile and desktop against a production build.
- Replace placeholder contact details and Google Maps URL with real business data.
- Connect form submissions to the preferred backend or CRM.
- Verify indicative bungalow prices against current local supplier and labor costs.
