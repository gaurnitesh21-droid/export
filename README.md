# Prime Reach Exporters — Website (Joint Venture Content V3)

A responsive, animated, multi-page static B2B website for Prime Reach Exporters, presenting a manufacturing joint venture model for Indian salt and Rajasthan flour mill emery stone exports.

## Open the website

Open `index.html` directly in a modern browser. To run a local server (recommended for development):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. This is a static HTML/CSS/JavaScript site deployable to GitHub Pages, Netlify, Cloudflare Pages or other static hosts. No build step or paid package is required.

## Pages

Home, About, Products, Indian Salt, Rajasthan Emery Stones, Sourcing & Quality, Export Solutions, Industries & Markets, FAQ, Contact, Privacy, Terms and Image Credits.

## Design and interactivity

- Deep forest/navy, ivory, metallic gold visual system
- Responsive header and full-screen mobile navigation
- Scroll reveal, marquee, branded introductory screen, globe-to-flat animated world map, sticky progress line
- Salt category filtering, accessible FAQ accordions
- Animated quote drawer, preselected products, validation
- WhatsApp enquiry via wa.me, copy-to-clipboard and mailto
- Reduced-motion support, focus styles and alt text
- Static page SEO descriptions and Open Graph metadata

## IMPORTANT: The enquiry form is not connected to an email inbox or backend yet

The buttons open WhatsApp with a prefilled enquiry, copy enquiry details, or open your email app. **Do not claim the website stores or directly submits leads.** To deploy a server-based enquiry form, connect a form backend (Formspree, Netlify Forms, custom API, etc.), implement spam protection and update the privacy page. The email option opens a `mailto:` draft addressed to `sales@primereachexporters.in`; the visitor still needs to press Send. No backend or automatic email delivery has been implemented.

Business WhatsApp: +91 9694681337 (primary enquiry automation). Secondary contact: +91 9660014076.

## Updating business information

**Approved business details (provided by the business owner):**\n\n- Prime Reach Exporters\n- Opp. Nawa Nagar Palika, Kuchaman Road, Nawa City, Rajasthan, India – 341509\n- Phone / WhatsApp: +91 9694681337 and +91 9660014076\n- Primary email: sales@primereachexporters.in\n- Secondary email: primereachexporters@gmail.com\n\nWebsite footer, contact page and organization structured data use these details. The WhatsApp form defaults to the primary number.

## Replacing temporary images

Images use `images.unsplash.com` URLs in generated HTML and CSS. Replace with your own compressed WebP/AVIF product photos, staff/facility photographs and verified shipment visuals. Do not present third-party images as company facilities or product inventory.

The first version uses a clearly-labeled illustrative grinding-stone SVG (`assets/img/emery-stone.svg`) because an unrelated competitor's branded product photo would be misleading.

Image source credits appear in `credits.html`. Review Unsplash licensing and technical delivery before production.

## Before public launch

1. Verify the registered company name, published address and active domain email against business records.
2. Verify GST, IEC, registrations and any quality/compliance certificates before listing them.
3. Add actual stone dimensions, salt specifications, MOQ and verified packaging sizes.
4. Replace temporary images with licensed product, manufacturing-partner and facility imagery; obtain relevant permissions.
5. Implement a form backend if you want emailed leads and database storage.
6. Have Privacy and Terms pages finalized to reflect actual practices.
7. Add your final domain, canonical URLs, sitemap, analytics and search console.
8. Test mobile browsers and destination-country compliance language.

## Source files and brand assets

The **checked-in HTML pages are the current source of truth**. The older `build.py` generator still contains outdated page templates and **must not be run** until it is fully synchronized; running it as-is could overwrite product catalogue, animated world map, logo and joint venture copy.

- \`assets/img/prime-reach-logo.svg\`: transparent vector adaptation based on the approved uploaded Prime Reach logo.
- \`assets/img/favicon.svg\`: favicon using the monogram from that same artwork.
- \`assets/css/branding.css\`: header and footer logo sizing and branded intro.
- \`assets/js/intro.js\`: homepage intro timing and once-per-tab-session behavior.
- \`index.html\`: 2–3-second homepage logo reveal on the first visit in each tab session. Returning to the homepage skips it. Reduced-motion preference skips the intro.

Website copy, metadata, structured data and enquiry templates use **Prime Reach Exporters**. Joint venture manufacturing language is an owner-provided positioning brief; verify that each actual JV arrangement, manufacturing supervision claim and oversight practice matches signed agreements and operations before final launch.

`assets/css/style.css` contains all styling; `assets/js/site.js` contains interactions.
