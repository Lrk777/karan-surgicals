# Karan Surgicals – Website

Website for **Karan Surgicals**, a surgical cotton and medical supplies retailer based in **Hisar, Haryana** (established 2011).

## How to view locally

1. Open the folder in your computer.
2. Double-click `index.html` to open it in your browser,  
   **or** run a simple local server, for example:
   - **Python 3:** `python3 -m http.server 8000` then visit `http://localhost:8000`
   - **Node (npx):** `npx serve .` then open the URL shown in the terminal

## What’s included

- **index.html** – Single-page site with Hero, About Us, Products, Why Choose Us, Contact/Enquiry.
- **styles.css** – Layout and styling (responsive, mobile-friendly).
- **script.js** – Mobile menu toggle and enquiry form (opens your email client with pre-filled message).

## Customise

- **Product photos:** Each product card has a placeholder area. To add a photo, replace the placeholder inside the card with an image, e.g.  
  `<div class="product-photo"><img src="images/cotton-rolls.jpg" alt="Cotton Rolls" /></div>`
- **Contact details** (owner Ramesh Kumar, +91 9896271184, mannakaran1@gmail.com) are already in the contact section and footer; update in `index.html` if anything changes.

## Connect this project to GitHub

Your project is already a **Git repository** (initialized with one commit). To push it to GitHub so you can deploy from there:

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new).
   - Name it e.g. `karan-surgicals` or `karan-surgicals-website`.
   - Leave **“Add a README”** and **“Add .gitignore”** **unchecked** (you already have them).
   - Click **Create repository**.

2. **Push this folder to that repo** (in Terminal, from this project folder):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with the repo name you chose.

After this, your code lives on GitHub. To **deploy from GitHub** (so every push goes live automatically), use **Option A (Netlify)** or **Option C (Vercel)** below and choose **“Import from Git”** / **“Connect to GitHub”** instead of drag-and-drop. Connect your new repo; future pushes to `main` will trigger a new deploy.

---

## Going live (hosting on the internet)

Your site is just files (HTML, CSS, JS) — no database or server code — so you can put it on free static hosting and get a public URL in minutes.

### Option A: Netlify (deploy from GitHub – recommended)

1. Push this project to GitHub (see **“Connect this project to GitHub”** above).
2. Go to **[netlify.com](https://www.netlify.com)** and sign up (free).
3. Click **“Add new site” → “Import an existing project”** and choose **GitHub**. Authorize Netlify to access your GitHub.
4. Select your **karan-surgicals** (or whatever you named it) repository. Branch: `main`, build command: leave empty, publish directory: `/` or leave default. Click **Deploy**.
5. Netlify will build and give you a live URL. **Every time you push to `main` on GitHub, Netlify will automatically redeploy** your site.

Alternatively you can **drag and drop** your project folder on the Netlify dashboard for a one-time deploy (no GitHub needed).

### Option B: GitHub Pages (free, good if you use GitHub)

1. Create a **GitHub** account at [github.com](https://github.com) if you don’t have one.
2. Create a new repository (e.g. `karan-surgicals-website`). Don’t add a README or .gitignore yet.
3. On your computer, open Terminal in your project folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/karan-surgicals-website.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username.)
4. On GitHub: **Settings → Pages** → under “Build and deployment”, set **Source** to “Deploy from a branch”. Choose branch `main` and folder `/ (root)`, then Save.
5. After a minute or two, your site will be at `https://YOUR_USERNAME.github.io/karan-surgicals-website/`.

### Option C: Vercel or Cloudflare Pages

- **Vercel:** Sign up at [vercel.com](https://vercel.com), then “Add New Project” and import your folder (or connect the same GitHub repo). You get a URL like `karan-surgicals.vercel.app`.
- **Cloudflare Pages:** Sign up at [pages.cloudflare.com](https://pages.cloudflare.com), create a project, and upload your project folder. You get a URL like `your-project.pages.dev`.

### After it’s live

- Share the URL (e.g. on IndiaMART, WhatsApp, business cards).
- To use your own domain (e.g. `www.karansurgicals.com`): buy the domain from any registrar (Namecheap, GoDaddy, Google Domains, etc.), then in Netlify/GitHub Pages/Vercel/Cloudflare add the domain in the “Custom domain” or “Domain” settings and follow their instructions to point the domain to your site.

---

## Content source

Company details and product list were taken from the Karan Surgicals IndiaMART profile so the site reflects your current business information.
