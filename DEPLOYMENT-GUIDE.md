# 🚀 Deployment Guide - Launch Your Website

## 📋 Pre-Deployment Checklist

### 1. Environment Variables Setup

Create a `.env.local` file in your project root (for local testing):

```env
# Resend API Key
RESEND_API_KEY=re_your_api_key_here
```

**To get your Resend API Key:**
1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Create a new API key
3. Copy it to your `.env.local` file

### 2. Configure Your Domain in Layout.tsx

Update the `metadataBase` URL in `src/app/layout.tsx`:

```typescript
metadataBase: new URL("https://youractualdomain.com")
```

Also update the OpenGraph URL:
```typescript
openGraph: {
  url: "https://youractualdomain.com",
  // ... rest of config
}
```

### 3. Verify Email Configuration

Your contact form sends to: **alex.amako@outlook.com**

To customize the sender email in `src/app/api/send-resume-request/route.ts`:

**Option A: Use Default Resend Email (Quick Start)**
```typescript
from: "Resume Request <onboarding@resend.dev>", // Works immediately
```

**Option B: Use Your Custom Domain (Recommended for Production)**
1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (e.g., `ejikemeamako.com`)
3. Add the DNS records Resend provides to your domain registrar
4. Once verified, update the from address:
```typescript
from: "Contact Form <noreply@ejikemeamako.com>",
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic deployments from Git
- Free SSL certificates
- Great performance

**Steps:**

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings ✓
   - Add environment variable: `RESEND_API_KEY` = your API key
   - Click "Deploy"

3. **Get Your Domain:**
   - Vercel gives you: `your-project.vercel.app`
   - Or connect a custom domain in Project Settings → Domains

**Time to Deploy: ~5 minutes**

---

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings (Netlify auto-detects):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variable: `RESEND_API_KEY`
   - Click "Deploy site"

3. **Configure:**
   - Your `netlify.toml` is already configured ✓
   - Get domain: `your-site.netlify.app`
   - Or add custom domain in Domain Settings

**Time to Deploy: ~5-10 minutes**

---

### Option 3: Self-Hosting (VPS/Cloud)

**For AWS, DigitalOcean, or your own server:**

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Set environment variables on your server:**
   ```bash
   export RESEND_API_KEY=re_your_key_here
   ```

3. **Start the production server:**
   ```bash
   npm run start
   ```

4. **Use a process manager (PM2):**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

5. **Setup Nginx reverse proxy** (recommended)
6. **Configure SSL with Let's Encrypt**

**Time to Deploy: ~1-2 hours (more technical)**

---

## 🔧 Step-by-Step: Vercel Deployment (Recommended)

### Step 1: Test Local Production Build

Before deploying, test that everything builds correctly:

```bash
# Build the production version
npm run build

# Test the production build locally
npm run start
```

Visit `http://localhost:3000` and verify everything works.

### Step 2: Prepare Git Repository

```bash
# Initialize git (if not already done)
git init

# Create .gitignore (already exists, verify it includes):
# node_modules/
# .next/
# .env.local

# Commit your code
git add .
git commit -m "Initial commit - Production ready"
```

### Step 3: Push to GitHub

```bash
# Create a new repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy on Vercel

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Sign up with GitHub
3. Click **"Add New Project"**
4. Click **"Import"** next to your repository
5. **Configure Project:**
   - Framework Preset: Next.js (auto-detected) ✓
   - Root Directory: `./` ✓
   - Build Command: `next build` (auto-filled) ✓
   - Output Directory: `.next` (auto-filled) ✓

6. **Add Environment Variables:**
   - Click "Environment Variables"
   - Name: `RESEND_API_KEY`
   - Value: `re_your_actual_api_key`
   - Click "Add"

7. Click **"Deploy"**

### Step 5: Wait for Deployment

- Vercel builds and deploys (usually 1-2 minutes)
- You'll get a URL like: `https://your-project.vercel.app`
- Test all pages and the contact form

### Step 6: Add Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain: `ejikemeamako.com`
3. Vercel shows DNS records to add
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Add the DNS records Vercel provides
6. Wait for DNS propagation (5 minutes - 48 hours, usually 10 minutes)
7. Vercel automatically provisions SSL certificate ✓

---

## 🔐 Security Checklist

