# 🚀 Quick Launch Guide

## Prerequisites
- ✅ Site is optimized and ready
- ✅ Resend.com account created
- ✅ GitHub account (for deployment)

---

## 🏃 Fastest Way to Launch (5 Minutes)

### Step 1: Get Your Resend API Key
```
1. Go to: https://resend.com/api-keys
2. Click "Create API Key"
3. Copy the key (starts with "re_")
```

### Step 2: Test Locally First
```bash
# Create .env.local file (copy from .env.example)
cp .env.example .env.local

# Add your Resend API key to .env.local:
RESEND_API_KEY=re_your_actual_key_here

# Test the production build
npm run build
npm run start

# Visit http://localhost:3000 and test contact form
```

### Step 3: Push to GitHub
```bash
git init
git add .
git commit -m "Production ready"
git branch -M main

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 4: Deploy on Vercel (Recommended)
```
1. Go to: https://vercel.com/signup
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Add environment variable:
   - Name: RESEND_API_KEY
   - Value: re_your_actual_key
6. Click "Deploy"
7. Done! You get: https://your-project.vercel.app
```

---

## ⚙️ Important: Update Domain URL

Before deploying, update in `src/app/layout.tsx`:

**Line 47:**
```typescript
metadataBase: new URL("https://your-actual-domain.com")
```

**Line 51:**
```typescript
url: "https://your-actual-domain.com"
```

If using Vercel's free domain, use: `https://your-project.vercel.app`

---

## 📧 Email Configuration

**Current Setup:**
- Emails send from: `onboarding@resend.dev` (works immediately)
- Emails go to: `alex.amako@outlook.com`

**To use custom domain email (optional):**
1. Go to: https://resend.com/domains
2. Add your domain
3. Add DNS records provided by Resend
4. Update `from` address in `src/app/api/send-resume-request/route.ts`

---

## ✅ Post-Launch Checklist

- [ ] Site loads at production URL
- [ ] All pages work (Home, Research, Publications, etc.)
- [ ] Images load correctly
- [ ] Favicon appears
- [ ] Contact form sends emails
- [ ] Mobile version looks good
- [ ] Share on LinkedIn/social media
- [ ] Submit to Google Search Console

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check RESEND_API_KEY is set in Vercel/Netlify
- Verify API key in Resend dashboard
- Check deployment logs

**Images not loading?**
- Ensure images are in `public/` folder
- Paths should start with `/` like `/images/photo.jpg`

**Need help?**
- See full guide: DEPLOYMENT-GUIDE.md
- Vercel docs: https://vercel.com/docs
- Resend docs: https://resend.com/docs

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Free for personal sites
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ GitHub auto-deployment
- ✅ Built by Next.js team
- ✅ Fast global CDN

**Alternatives:**
- Netlify (also good)
- AWS Amplify
- Self-hosting (more complex)

---

## 📊 After Launch

**Monitor:**
- Check email delivery works
- Monitor site performance
- Add Google Analytics (optional)

**Promote:**
- Share on LinkedIn
- Add to email signature
- Update IEEE profile
- Submit to search engines

---

**That's it! Your site is ready to launch! 🎉**

For detailed instructions, see: `DEPLOYMENT-GUIDE.md`
