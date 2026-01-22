# Environment Variables Guide

## Overview
This guide explains the three environment variables required for the contact and careers forms to work properly. These variables must be set in Vercel (or your hosting platform) before deploying.

---

## 📧 Environment Variables Explained

### 1. `RESEND_API_KEY`

#### What It Is
Your Resend API key is a secret authentication token that allows your application to send emails through the Resend service.

#### Purpose
- **Email Delivery**: Authenticates your app with Resend's email service
- **Security**: Proves you have permission to send emails from your account
- **API Access**: Required for all Resend API calls

#### Where to Get It
1. **Sign up for Resend**: Go to [https://resend.com](https://resend.com)
2. **Create an account**: Free account available
3. **Navigate to API Keys**: Go to Dashboard → API Keys
4. **Create API Key**: Click "Create API Key"
5. **Copy the key**: It will look like `re_xxxxxxxxxxxxx` (starts with `re_`)

#### Cost
- **Free Tier**: 3,000 emails/month (100 emails/day)
- **Paid Plans**: Start at $20/month for 50,000 emails
- **For Phase 1**: Free tier is sufficient for testing and initial launch

#### Important Notes
- ⚠️ **Never commit this key to Git** - it's a secret
- ⚠️ **Only use in server-side code** - never expose to client
- ✅ **Free tier is perfect** for contact/careers forms initially

---

### 2. `CONTACT_TO_EMAIL`

#### What It Is
The email address where you want to receive contact form submissions and careers applications.

#### Purpose
- **Destination**: All form submissions are sent to this email
- **Notifications**: You'll receive an email when someone submits a form
- **Reply-To**: The sender's email is set as Reply-To, so you can reply directly

#### Can I Use Gmail?
**Yes, absolutely!** You can use any email address, including:
- ✅ Gmail: `yourname@gmail.com`
- ✅ Outlook: `yourname@outlook.com`
- ✅ Company email: `contact@yourcompany.com`
- ✅ Any valid email address

#### Examples
```
CONTACT_TO_EMAIL=yourname@gmail.com
CONTACT_TO_EMAIL=aisol2k25@gmail.com
CONTACT_TO_EMAIL=info@yourcompany.com
```

#### Important Notes
- ✅ **Gmail works perfectly** for testing and initial launch
- ✅ **You can change it later** when you get a domain email
- ✅ **No verification needed** - just needs to be a valid email format

---

### 3. `FROM_EMAIL`

#### What It Is
The email address that appears as the "sender" of the emails sent from your forms.

#### Purpose
- **Sender Identity**: Shows who the email is from
- **Branding**: Makes emails look professional
- **Reply-To**: Users can reply to this address (though Reply-To is set to the form submitter)

#### Can I Use Gmail?
**Yes, but with limitations:**

**Option 1: Use Gmail (Free, but requires verification)**
- ✅ You can use `yourname@gmail.com`
- ⚠️ **Must verify the domain/email in Resend first**
- ⚠️ Gmail addresses need to be verified before sending

**Option 2: Use Resend's Test Domain (Easiest for testing)**
- ✅ Use `onboarding@resend.dev` (Resend's test domain)
- ✅ **No verification needed** - works immediately
- ✅ Perfect for testing and development
- ⚠️ Emails will show as "from: onboarding@resend.dev"

**Option 3: Use Your Domain Email (Best for production)**
- ✅ Use `noreply@yourdomain.com` or `contact@yourdomain.com`
- ✅ Requires domain verification in Resend
- ✅ Most professional option

#### Recommended Setup for Phase 1
For initial testing and launch, use:
```
FROM_EMAIL=onboarding@resend.dev
```
This works immediately without any verification.

#### Examples
```
# For testing (works immediately)
FROM_EMAIL=onboarding@resend.dev

# For production with Gmail (requires verification)
FROM_EMAIL=yourname@gmail.com

# For production with domain (requires domain verification)
FROM_EMAIL=noreply@aisol-itservices.com
# Note: When you get a domain email, you can update this
```

---

## 🚀 Quick Setup Guide

### Step 1: Sign Up for Resend
1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" (free account)
3. Verify your email address

### Step 2: Get Your API Key
1. After logging in, go to **API Keys** in the dashboard
2. Click **"Create API Key"**
3. Give it a name (e.g., "AISOL Website")
4. Copy the key (starts with `re_`)

### Step 3: Set Up Email Addresses

**For Testing/Initial Launch (Easiest):**
```
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=yourname@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

**For Production (After domain setup):**
```
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=aisol2k25@gmail.com
FROM_EMAIL=noreply@aisol-itservices.com
```

### Step 4: Add to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - Click **"Add New"**
   - Enter variable name (e.g., `RESEND_API_KEY`)
   - Enter variable value
   - Select environment (Production, Preview, Development)
   - Click **"Save"**
4. Repeat for all three variables

### Step 5: Redeploy
After adding environment variables, redeploy your site:
- Vercel will automatically redeploy, or
- Go to **Deployments** → Click **"Redeploy"**

---

## 📋 Resend Pricing Details

### Free Tier (Perfect for Phase 1)
- **3,000 emails/month**
- **100 emails/day**
- **Unlimited API requests**
- **No credit card required**
- **Perfect for**: Contact forms, careers forms, small businesses

### Paid Plans (When you grow)
- **Pro Plan**: $20/month - 50,000 emails
- **Business Plan**: $80/month - 200,000 emails
- **Enterprise**: Custom pricing

### Cost Estimate for Your Site
- **Contact form**: ~10-50 submissions/month (typical)
- **Careers form**: ~5-20 applications/month (typical)
- **Total**: ~15-70 emails/month
- **Free tier covers**: ✅ More than enough!

---

## 🔒 Security Best Practices

### ✅ DO:
- Store API keys in environment variables only
- Use different keys for development/production
- Rotate keys periodically
- Never commit keys to Git
- Use Vercel's environment variable system

### ❌ DON'T:
- Commit API keys to code
- Share API keys publicly
- Use the same key for multiple projects
- Hardcode keys in client-side code

---

## 🧪 Testing Your Setup

### Test Contact Form
1. Fill out the contact form on your site
2. Submit the form
3. Check your `CONTACT_TO_EMAIL` inbox
4. You should receive an email with the form submission

### Test Careers Form
1. Fill out the careers form on your site
2. Submit the form
3. Check your `CONTACT_TO_EMAIL` inbox
4. You should receive an email with the application

### Troubleshooting
If emails don't arrive:
1. **Check Vercel logs**: Go to Vercel → Your Project → Functions → View logs
2. **Check Resend dashboard**: Go to Resend → Logs to see email status
3. **Verify environment variables**: Make sure they're set correctly in Vercel
4. **Check spam folder**: Sometimes emails go to spam initially

---

## 📝 Example Configuration

### For Local Development (.env.local)
Create a `.env.local` file in your project root:
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=yourname@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

**Important**: Add `.env.local` to `.gitignore` (should already be there)

### For Vercel Production
Add these in Vercel dashboard:
- `RESEND_API_KEY`: Your Resend API key
- `CONTACT_TO_EMAIL`: Your email address
- `FROM_EMAIL`: `onboarding@resend.dev` (for testing) or your domain email

---

## 🎯 Recommended Setup for Phase 1

**For immediate testing and launch:**

```env
RESEND_API_KEY=re_your_api_key_from_resend
CONTACT_TO_EMAIL=yourname@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

This setup:
- ✅ Works immediately (no verification needed)
- ✅ Free (Resend free tier)
- ✅ Professional (emails work correctly)
- ✅ Easy to change later (when you get domain email)

**When you get a domain email later:**
1. Verify your domain in Resend
2. Update `FROM_EMAIL` to your domain email
3. Optionally update `CONTACT_TO_EMAIL` to your domain email
4. Redeploy

---

## 📚 Additional Resources

- **Resend Documentation**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Dashboard**: [https://resend.com/emails](https://resend.com/emails)
- **Vercel Environment Variables**: [https://vercel.com/docs/concepts/projects/environment-variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## ✅ Summary

| Variable | Purpose | Can Use Gmail? | Cost |
|----------|---------|----------------|------|
| `RESEND_API_KEY` | Authenticates with Resend API | N/A | Free tier: 3,000 emails/month |
| `CONTACT_TO_EMAIL` | Where to receive form submissions | ✅ Yes | Free |
| `FROM_EMAIL` | Email sender address | ⚠️ Yes (with verification) or use `onboarding@resend.dev` | Free |

**Recommended for Phase 1:**
- Use Resend free tier (3,000 emails/month)
- Use Gmail for `CONTACT_TO_EMAIL`
- Use `onboarding@resend.dev` for `FROM_EMAIL` (no verification needed)

**Total Cost: $0** (Free tier is sufficient for contact/careers forms)

---

**Questions?** Check Resend documentation or Vercel environment variables guide.

