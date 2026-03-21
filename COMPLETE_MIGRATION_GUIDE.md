# Complete Migration Guide: GitHub + Supabase + Vercel + GoDaddy

A detailed, step-by-step guide to move the **Elect Chris Parker** campaign website onto your own accounts and make it live with your custom domain.

---

## Overview

This guide covers four major steps:

1. **Move the codebase to your own GitHub account**
2. **Set up your own Supabase project** (database)
3. **Deploy to your own Vercel account** (hosting)
4. **Point your GoDaddy domain to Vercel** (custom domain)

By the end, your site will be fully live at your custom domain with all forms, database, and email notifications working.

---

## What You Will Need

Before starting, gather the following:

- A computer with a web browser
- Your **GoDaddy account** login credentials
- Your **custom domain name** (e.g., `electchrisparker.org`)
- The project source code folder: `D:\ChrisParker\ChrisParker`
- About 30–60 minutes of uninterrupted time

---

## Part 1: Set Up Your Own GitHub Account and Repository

GitHub stores your source code and connects to Vercel for automatic deployments.

### Step 1 — Create a GitHub Account

1. Open your browser and go to **https://github.com**
2. Click **"Sign up"** in the top-right corner
3. Enter your **email address** and click **Continue**
4. Create a **password** and click **Continue**
5. Choose a **username** (e.g., `electchrisparker`) and click **Continue**
6. Complete the verification puzzle
7. Click **"Create account"**
8. Check your email for a verification code, enter it on the GitHub page

You now have a GitHub account.

### Step 2 — Install Git on Your Computer

1. Go to **https://git-scm.com/downloads**
2. Click **"Windows"** to download the installer
3. Run the downloaded installer
4. Click **"Next"** through all the default options
5. Click **"Install"**
6. Click **"Finish"** when done

### Step 3 — Configure Git with Your Identity

1. Open **PowerShell** (search for "PowerShell" in the Start menu)
2. Run these two commands, replacing with your actual name and email:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 4 — Create a New Private Repository on GitHub

1. Go to **https://github.com** and log in
2. Click the **"+"** icon in the top-right corner
3. Click **"New repository"**
4. Fill in the form:
   - **Repository name**: `electchrisparker`
   - **Description**: `Campaign website for Chris Parker`
   - **Visibility**: Select **Private**
   - **Do NOT** check "Add a README file"
   - **Do NOT** check "Add .gitignore"
   - **Do NOT** choose a license
5. Click **"Create repository"**
6. You will see a page with setup instructions — **keep this page open**

### Step 5 — Push Your Code to GitHub

1. Open **PowerShell**
2. Navigate to your project folder:

```powershell
cd "D:\ChrisParker\ChrisParker"
```

3. Initialize the Git repository and push your code:

```powershell
git init
git add .
git commit -m "Initial commit - campaign website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/electchrisparker.git
git push -u origin main
```

> **Important:** Replace `YOUR_USERNAME` with your actual GitHub username from Step 1.

4. When prompted, enter your GitHub **username** and **password**
   - If GitHub asks for a "Personal Access Token" instead of a password:
     1. Go to **https://github.com/settings/tokens**
     2. Click **"Generate new token (classic)"**
     3. Give it a name like `vercel-deploy`
     4. Check the **"repo"** scope
     5. Click **"Generate token"**
     6. Copy the token and use it as your password

5. Go back to your GitHub repository page and **refresh** — you should see all your files listed

Your code is now on GitHub.

---

## Part 2: Set Up Your Own Supabase Project

Supabase is the database that stores form submissions (volunteer signups, contact messages, supporters).

### Step 1 — Create a Supabase Account

1. Go to **https://supabase.com**
2. Click **"Start your project"**
3. Click **"Continue with GitHub"** (this uses the GitHub account you just created)
4. Authorize Supabase to access your GitHub account

### Step 2 — Create a New Project

