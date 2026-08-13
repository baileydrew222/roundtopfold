# Round Top Fold Website

Custom static website for Round Top Fold miniature Highland cattle.

## How to Deploy on Netlify

1. Create a free account at https://www.netlify.com
2. Drag and drop this entire `roundtopfold` folder onto the Netlify dashboard, **or** connect a Git repository.
3. Once deployed, go to **Site settings → Domain management** and add your custom domain `roundtopfold.com`.
4. At your domain registrar (GoDaddy, Porkbun, Cloudflare, etc.), update the DNS / nameservers as instructed by Netlify.

## Adding Your Logo

1. Export the final logo we designed as a transparent PNG.
2. Place it in the `images` folder and name it `logo.png`.
3. In `index.html`, replace the temporary text logo with:

```html
<img src="images/logo.png" alt="Round Top Fold - Miniature Highland Cattle Round Top Texas" class="hero-logo">
```

## Contact Form

The contact form uses **Netlify Forms**. After the first deployment:

1. Go to your Netlify site dashboard → Forms
2. You will see the “contact” form appear after the first submission
3. Under Form notifications, set it to email `drew@roundtopfold.com`

## Blog

- `blog.html` – Blog listing page
- `blog-welcome.html` – Sample first post

To add a new post later:
1. Copy `blog-welcome.html` and rename it (e.g. `blog-my-new-post.html`)
2. Edit the title, date, and content
3. Add a new card linking to it on `blog.html`

## Shop / Merchandise

`shop.html` is a polished “Coming Soon” page.  
When you are ready to sell merchandise, the easiest path is:

1. Create a free Shopify account
2. Connect Printful or Printify (dropshipping)
3. Either link from the Shop page to your Shopify store, or embed products

I can help you connect it when you’re ready.

## Pages Included

- `index.html` – Home
- `about.html` – Our Story
- `cattle.html` – Breeding philosophy & herd plans
- `blog.html` – Blog listing
- `blog-welcome.html` – Sample blog post
- `shop.html` – Merchandise (Coming Soon)
- `gallery.html` – Placeholder for future photos
- `contact.html` – Address, social links, and working contact form
- `privacy.html` – Privacy Policy
- `terms.html` – Terms of Use & Disclaimers