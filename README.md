# India Canada Consortium Clone

This repo contains a static clone of `https://indiacanadaconsortium.com/` under [`site/`](/Users/jayghosh/Documents/mom_work/icc/site).

## Run locally

From the repo root:

```bash
cd site
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Free deployment options

### Option 1: GitHub Pages

Best if you want the cheapest and simplest setup.

1. Create a GitHub repo and push this folder.
2. Keep the website files inside `site/`.
3. In GitHub, go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select your branch, then set the folder to `/site`.
6. Save. GitHub will publish the site on a free `github.io` URL.

If you want a custom domain later, GitHub Pages supports that too.

### Option 2: Cloudflare Pages

Best if you want a cleaner free deploy flow and easy custom-domain setup.

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project and connect the repo.
3. Set:
   - Framework preset: `None`
   - Build command: leave empty
   - Output directory: `site`
4. Deploy.

Cloudflare Pages has a generous free tier for static sites.

## Notes

- This is a plain static site. No paid hosting, database, or server is required.
- The contact form in the source site is visual only. It does not submit anywhere in this clone either.
