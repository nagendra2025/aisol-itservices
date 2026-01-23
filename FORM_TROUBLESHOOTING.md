# Contact Form Troubleshooting Guide

## Issue: Form Submission Fails / No Email Received

If you're getting a "Failed to send message" error or not receiving emails, follow these steps:

---

## ✅ Step 1: Check Environment Variables in Vercel

### Required Variables
Make sure these are set in your Vercel project:

1. **RESEND_API_KEY**
2. **CONTACT_TO_EMAIL** 
3. **FROM_EMAIL**

### How to Check:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Verify all three variables are present
4. Make sure they're set for **Production** environment (and Preview/Development if needed)

### Common Issues:
- ❌ Variables not set
- ❌ Variables set only for Development, not Production
- ❌ Typos in variable names
- ❌ Extra spaces in variable values

---

## ✅ Step 2: Verify Resend API Key

### Check Your API Key:
1. Go to [Resend Dashboard](https://resend.com/emails)
2. Navigate to **API Keys**
3. Verify your API key exists and is active
4. Copy the key again (starts with `re_`)

### Common Issues:
- ❌ API key not created
- ❌ API key deleted or deactivated
- ❌ Wrong API key copied
- ❌ API key from wrong Resend account

---

## ✅ Step 3: Verify FROM_EMAIL in Resend

### Important: FROM_EMAIL Must Be Verified

**Option 1: Using Resend Test Domain (Easiest)**
```
FROM_EMAIL=onboarding@resend.dev
```
- ✅ Works immediately
- ✅ No verification needed
- ✅ Perfect for testing

**Option 2: Using Gmail or Other Email**
```
FROM_EMAIL=yourname@gmail.com
```
- ⚠️ **Must verify in Resend first!**

### How to Verify Email in Resend:
1. Go to [Resend Dashboard](https://resend.com/emails)
2. Navigate to **Domains** or **Email Addresses**
3. Click **"Add Domain"** or **"Verify Email"**
4. Follow verification steps:
   - For Gmail: Check your email for verification link
   - For domain: Add DNS records as instructed

### Common Issues:
- ❌ FROM_EMAIL not verified
- ❌ Using unverified Gmail address
- ❌ Domain DNS records not added correctly

---

## ✅ Step 4: Check Vercel Function Logs

### View Error Details:
1. Go to Vercel project dashboard
2. Navigate to **Deployments** → Select latest deployment
3. Click **"Functions"** tab
4. Look for error logs when form is submitted

### What to Look For:
- Error messages mentioning "API key"
- Error messages mentioning "domain" or "verification"
- Error messages mentioning "rate limit"
- Any Resend API errors

### Common Error Messages:

**"Invalid API key"**
- Solution: Check RESEND_API_KEY is correct

**"Domain not verified"**
- Solution: Verify FROM_EMAIL in Resend dashboard

**"Rate limit exceeded"**
- Solution: Wait 15 minutes or upgrade Resend plan

**"Missing environment variables"**
- Solution: Add all three variables in Vercel

---

## ✅ Step 5: Check Resend Dashboard Logs

### View Email Status:
1. Go to [Resend Dashboard](https://resend.com/emails)
2. Navigate to **Logs** or **Emails**
3. Check if emails are being sent
4. Look for failed emails and error messages

### What to Check:
- ✅ Are emails being sent? (Status: Sent/Delivered)
- ❌ Are emails failing? (Status: Failed/Bounced)
- ⚠️ What's the error message?

### Common Resend Errors:

**"Domain not verified"**
- Your FROM_EMAIL domain needs verification
- Use `onboarding@resend.dev` for immediate testing

**"Invalid API key"**
- API key is incorrect or expired
- Generate a new API key

**"Rate limit exceeded"**
- Free tier: 100 emails/day limit
- Wait or upgrade plan

---

## ✅ Step 6: Test Locally First

### Set Up Local Environment:
1. Create `.env.local` file in project root:
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=aisol2k25@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

2. Run development server:
```bash
npm run dev
```

3. Test form submission locally
4. Check console for errors

### Benefits:
- See detailed error messages
- Test without deploying
- Faster debugging cycle

---

## 🔍 Quick Diagnostic Checklist

Run through this checklist:

- [ ] All 3 environment variables set in Vercel?
- [ ] Variables set for Production environment?
- [ ] RESEND_API_KEY is correct (starts with `re_`)?
- [ ] FROM_EMAIL is verified in Resend OR using `onboarding@resend.dev`?
- [ ] CONTACT_TO_EMAIL is a valid email address?
- [ ] Resend account is active (not suspended)?
- [ ] Not exceeded Resend free tier limits (100 emails/day)?
- [ ] Checked Vercel function logs for errors?
- [ ] Checked Resend dashboard logs for email status?

---

## 🚀 Recommended Setup for Immediate Testing

**Use this configuration to get it working immediately:**

```env
RESEND_API_KEY=re_your_api_key_from_resend
CONTACT_TO_EMAIL=aisol2k25@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

**Why this works:**
- ✅ `onboarding@resend.dev` doesn't need verification
- ✅ Works immediately after setting variables
- ✅ Perfect for testing and initial launch

---

## 📋 Step-by-Step Fix Process

### If Form is Failing:

1. **Check Vercel Logs**
   - Go to Vercel → Your Project → Functions → View logs
   - Look for the error message
   - Note the exact error

2. **Check Resend Dashboard**
   - Go to Resend → Logs
   - See if emails are being attempted
   - Check error messages

3. **Verify Environment Variables**
   - Double-check all 3 variables in Vercel
   - Make sure no typos
   - Ensure they're set for Production

4. **Verify FROM_EMAIL**
   - If using Gmail: Must verify in Resend
   - If using `onboarding@resend.dev`: No verification needed
   - Check Resend → Domains/Email Addresses

5. **Test Locally**
   - Set up `.env.local`
   - Test form locally
   - Check console for detailed errors

6. **Redeploy**
   - After fixing variables, redeploy in Vercel
   - Test form again

---

## 🆘 Still Not Working?

### Get More Detailed Errors:

The form now provides more specific error messages:
- "Email service configuration error" = API key issue
- "Email domain not verified" = FROM_EMAIL verification issue
- "Email service temporarily unavailable" = Rate limit issue

### Check These:
1. **Vercel Function Logs**: Most detailed error information
2. **Resend Dashboard Logs**: Email sending status
3. **Browser Console**: Client-side errors (F12 → Console)
4. **Network Tab**: Check form submission request/response

### Common Solutions:

**Problem**: "Failed to send message" generic error
- **Solution**: Check Vercel logs for actual error

**Problem**: No emails in Resend dashboard
- **Solution**: API key likely wrong or missing

**Problem**: Emails in Resend but not delivered
- **Solution**: Check CONTACT_TO_EMAIL is correct

**Problem**: "Domain not verified" error
- **Solution**: Use `onboarding@resend.dev` or verify domain

---

## ✅ Verification Steps

After setting up, verify:

1. **Submit test form**
2. **Check toast notification** (should show success)
3. **Check your email** (CONTACT_TO_EMAIL inbox)
4. **Check Resend dashboard** (should show sent email)
5. **Check Vercel logs** (should show no errors)

---

## 📞 Need Help?

If you've checked everything and it's still not working:

1. **Check Vercel Function Logs** - Most important!
2. **Check Resend Dashboard Logs** - Email status
3. **Share the error message** from logs
4. **Verify environment variables** are set correctly

The most common issue is **FROM_EMAIL not verified**. Use `onboarding@resend.dev` for immediate testing!

---

## 🎯 Quick Fix Summary

**Most likely issue**: FROM_EMAIL not verified

**Quick fix**:
1. Set `FROM_EMAIL=onboarding@resend.dev` in Vercel
2. Redeploy
3. Test form

This should work immediately! ✅



