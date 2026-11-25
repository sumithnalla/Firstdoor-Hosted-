# FirstDoor SEO & Deployment Guide

This guide explains how to deploy your website and correctly set up Google Search Console and Google Analytics so that your website starts showing up in Google Searches for your targeted keywords (real estate in Gachibowli, Mokila, Future City, etc.).

## Step 1: Deploy Your Website
Before Google can read your website, it needs to be live on a production server. Since this is a Vite + React project:
1. Run the build command: `npm run build`
2. This creates a `dist` folder.
3. Host this `dist` folder on a reliable platform like **Vercel**, **Netlify**, **Hostinger**, or your preferred web hosting provider. Make sure your domain (`firstdoor.in`) is connected to this hosting!

---

## Step 2: Google Search Console (Crucial for SEO)
Google Search Console is what tells Google that your website exists and prompts them to scan (index) it.

### How to Submit:
1. Go to [Google Search Console](https://search.google.com/search-console/about).
2. Log in with your Google account.
3. You will see a screen to "Select property type". Choose **Domain** (recommended) or **URL prefix**.
   - If using **Domain**: Enter `firstdoor.in` and click Continue. You will need to add a TXT record to your DNS settings (where you bought your domain, like GoDaddy or Namecheap).
   - If using **URL prefix**: Enter `https://firstdoor.in/` and you can verify using Google Analytics or by uploading an HTML file to your server.
4. Once verified, go to the left sidebar and click on **Sitemaps**.
5. In the "Add a new sitemap" box, type `sitemap.xml` and click **Submit**.
6. **Result:** Google will now actively crawl all your pages (Home, Properties, Services, E-Flats) and your keywords will start getting indexed. It usually takes a few days to start seeing impressions.

---

## Step 3: Google Analytics (For Tracking Visitors)
Google Analytics will show you how many people are visiting your site, what they search for, and where they click.

### How to Set Up:
1. Go to [Google Analytics](https://analytics.google.com/).
2. Create an account and set up a new "Property" for `FirstDoor`.
3. Fill in the details (Website URL: `https://firstdoor.in/`).
4. Google will give you a **Measurement ID** (looks like `G-XXXXXXXXXX`) and a Global Site Tag script.

### Where to add the tracking code:
To start tracking, you need to add the code Google gives you to your `index.html` file right below the `<head>` tag.
It will look something like this:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```
*Note: Make sure to replace `G-XXXXXXXXXX` with your actual tracking ID.*

## Summary of Optimizations Already Completed for You
- **Meta Tags & Keywords**: Comprehensive keywords have been added to the codebase including `real estate, lands in hyderabad, flats, plots, commercial investment, villas, rental services` and all the critical locations like `Gachibowli, Future City, Tellapur`, etc.
- **OpenGraph & WhatsApp Sharing**: Fixed the issue where your company logo looked squished on WhatsApp! `index.html` now enforces a large OpenGraph image (`opengraph.jpg`) with proper titles and descriptions.
- **Dynamic SEO per Page**: The `src/components/seo.tsx` file has been enhanced so you can specify unique tags, images, and descriptions per page in the future.
- **Sitemaps**: Generated a fully updated `sitemap.xml` inside your `public` folder which includes `/e-flats` and `/services`.
- **Robots.txt**: Already set up correctly to allow all search engines.
