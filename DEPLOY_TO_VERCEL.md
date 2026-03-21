# Deploying to Vercel — Step-by-Step Guide

This guide walks you through deploying the **Elect Chris Parker** campaign website to Vercel from start to finish.

---

## Prerequisites

- A **GitHub account** — [Sign up here](https://github.com) if you don't have one
- **Git** installed on your computer — [Download here](https://git-scm.com/downloads)
- Your project's **environment variables** (found in your `.env.local` file)

---

## Part 1: Push Your Code to GitHub

### Step 1 — Create a GitHub Repository

1. Log into [GitHub](https://github.com)
2. Click the **"+"** button in the top-right corner → **"New repository"**
3. Fill in:
   - **Repository name**: `electchrisparker` (or any name you prefer)
   - **Visibility**: Select **Private** (recommended for campaign sites)
   - Leave all other options as defaults
4. Click **"Create repository"**
5. Keep this page open — you'll need the repository URL in the next step

### Step 2 — Push Your Code

Open a terminal in your project folder (`D:\ChrisParker\ChrisParker`) and run these commands one at a time:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/electchrisparker.git
git push -u origin main
```

> **Replace** `YOUR_USERNAME` with your actual GitHub username.

If prompted, log in with your GitHub credentials.

---

## Part 2: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

---

## Part 3: Import and Deploy Your Project

### Step 1 — Import the Repository

1. Once logged into Vercel, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **electchrisparker** and click **"Import"**

### Step 2 — Configure Build Settings

Vercel auto-detects Next.js projects. Verify these settings:

| Setting            | Value      |
|--------------------|------------|
| **Framework Preset** | Next.js    |
| **Root Directory**   | `./`       |
| **Build Command**    | *(leave default)* |
| **Output Directory** | *(leave default)* |

### Step 3 — Add Environment Variables

Expand the **"Environment Variables"** section and add each variable from your `.env.local` file:

| Variable Name                        | Description                              |
|--------------------------------------|------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`           | Your Supabase project URL                |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`      | Your Supabase anonymous key              |
| `RESEND_API_KEY`                     | Resend API key (for email notifications) |
| `CONSTANT_CONTACT_API_KEY`           | Constant Contact API key                 |
| `CONSTANT_CONTACT_ACCESS_TOKEN`      | Constant Contact access token            |
| `CONSTANT_CONTACT_LIST_ID`           | Constant Contact mailing list UUID       |

> **How to add each variable:**
> 1. Type the variable name in the **"Name"** field
> 2. Paste the value in the **"Value"** field
> 3. Click **"Add"**
> 4. Repeat for each variable

> **Note:** If you haven't set up Resend or Constant Contact yet, you can skip those — the site will still work. Add them later under **Settings → Environment Variables**.

### Step 4 — Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (typically 1–2 minutes)
3. You'll see a success screen with a preview of your site

Your site is now live at a URL like:

```
https://electchrisparker.vercel.app
```

---

## Part 4: Connect Your Custom Domain

If you own a domain (e.g., `electchrisparker.org`):

### Step 1 — Add the Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Type your domain: `electchrisparker.org`
3. Click **"Add"**
4. Vercel will display DNS records you need to configure

### Step 2 — Update Your DNS Records

Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add:

| Type    | Name  | Value                      |
|---------|-------|----------------------------|
| **A**     | `@`   | `76.76.21.21`              |
| **CNAME** | `www` | `cname.vercel-dns.com`     |

> DNS changes can take 5–30 minutes to propagate.

### Step 3 — Verify

1. Go back to Vercel's **Domains** settings
2. Once DNS propagates, you'll see a green checkmark next to your domain
3. Vercel automatically provisions a free **SSL certificate** (HTTPS)

Your site is now accessible at `https://electchrisparker.org`.

---

## Part 5: Ongoing Updates

After the initial setup, updating your site is simple:

### Make Changes and Push

```bash
git add .
git commit -m "Describe your change here"
git push
```

Vercel automatically detects the push and redeploys your site within ~60 seconds.

### Update Environment Variables

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Edit or add variables as needed
3. Click **"Save"**
4. Redeploy: Go to **Deployments** → click the **"..."** menu on the latest deployment → **"Redeploy"**

---

## Troubleshooting

| Problem                          | Solution                                                                 |
|----------------------------------|--------------------------------------------------------------------------|
| Build fails                      | Check the build logs in Vercel for error details                         |
| Site loads but forms don't work  | Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set |
| Email notifications not sending  | Verify `RESEND_API_KEY` is set and the sending domain is verified in Resend |
| Constant Contact not syncing     | Verify all three `CONSTANT_CONTACT_*` variables are set correctly        |
| Custom domain not working        | Confirm DNS records are correct; wait up to 30 minutes for propagation   |
| Changes not appearing            | Make sure you ran `git push`; check Vercel dashboard for deployment status |

---

## Useful Links

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Supabase Dashboard**: [supabase.com/dashboard](https://supabase.com/dashboard)
- **Resend Dashboard**: [resend.com](https://resend.com)
- **Constant Contact Developer Portal**: [app.constantcontact.com/pages/dma/portal](https://app.constantcontact.com/pages/dma/portal)