1. Click **"New Project"**
2. Fill in the form:
   - **Organization**: Select your default organization (or create one)
   - **Project name**: `electchrisparker`
   - **Database password**: Create a strong password — **write this down and save it**
   - **Region**: Select **East US (Virginia)** (closest to North Carolina)
   - **Pricing Plan**: Select **Free** (more than enough for a campaign site)
3. Click **"Create new project"**
4. Wait about 2 minutes for the project to be provisioned

### Step 3 — Copy Your API Keys

Once the project is ready:

1. Click **"Project Settings"** (gear icon) in the left sidebar
2. Click **"API"** in the settings menu
3. You will see two important values — **copy and save both**:
   - **Project URL**: Looks like `https://xxxxxxxxxxxxxx.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`

> **Save these somewhere safe** — you will need them when setting up Vercel.

### Step 4 — Create the Database Tables

1. In the left sidebar, click **"SQL Editor"** (terminal icon)
2. Click **"+ New query"**
3. Copy and paste the **entire** SQL below, then click **"Run"**:

```sql
-- ===========================================
-- Table 1: Supporters (campaign updates signup)
-- ===========================================
CREATE TABLE IF NOT EXISTS public.supporters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  zip_code TEXT,
  sms_opt_in BOOLEAN DEFAULT false,
  email_opt_in BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS supporters_email_idx ON public.supporters(email);
CREATE INDEX IF NOT EXISTS supporters_zip_idx ON public.supporters(zip_code);
CREATE INDEX IF NOT EXISTS supporters_created_at_idx ON public.supporters(created_at DESC);

ALTER TABLE public.supporters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.supporters
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON public.supporters
  FOR ALL USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_supporters_updated_at ON public.supporters;
CREATE TRIGGER update_supporters_updated_at
  BEFORE UPDATE ON public.supporters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- Table 2: Volunteers (volunteer signups)
-- ===========================================
CREATE TABLE IF NOT EXISTS public.volunteers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  city TEXT,
  state TEXT DEFAULT 'NC',
  zip TEXT,
  volunteer_options TEXT[] DEFAULT '{}',
  comments TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS volunteers_email_idx ON public.volunteers(email);
CREATE INDEX IF NOT EXISTS volunteers_created_at_idx ON public.volunteers(created_at DESC);

ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.volunteers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON public.volunteers
  FOR ALL USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS update_volunteers_updated_at ON public.volunteers;
CREATE TRIGGER update_volunteers_updated_at
  BEFORE UPDATE ON public.volunteers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- Table 3: Contact Messages (contact form)
-- ===========================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS contact_messages_email_idx ON public.contact_messages(email);
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON public.contact_messages(created_at DESC);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON public.contact_messages
  FOR ALL USING (true) WITH CHECK (true);
```

4. You should see **"Success. No rows returned."** — this is normal
5. Click **"Table Editor"** in the left sidebar to verify three tables appear:
   - `supporters`
   - `volunteers`
   - `contact_messages`

Your database is ready.

---

## Part 3: Deploy to Vercel

Vercel hosts your website and serves it to visitors.

### Step 1 — Create a Vercel Account

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Click **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. You are now logged into Vercel

### Step 2 — Import Your Project

1. Click **"Add New..."** → **"Project"**
2. You will see a list of your GitHub repositories
3. Find **electchrisparker** and click **"Import"**

### Step 3 — Verify Build Settings

Vercel automatically detects it is a Next.js project. Verify these settings:

| Setting              | Value                |
|----------------------|----------------------|
| **Framework Preset** | Next.js              |
| **Root Directory**   | `./`                 |
| **Build Command**    | *(leave default)*    |
| **Output Directory** | *(leave default)*    |

### Step 4 — Add Environment Variables

This is the most important step. Expand the **"Environment Variables"** section and add each variable:

**For each variable below:**
1. Type the **Name** in the left field
2. Paste the **Value** in the right field
3. Click **"Add"**

