# Deployment Guide: React/Vite to AWS Amplify with Custom Domain

This document outlines the professional deployment workflow for the **MyPortFolio** project using AWS Amplify and a custom domain via GoDaddy.

## 1. Local Preparation
Before deploying, ensure the project builds correctly to catch any production errors.
```powershell
npm run build
```

## 2. Version Control (GitHub)
AWS Amplify uses CI/CD (Continuous Integration/Deployment). It watches your GitHub repository and redeploys automatically on every push.

**Commands used:**
```powershell
git add .
git commit -m "pre-deployment build"
git push origin main
```

## 3. AWS Amplify Setup
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/amplify).
2. Choose **Host web app**.
3. Connect your **GitHub repository** and select the `main` branch.
4. **Build Settings**: Amplify automatically detects Vite settings:
   - Base directory: `dist`
   - Build command: `npm run build`
5. Click **Save and Deploy**.

## 4. Custom Domain Configuration (GoDaddy)
Since the domain `janipalliteja.in` was purchased on GoDaddy, manual DNS records were required.

### A. SSL Verification (The Ownership Check)
To issue a security certificate, AWS provides a unique CNAME record.
- **Type**: `CNAME`
- **Name**: `_c11a9f773...` (Only copy the string before your domain name)
- **Value**: The long AWS-provided string ending in `.acm-validations.aws`

### B. The WWW Subdomain
Points the `www` version of your site to the AWS CloudFront network.
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `dd35dc1w1b4c.cloudfront.net` (Your specific Amplify ID)

### C. The Root Domain (Naked Domain) Workaround
GoDaddy does not support `ANAME` or `ALIAS` records for root domains (`janipalliteja.in`).
- **Solution**: Use **GoDaddy Forwarding**.
- **Settings**: Forward `https://janipalliteja.in` to `https://www.janipalliteja.in`.
- **Type**: Permanent (301).

## 5. Deployment Lifecycle
Your site is now fully automated.
1. **Push Code**: `git push origin main`
2. **Auto-Build**: AWS detects the push, builds the React app, and runs optimizations.
3. **Global Update**: AWS pushes the new files to its Edge locations (CDN) globally.
4. **Live**: Changes appear on `janipalliteja.in` within ~2 minutes.

---
**Status**: Live 🚀
**URL**: [https://www.janipalliteja.in](https://www.janipalliteja.in)
