# SerenPath — Mindset Coach & Energy Healing Website

SerenPath is a self-directed web design and frontend development case study for a fictional mindset coach and intuitive energy healing practitioner.

The goal of this project is to demonstrate how a simple service-based website can be designed and built with a calm visual identity, clear service structure, responsive layouts, accessibility-informed details, and a low-pressure contact path.

## Project Type

Self-directed portfolio project / concept website.

This is not a real client project. It was created to demonstrate frontend development, responsive web design, content structure, and basic brand direction for wellness and coaching businesses.

## Live Demo

[https://serenpath-wellness-website.vercel.app]

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* App Router
* Local image assets
* Component-based architecture

## Pages and Sections

The first version is structured as a one-page website with multiple business sections:

* Portfolio notice
* Hero section
* Trust strip
* About section
* Services section
* Mid-page call to action
* Process section
* Sample reflections layout
* FAQ section
* Contact form UI
* Footer

## Main Features

* Responsive layout for desktop and mobile
* Mobile navigation menu
* Soft wellness-oriented visual direction
* Lightweight brand mark
* Clear service cards with format, best-fit client type, and included support
* FAQ section to reduce visitor uncertainty
* Contact form UI designed for client inquiries
* Accessible focus states
* Reduced-motion support
* Skip link for keyboard users
* Semantic page structure
* Local image optimization through Next.js Image
* Reserved image containers to reduce layout shift
* SEO and Open Graph metadata for portfolio presentation
* Canonical URL, generated social preview image, robots.txt, and sitemap.xml
* CreativeWork JSON-LD that identifies the page as a portfolio case study
* Baseline response security headers

## Design Direction

The visual direction is built around a calm wellness brand:

* Warm neutral background
* Soft clay accent color
* Muted sage support color
* Deep earth text color
* Editorial display typography
* Clean service information hierarchy
* Soft rounded cards and organic image treatment

## Accessibility and Usability Notes

This project includes several basic accessibility improvements:

* Skip to main content link
* Visible focus states
* Reduced-motion support for visitors who prefer less animation
* Semantic main content structure
* Accessible mobile navigation button with aria-expanded and aria-controls
* Descriptive image alt text
* Form labels
* Autocomplete attributes for name and email fields
* Keyboard-accessible navigation and form controls

## UX, Privacy, and Performance Notes

This project was built as a self-directed portfolio case study for a wellness-oriented service website. The design prioritizes calm pacing, readable content, responsive layouts, and low-pressure conversion.

Implementation details include:

* Reduced-motion support for visitors who prefer less animation
* Clear contact form labels and accessible focus states
* Stable image containers to reduce layout shift
* Soft visual hierarchy designed for low cognitive load
* Honest portfolio labeling and sample reflection disclosure
* Front-end-only contact form note to avoid misleading data-collection claims
* No intrusive cookie banner or false security claims

The goal was to demonstrate not only visual design execution, but also the ability to make thoughtful product decisions for a sensitive service category.

## Important Content Notes

The sample reflections in this project are placeholder content used to demonstrate testimonial-style layout only. They do not represent real customer reviews.

The contact form is frontend-only and does not collect, store, send, or submit data yet. It is prepared for future backend, email, or booking system integration.

## Release Verification

The full local project has passed:

* `pnpm lint`
* `pnpm typecheck`
* Next.js production build
* Local responsive checks at 375, 390, 768, 1024, and 1440 pixels
* Local image-path and console-error checks

Production Lighthouse scores are intentionally not claimed here. They must be measured again after the current release is deployed. See `DEPLOYMENT_CHECKLIST.md` and `LIGHTHOUSE_NOTES.md` for the remaining online checks.

## What This Project Demonstrates

This project demonstrates the ability to:

* Translate a vague service-business brief into a structured website
* Design a soft and trustworthy brand direction for a wellness practitioner
* Build a responsive one-page business website
* Organize service information clearly
* Create a low-pressure conversion path from hero section to contact form
* Implement a clean component structure in Next.js
* Prepare a website for future backend or booking integration
* Make UX decisions around trust, accessibility, privacy, and emotional tone

## Future Improvements

Possible next steps:

* Connect the contact form to a backend or email service
* Add a booking calendar integration
* Add real practitioner photography
* Replace sample reflections with verified client reviews
* Add dedicated pages for each service
* Run and document Lighthouse results after deployment
* Add a formal accessibility audit pass after final content and assets are locked
* Add simple animation only where it respects reduced-motion preferences
