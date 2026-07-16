# SerenPath Deployment Checklist

## Local release gate

- [x] Work completed on `codex/serenpath-release-polish`
- [x] Existing image assets preserved
- [x] `pnpm lint` passes
- [x] `pnpm typecheck` passes
- [x] `pnpm build` passes
- [x] `/opengraph-image`, `/robots.txt`, and `/sitemap.xml` build as static routes
- [x] Responsive QA completed at 375, 390, 768, 1024, and 1440 pixels
- [x] Mobile menu and contact controls checked
- [x] No browser console errors observed locally
- [x] No horizontal overflow at the tested widths

## Vercel configuration

- [ ] Confirm the production project is linked to the intended Git repository
- [ ] Set `NEXT_PUBLIC_SITE_URL` to `https://serenpath-wellness-website.vercel.app` if the Vercel production URL differs from the automatic project URL
- [ ] Deploy the release branch or merge it into the production branch
- [ ] Confirm the production build uses Node and pnpm versions supported by the project

## Production route checks

- [ ] `/` loads with no console or network errors
- [ ] `/robots.txt` allows the production site and references the production sitemap
- [ ] `/sitemap.xml` contains the production URL
- [ ] `/opengraph-image` renders at 1200 by 630 pixels
- [ ] Canonical URL resolves to the production domain
- [ ] Open Graph and Twitter metadata describe a portfolio case study
- [ ] CreativeWork JSON-LD is present and does not describe a real wellness business

## Production quality checks

- [ ] Run Lighthouse mobile and desktop
- [ ] Record real scores in `LIGHTHOUSE_NOTES.md`
- [ ] Run keyboard-only navigation in the deployed page
- [ ] Check Chrome, Edge, Firefox, and Safari or WebKit
- [ ] Verify 375, 390, 768, 1024, and 1440 pixel layouts
- [ ] Confirm images return optimized formats where supported
- [ ] Confirm no image, font, or JavaScript request returns 404
- [ ] Check the social preview in at least one share-preview validator

## Portfolio release

- [ ] Capture desktop hero and full-page screenshots
- [ ] Capture mobile hero and contact screenshots
- [ ] Capture services, sample reflections, FAQ, and responsive-comparison images
- [ ] Capture Lighthouse only after the real production audit
- [ ] Run the final review prompt in `FINAL_REVIEW_PROMPT.md`
- [ ] Update Upwork copy only with verified production claims
