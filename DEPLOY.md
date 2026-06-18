# Iron Tribe Fitness Gym — Deployment Guide
Aurora Digital Foundry · Infrastructure Stack v1.1

---

## Prerequisites

- Google account (for Google Sheets + Apps Script)
- GitHub account (for GitHub Pages hosting)
- Git installed locally

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **Iron Tribe Fitness Gym**
4. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_IS_HERE/edit
   ```

---

## Step 2 — Set Up Google Apps Script

1. In the spreadsheet, click **Extensions → Apps Script**
2. Delete the default `Code.gs` content
3. Create two script files:

### Code.gs
Paste the full contents of `gas/Code.gs`

### Setup.gs
Click the **+** next to Files → Script  
Name it `Setup`  
Paste the full contents of `gas/Setup.gs`

4. In `Code.gs`, paste your Spreadsheet ID on line 10:
   ```javascript
   var SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
   ```

5. Click **Save** (Ctrl+S or ⌘+S)

---

## Step 3 — Initialize the Sheets

1. In Apps Script, select function: `initializeSheets`
2. Click **Run**
3. Approve the permissions dialog when prompted
4. You should see: `✅ Iron Tribe sheets initialized successfully!`

This creates all 8 tabs with headers, gold/black styling, and sample data.

---

## Step 4 — Deploy the GAS Web App

1. Click **Deploy → New Deployment**
2. Click the gear icon ⚙️ next to Type → select **Web app**
3. Set the following:
   - **Description**: Iron Tribe Backend v1
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Approve any additional permissions
6. Copy the **Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfy.../exec
   ```

> **Important:** Every time you edit Code.gs, you must create a **New Deployment** (not update) to reflect changes.

---

## Step 5 — Wire the Frontend

1. Open `index.html`
2. Find this line near the top of the `<script type="text/babel">` block:
   ```javascript
   const REACT_CONFIG={GAS_URL:''};
   ```
3. Paste your GAS Web App URL:
   ```javascript
   const REACT_CONFIG={GAS_URL:'https://script.google.com/macros/s/YOUR_URL/exec'};
   ```
4. Save the file

---

## Step 6 — Push to GitHub

```bash
# First time setup
git init
git remote add origin https://github.com/YOUR_USERNAME/iron-tribe-fitness-simulator.git

# Push
git add .
git commit -m "feat: wire GAS backend"
git push origin main
```

If you see a `.git/index.lock` error:
```bash
rm -f .git/index.lock
git push origin main
```

---

## Step 7 — Enable GitHub Pages

1. Go to your GitHub repo
2. **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Click **Save**
6. Wait ~2 minutes — your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/iron-tribe-fitness-simulator/
   ```

---

## Step 8 — Verify

1. Open the live URL
2. Scroll to the bottom → click **Operator Suite**
3. Enter PIN: `irontribe2026`
4. Each panel should load live data from the Google Sheet
5. Test Add/Edit/Delete on any panel — changes persist to Sheets immediately

If any panel shows **"GAS_URL not configured"**, go back to Step 5.

---

## Operator Suite — Default Credentials

| Field | Value |
|-------|-------|
| PIN | `irontribe2026` |
| Gym Name | Iron Tribe Fitness Gym |
| Location | Malvar, Batangas |
| Tax Rate | 25% |

Change these in **Settings** panel after first login.

---

## Sheet Structure

| Tab | Purpose |
|-----|---------|
| Members | Member records + plan + status |
| Leads | CRM pipeline |
| Coaches | Team directory |
| Bookings | Class schedule |
| Challenges | Active programs |
| Reviews | Reputation management |
| Transactions | Revenue + expenses (P&L source) |
| Settings | Gym configuration (key-value) |

---

## GAS Redeployment

After any change to `Code.gs` or `Setup.gs`:
1. Apps Script → **Deploy → New Deployment**
2. Copy the new URL
3. Update `REACT_CONFIG.GAS_URL` in `index.html`
4. Commit and push

---

## Photo CDN Note

Facebook CDN URLs used in the build expire approximately **June 21, 2026**.

Before expiry:
1. Download all images from the Facebook CDN links in `index.html`
2. Commit them to `/images/` in this repo
3. Update image `src` attributes to use `/images/filename.jpg`

---

*Aurora Digital Foundry — Manufactured, not assembled.*
