# Smart 24H Vending — Single Page Website

A responsive static sales website built with plain HTML, CSS and JavaScript for GitHub Pages.

## Before publishing

Replace these placeholders:

1. In `index.html`:
   - `+1 (000) 000-0000`
   - `+10000000000`
   - `sales@yourdomain.com`
   - `Your City / Region`
2. In `script.js`:
   - `const CONTACT_EMAIL = 'sales@yourdomain.com';`
3. Update the `<title>` and meta description if the final business name changes.

The current contact form uses `mailto:` and opens the visitor's email application. For a true web form, connect Formspree, Basin, Web3Forms or a serverless endpoint and replace the form submit handler.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.

## Connect a Porkbun domain

1. In GitHub Pages settings, enter your custom domain.
2. GitHub will create or request a `CNAME` file. Keep that file in the repository root.
3. In Porkbun DNS, add the records GitHub displays for your setup.
4. For an apex/root domain, GitHub commonly uses these A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. For `www`, add a CNAME pointing to `<your-github-username>.github.io`.
6. After DNS is active, enable **Enforce HTTPS** in GitHub Pages.

Check GitHub's current custom-domain documentation before changing DNS, because platform instructions can change.

## Product accuracy note

Capacity figures are approximate and depend on shelf configuration and package size. Confirm final specifications, refrigeration ranges, payment hardware, certifications, warranty and service terms with the equipment supplier before publishing contractual claims.