- [ ] `.env.local` is in `.gitignore` (never commit API keys!)
- [ ] Environment variables added to hosting platform
- [ ] Test contact form in production
- [ ] Verify emails arrive at alex.amako@outlook.com
- [ ] Check honeypot spam protection works
- [ ] SSL certificate is active (HTTPS)

---

## 📧 Resend Email Configuration

### Current Setup:
- **Sender:** `onboarding@resend.dev`
- **Recipient:** `alex.amako@outlook.com`
- **Reply-To:** User's email (so you can reply directly)

### To Use Custom Domain Email:

1. **Add Domain in Resend:**
   - Go to [resend.com/domains](https://resend.com/domains)
   - Click "Add Domain"
   - Enter your domain: `ejikemeamako.com`

2. **Add DNS Records:**
   Resend will show you records like:
   ```
   Type: TXT
   Name: resend._domainkey
   Value: [long value provided by Resend]
   ```
   Add these to your domain DNS settings

3. **Verify Domain:**
   - Click "Verify" in Resend dashboard
   - Once verified, update `route.ts`:
   ```typescript
   from: "Contact Form <contact@ejikemeamako.com>",
   ```

4. **Test:**
   - Send a test email from your contact form
   - Check it arrives and shows correct sender

---

## 🧪 Post-Deployment Testing

### Test Checklist:

- [ ] **Homepage loads correctly**
- [ ] **All navigation links work**
- [ ] **Images load properly**
- [ ] **Favicon appears in browser tab**
- [ ] **Contact form sends emails**
- [ ] **Theme toggle works (dark/light mode)**
- [ ] **Mobile responsive design works**
- [ ] **All pages load (Research, Publications, Gallery, Contact)**
- [ ] **Social sharing previews work** (use [metatags.io](https://metatags.io))
- [ ] **Site loads fast** (test with [PageSpeed Insights](https://pagespeed.web.dev/))

### Test Contact Form:

1. Fill out the contact form
2. Submit
3. Check if email arrives at alex.amako@outlook.com
4. Verify reply-to email is correct
5. Test spam honeypot (add data to hidden field = should reject)

---

## 📊 Monitoring & Analytics (Optional)

### Add Google Analytics:

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `src/app/layout.tsx` in the `<head>`:
   ```tsx
   <Script
     strategy="afterInteractive"
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
   />
   <Script
     id="google-analytics"
     strategy="afterInteractive"
     dangerouslySetInnerHTML={{
       __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-XXXXXXXXXX');
       `,
     }}
   />
   ```

### Alternative: Plausible Analytics (Privacy-Friendly)

More privacy-focused, GDPR compliant, no cookie banner needed.
- [plausible.io](https://plausible.io)

---

## 🎯 DNS Configuration (If Using Custom Domain)

### Example DNS Records:

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Resend Email (if using custom domain):**
```
Type: TXT
Name: resend._domainkey
Value: [from Resend dashboard]

Type: MX
Name: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10
```

---

## 🚀 Quick Start Commands

```bash
# 1. Test production build locally
npm run build
npm run start

# 2. Commit and push to GitHub
git add .
git commit -m "Production ready"
git push origin main

# 3. Deploy on Vercel (or connect GitHub repo in dashboard)
npx vercel

# Or just use the Vercel dashboard for easier setup
```

---

## 🎉 You're Live!

Once deployed:

1. **Share your link:**
   - Add to LinkedIn profile
   - Update email signature
   - Share on academic networks
   - Add to IEEE profile

2. **Submit to search engines:**
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

3. **Monitor performance:**
   - Check Google Analytics (if added)
   - Monitor Vercel analytics
   - Check email delivery

---

## 💡 Troubleshooting

**Email not sending?**
- Check `RESEND_API_KEY` is set in production
- Verify API key is valid in Resend dashboard
- Check Vercel/Netlify logs for errors

**Images not loading?**
- Verify images are in `public/images/` folder
- Check paths start with `/` (e.g., `/images/photo.jpg`)
- Clear browser cache

**Favicon not showing?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check files exist in `public/` folder
- Wait a few minutes for browser cache to clear

**Build fails?**
- Run `npm run build` locally first
- Check all TypeScript errors: `npm run lint`
- Verify all dependencies installed: `npm install`

---

## 📞 Support

**Vercel Support:** [vercel.com/support](https://vercel.com/support)
**Resend Support:** [resend.com/support](https://resend.com/support)
**Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

**Good luck with your launch! 🎊**
