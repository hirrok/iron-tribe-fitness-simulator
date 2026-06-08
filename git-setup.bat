@echo off
cd /d "%~dp0"
echo.
echo ============================================
echo  Iron Tribe Fitness — Git Setup
echo  Aurora Digital Foundry
echo ============================================
echo.

echo [1/4] Initializing git repository...
git init
git branch -M main

echo.
echo [2/4] Staging all files...
git add .

echo.
echo [3/4] Creating initial commit...
git commit -m "feat: Iron Tribe Fitness Simulator v1.0 — Aurora Digital Foundry

- 10-page public site (Home, Memberships, Coaching, Classes, Transformations, About, Contact, Join, Stories, FAQ)
- 12-module Aurora Operator Suite admin backend
- Full dark mode, Philippine pricing, Filipino mock data
- Local payment UI: GCash / Maya / Card / QR Ph
- AI Console, BI Dashboard, Lead Kanban, Member CRM
- Self-contained demo.html (no build required)
- Astro + Tailwind production scaffold

Built by Aurora Digital Foundry | Class B Revenue Prototype"

echo.
echo [4/4] Done! Repo initialized on branch: main
echo.
echo ============================================
echo  NEXT STEP: Add your GitHub remote.
echo  Run this command (replace YOUR_USERNAME):
echo.
echo  git remote add origin https://github.com/YOUR_USERNAME/iron-tribe-fitness-simulator.git
echo  git push -u origin main
echo ============================================
echo.
pause