| Name                                 | Where to Find the Value                                  |
|--------------------------------------|----------------------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`           | Supabase → Project Settings → API → **Project URL**      |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`      | Supabase → Project Settings → API → **anon public key**  |
| `RESEND_API_KEY`                     | From your Resend account (optional — add later if not set up yet) |
| `CONSTANT_CONTACT_API_KEY`           | From Constant Contact developer portal (optional — add later)     |
| `CONSTANT_CONTACT_ACCESS_TOKEN`      | From Constant Contact OAuth flow (optional — add later)           |
| `CONSTANT_CONTACT_LIST_ID`           | From Constant Contact contact lists (optional — add later)        |

> **At minimum, you MUST add the two Supabase variables.** The others can be added later.

### Step 5 — Deploy

1. Click the **"Deploy"** button
2. Wait for the build to complete — you will see a progress log
3. When it says **"Congratulations!"** your site is live
4. Vercel gives you a URL like: `https://electchrisparker.vercel.app`
5. Click the URL to verify your site is working

### Step 6 — Test Your Site

1. Visit your Vercel URL
2. Navigate to each page and make sure it loads
3. Test the **"Sign Up for Updates"** form — submit a test entry
4. Go to **Supabase → Table Editor → supporters** to verify the entry appeared
5. Test the **"Volunteer Sign-Up"** form
6. Test the **"Contact"** form

If forms are not working, double-check that your Supabase environment variables are correct in Vercel.

---

## Part 4: Connect Your GoDaddy Domain to Vercel

This makes your site accessible at your custom domain (e.g., `electchrisparker.org`).

### Step 1 — Add Your Domain in Vercel

1. Go to your **Vercel project dashboard**
2. Click **"Settings"** in the top navigation
3. Click **"Domains"** in the left sidebar
4. In the text field, type your domain name: `electchrisparker.org`
5. Click **"Add"**
6. Vercel will ask how you want to configure it:
   - Select **"Add `electchrisparker.org` and redirect `www.electchrisparker.org` to it"**
   - Click **"Add"**
7. Vercel now shows the DNS records you need to configure — **keep this page open**

You will see something like:

| Type    | Name  | Value                  |
|---------|-------|------------------------|
| A       | @     | 76.76.21.21            |
| CNAME   | www   | cname.vercel-dns.com   |

### Step 2 — Log Into GoDaddy

1. Go to **https://www.godaddy.com**
2. Click **"Sign In"** in the top-right
3. Enter your GoDaddy **username/email** and **password**
4. Click **"Sign In"**

### Step 3 — Navigate to DNS Management

