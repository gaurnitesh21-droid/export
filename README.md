# Prime Reach Exports — Website (Draft 1)

A responsive, animated, multi-page static B2B website for Prime Reach Exports.

## Open the website

Open `index.html` directly in a modern browser. To run a local server (recommended for development):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. You can deploy the contents of this folder to Netlify, Cloudflare Pages, Vercel (static) or any standard web host. No build step or paid package is required.

## Pages

Home, About, Products, Indian Salt, Rajasthan Emery Stones, Sourcing & Quality, Export Solutions, Industries & Markets, FAQ, Contact, Privacy, Terms and Image Credits.

## Design and interactivity

- Deep forest/navy, ivory, metallic gold visual system
- Responsive header and full-screen mobile navigation
- Scroll reveal, marquee, hero motion, animated globe, sticky progress line
- Salt category filtering, accessible FAQ accordions
- Animated quote drawer, preselected products, validation
- WhatsApp enquiry via wa.me, copy-to-clipboard and mailto
- Reduced-motion support, focus styles and alt text
- Static page SEO descriptions and Open Graph metadata

## IMPORTANT: The enquiry form is not connected to an email inbox or backend yet

The buttons open WhatsApp with a prefilled enquiry, copy enquiry details, or open your email app. **Do not claim the website stores or directly submits leads.** To deploy a server-based enquiry form, connect a form backend (Formspree, Netlify Forms, custom API, etc.), implement spam protection and update the privacy page. The email option deliberately leaves the recipient empty until an official business email is verified.

Business WhatsApp: +91 96946 81337, provided previously by the business owner. Confirm before launch.

## Updating business information

Search for `919694681337` in JS and HTML to replace the number. Replace text about office address and email once confirmed.

## Replacing temporary images

Images use `images.unsplash.com` URLs in generated HTML and CSS. Replace with your own compressed WebP/AVIF product photos, staff/facility photographs and verified shipment visuals. Do not present third-party images as company facilities or product inventory.

The first version uses a clearly-labeled illustrative grinding-stone SVG (`assets/img/emery-stone.svg`) because an unrelated competitor's branded product photo would be misleading.

Image source credits appear in `credits.html`. Review Unsplash licensing and technical delivery before production.

## Before public launch

1. Confirm company legal name, address, official email/domain and phone.
2. Verify GST, IEC, registrations and any quality/compliance certificates before listing them.
3. Add actual stone dimensions, salt specifications, MOQ and verified packaging sizes.
4. Replace temporary images with approved business images.
5. Implement a form backend if you want emailed leads and database storage.
6. Have Privacy and Terms pages finalized to reflect actual practices.
7. Add your final domain, canonical URLs, sitemap, analytics and search console.
8. Test mobile browsers and destination-country compliance language.

## Source files and brand assets

The **checked-in HTML pages are the current source of truth**. The older \`build.py\` generator still contains outdated page templates from Draft 1 and **must not be run** until those templates have been synchronized; running it as-is would overwrite later product-catalogue, world-map, and logo updates.

- \`assets/img/prime-reach-logo.svg\`: transparent vector adaptation based on the approved uploaded Prime Reach logo.
- \`assets/img/favicon.svg\`: favicon using the monogram from that same artwork.
- \`assets/css/branding.css\`: header and footer logo sizing and branded intro.
- \`assets/js/intro.js\`: homepage intro timing and once-per-tab-session behavior.
- \`index.html\`: 2–3-second homepage logo reveal on the first visit in each tab session. Returning to the homepage skips it. Reduced-motion preference skips the intro.

The supplied image artwork reads "Prime Reach Exporters," while some website metadata currently reads "Prime Reach Exports." Confirm the final registered trading name before public launch and make the naming consistent.

`assets/css/style.css` contains all styling; `assets/js/site.js` contains interactions.
