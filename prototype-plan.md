# Iron Tribe Fitness — Prototype Plan
**Aurora Digital Foundry | Foundry Lifecycle Stage: Prototype**
**Date:** June 2026 | **Output:** Demo-ready simulator + Astro repo scaffold

---

## Prototype Objectives

A prototype is not a mockup. A prototype is a business capability demonstration.

This prototype answers: **"If Iron Tribe Fitness operated like a category-leading independent gym, what would that look like?"**

The demo must make the owners think: **"We need this for the real gym."**

---

## Deliverable Stack

| Deliverable | Format | Purpose |
|---|---|---|
| `recon.md` | Markdown | Foundry lifecycle doc |
| `assessment.md` | Markdown | Scoring + gap analysis |
| `blueprint.md` | Markdown | Full system architecture |
| `prototype-plan.md` | Markdown | This document |
| `demo.html` | Self-contained HTML | The sales weapon — opens in browser, no build |
| `package.json` | JSON | Astro project scaffold |
| `astro.config.mjs` | JS | Astro config |
| `tailwind.config.mjs` | JS | Design system config |
| `src/` | Directory | Production Astro source tree |

---

## Demo Simulator Architecture

The `demo.html` file is a single-file SPA containing all public and admin views. No dependencies, no server, no build step. Open in Chrome → full experience.

### Public Pages (10)

1. **Home** — Hero, programs, coaches, transformations, schedule preview, pricing, testimonials, CTA, location
2. **Memberships** — Plan comparison (Student / Regular / Annual), feature matrix, FAQ
3. **Coaching** — 4 coach profiles, program descriptions, coaching philosophy
4. **Classes** — Weekly schedule grid, class descriptions, booking modal
5. **Transformations** — Before/after gallery, member stats, transformation stories
6. **About The Tribe** — Gym story, values, team, location
7. **Contact** — Inquiry form, map placeholder, hours, phone
8. **Join Now** — 6-step onboarding flow with payment UI
9. **Success Stories** — Deep testimonials with photos and stats
10. **FAQ** — Accordion, 15+ questions covering pricing, coaching, classes, payments

### Admin Modules (12)

1. **Dashboard** — KPI cards, alerts, next actions, revenue trend
2. **Leads** — Kanban pipeline with 7 stages, lead cards, quick actions
3. **Members** — CRM table, search/filter, member profiles, attendance badges
4. **Coaches** — Coach cards, utilization meters, assigned members
5. **Membership Pipeline** — Funnel visualization, conversion rates
6. **Bookings** — Weekly calendar view, class roster, attendance marking
7. **Challenges** — Active challenges, leaderboards, completion progress
8. **Reviews** — Review tracking table, testimonial extraction, Google opportunity list
9. **Marketing** — Campaign builder, social content generator, referral tools
10. **Intelligence** — BI dashboard: program popularity, lead sources, peak times, churn risk
11. **AI Console** — Simulated AI outputs: trend analysis, owner brief, campaign generation
12. **Settings** — Pricing, plans, staff, notification preferences

---

## Mock Data Manifest

### Members (30 records)
Filipino names, real Malvar/Batangas context. Mix of student and regular plans. Attendance ranging from 45% to 98%.

### Coaches (4 profiles)
- **Coach Jun Mendoza** — Head Coach, Strength & Conditioning
- **Coach Ana Reyes** — Nutrition & Body Composition Specialist
- **Coach Paolo Santos** — Calisthenics & Athletic Performance
- **Coach Rica Lim** — Group Classes & Cardio

### Leads (18 records in pipeline)
Distributed across all 7 stages. Mix of Facebook, Instagram, referral, walk-in sources.

### Revenue (PHP)
- MTD Revenue: ₱87,500
- Active Members: 67
- Monthly run-rate implied: ~₱95,000–₱110,000

### Classes (weekly schedule)
8 class slots across 4 types, Mon–Sat schedule.

### Active Challenges (2)
- Iron Month (attendance), 23 participants, ends June 30
- 30-Day Transformation Challenge, 12 participants, ends July 15

---

## Astro Project Scaffold

### Repository Structure

```
iron-tribe-fitness-simulator/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro        ← Public site shell
│   │   └── AdminLayout.astro       ← Admin shell with sidebar
│   ├── components/
│   │   ├── nav/
│   │   │   ├── TopNav.astro
│   │   │   └── AdminSidebar.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── WhyIronTribe.astro
│   │   │   ├── Programs.astro
│   │   │   ├── CoachHighlights.astro
│   │   │   ├── MemberTransformations.astro
│   │   │   ├── SchedulePreview.astro
│   │   │   ├── MembershipPlans.astro
│   │   │   ├── Testimonials.astro
│   │   │   └── LeadCaptureCTA.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   ├── StatCard.astro
│   │   │   ├── Modal.astro
│   │   │   └── ProgressBar.astro
│   │   └── admin/
│   │       ├── KPICard.astro
│   │       ├── LeadKanban.astro
│   │       ├── MemberTable.astro
│   │       ├── CoachCard.astro
│   │       ├── BookingCalendar.astro
│   │       ├── ChallengeCard.astro
│   │       ├── BIChart.astro
│   │       └── AIConsole.astro
│   ├── pages/
│   │   ├── index.astro             ← Home
│   │   ├── memberships.astro
│   │   ├── coaching.astro
│   │   ├── classes.astro
│   │   ├── transformations.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── join.astro
│   │   ├── stories.astro
│   │   ├── faq.astro
│   │   └── admin/
│   │       ├── index.astro         ← Dashboard
│   │       ├── leads.astro
│   │       ├── members.astro
│   │       ├── coaches.astro
│   │       ├── pipeline.astro
│   │       ├── bookings.astro
│   │       ├── challenges.astro
│   │       ├── reviews.astro
│   │       ├── marketing.astro
│   │       ├── intelligence.astro
│   │       ├── ai.astro
│   │       └── settings.astro
│   └── data/
│       ├── members.ts
│       ├── coaches.ts
│       ├── leads.ts
│       ├── classes.ts
│       ├── challenges.ts
│       └── mockMetrics.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Execution Sequence

1. ✅ **Recon** — Complete
2. ✅ **Assessment** — Complete
3. ✅ **Blueprint** — Complete
4. ✅ **Prototype Plan** — This document
5. 🔨 **Implementation** — `demo.html` self-contained simulator
6. 🔨 **Astro scaffold** — Repository structure + config files
7. 🔨 **Deployment** — GitHub Pages via Actions
8. 🔨 **Presentation** — Demo walk-through for ownership meeting

---

## Success Criteria

The prototype succeeds if, after a 20-minute demo walk-through, the owners say:

> "We need this for the real gym."

Failure indicators:
- "It's nice but I don't really see what it does" → Too aesthetic, not enough capability
- "We already have something like this" → Research gap (no evidence of this)
- "This seems too expensive" → Frame against lead leakage cost, not build cost

---

*Prototype plan complete. Begin implementation.*