1. After logging in, click **"My Products"** (or go to **https://account.godaddy.com/products**)
2. Find your domain (e.g., `electchrisparker.org`)
3. Click **"DNS"** next to your domain (or click the domain name, then click **"Manage DNS"**)

You will see a page listing your current DNS records.

### Step 4 — Remove Existing Conflicting Records

Before adding new records, check for and remove any existing records that might conflict:

1. Look for any existing **A record** with **Name** = `@`
   - If one exists, click the **pencil icon** (edit) next to it
   - Click **"Delete"** to remove it
2. Look for any existing **CNAME record** with **Name** = `www`
   - If one exists, click the **pencil icon** (edit) next to it
   - Click **"Delete"** to remove it

> **Warning:** If you have email set up with GoDaddy (MX records), **do NOT delete MX records**. Only delete A and CNAME records as described above.

### Step 5 — Add the A Record (Root Domain)

1. Click **"Add New Record"** (or **"Add"**)
2. Fill in the form:
   - **Type**: Select **A**
   - **Name**: Enter `@`
   - **Value**: Enter `76.76.21.21`
   - **TTL**: Leave as default (or select **1 Hour**)
3. Click **"Save"**

### Step 6 — Add the CNAME Record (WWW Subdomain)

1. Click **"Add New Record"** again
2. Fill in the form:
   - **Type**: Select **CNAME**
   - **Name**: Enter `www`
   - **Value**: Enter `cname.vercel-dns.com`
   - **TTL**: Leave as default (or select **1 Hour**)
3. Click **"Save"**

### Step 7 — Verify Your DNS Records

After adding both records, your GoDaddy DNS records should include:

| Type  | Name | Value                  | TTL    |
|-------|------|------------------------|--------|
| A     | @    | 76.76.21.21            | 1 Hour |
| CNAME | www  | cname.vercel-dns.com   | 1 Hour |

> Other records (MX, TXT, NS, etc.) should remain unchanged.

### Step 8 — Wait for DNS Propagation

- DNS changes typically take **5 to 30 minutes** to propagate
- In rare cases, it can take up to **48 hours**
- You can check the status at **https://dnschecker.org** — enter your domain name to see if the A record points to `76.76.21.21`

### Step 9 — Verify in Vercel

1. Go back to your Vercel project → **Settings** → **Domains**
2. Once DNS has propagated, you will see a **green checkmark** next to your domain
3. Vercel automatically provisions a free **SSL certificate** (HTTPS)
4. If you see a yellow or red status, wait a few more minutes and refresh

### Step 10 — Test Your Live Site

1. Open a new browser tab
2. Go to **https://electchrisparker.org** (your custom domain)
3. Verify the site loads correctly
4. Also try **https://www.electchrisparker.org** — it should redirect to the non-www version
5. Test all forms to make sure they still work with the custom domain

**Congratulations — your campaign website is now live!**

---

## After Deployment: Ongoing Maintenance

### Updating Your Website

Whenever you make changes to the code:

```powershell
cd "D:\ChrisParker\ChrisParker"
git add .
git commit -m "Description of what you changed"
git push
```

Vercel automatically detects the push and redeploys within about 60 seconds.

### Adding or Changing Environment Variables

1. Go to **Vercel** → your project → **Settings** → **Environment Variables**
2. Add, edit, or delete variables
3. Click **"Save"**
4. Go to **Deployments** tab → click **"..."** on the latest deployment → **"Redeploy"**

### Viewing Form Submissions

1. Go to **https://supabase.com/dashboard**
2. Select your project
3. Click **"Table Editor"** in the left sidebar
4. Click on any table to see submissions:
   - **supporters** — People who signed up for updates
   - **volunteers** — People who volunteered
   - **contact_messages** — Messages from the contact form

### Exporting Data

To export data from Supabase to a spreadsheet:

1. Go to **Table Editor** → select a table
2. Click the **"Export"** button (download icon) in the top-right
3. Choose **CSV** format
4. Open the downloaded file in Excel or Google Sheets

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **"Build Failed" on Vercel** | Click the failed deployment to see error logs. The most common cause is missing environment variables. |
| **Site loads but forms show errors** | Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly in Vercel. |
| **Domain not working after 30 minutes** | Go back to GoDaddy DNS and verify the A record value is exactly `76.76.21.21` and CNAME value is exactly `cname.vercel-dns.com`. |
| **"SSL Certificate Error" in browser** | Wait up to 1 hour — Vercel provisions SSL automatically after DNS propagates. |
| **www version doesn't redirect** | In Vercel → Settings → Domains, make sure both `electchrisparker.org` and `www.electchrisparker.org` are listed. |
| **Changes not appearing after git push** | Check the Vercel dashboard → Deployments tab. Make sure the latest deployment succeeded. |
| **Email notifications not sending** | Verify `RESEND_API_KEY` is set in Vercel environment variables and your sending domain is verified in Resend. |
| **Constant Contact not syncing** | Verify all three `CONSTANT_CONTACT_*` variables are set. Access tokens expire every 60-90 days and need to be refreshed. |

---

## Quick Reference: All Your Accounts

Keep this information in a safe place:

| Service | URL | Purpose |
|---------|-----|---------|
| **GitHub** | https://github.com | Source code storage |
| **Vercel** | https://vercel.com/dashboard | Website hosting |
| **Supabase** | https://supabase.com/dashboard | Database (form submissions) |
| **GoDaddy** | https://account.godaddy.com | Domain name management |
| **Resend** | https://resend.com | Email notifications |
| **Constant Contact** | https://app.constantcontact.com | Newsletter / mailing list |
| **Anedot** | https://secure.anedot.com | Donation processing |
