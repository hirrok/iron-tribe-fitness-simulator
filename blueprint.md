# Iron Tribe Fitness Gym — Infrastructure Blueprint
**Aurora Digital Foundry | Foundry Lifecycle Stage: Blueprint**
**Date:** June 2026 | **Build Class:** B — Revenue | **Stack:** Astro + Tailwind + GAS/Sheets

---

## Blueprint Summary

This document defines the full infrastructure system for Iron Tribe Fitness Gym. It is not a website spec. It is a business capability system that happens to have a website as its public interface.

**System objective:** Convert Iron Tribe's existing brand warmth and coaching culture into a measurable, scalable revenue engine — anchored by owned digital infrastructure, not rented social surfaces.

---

## Architecture Overview

```
[Social / Google Discovery]
         ↓
[Premium Website — Public Interface]
    10 pages · Lead capture · Booking · Join Now
         ↓
[Lead CRM — Layer 2]
    Inquiry → Contacted → Assessment → Trial → Member
         ↓
[Member Operations — Layer 3]
    CRM · Coach Assignment · Bookings · Attendance
         ↓
[Retention Engine — Layer 4]
    Challenges · Streaks · Reviews · Referrals
         ↓
[Owner Intelligence — Layer 5]
    Dashboard · Revenue · Churn Risk · Next Actions
```

---

## Public Interface — Layer 1

### Page Architecture

| Page | Purpose | Primary CTA |
|---|---|---|
| Home | Discovery hub, brand trust, offer preview | Book Free Assessment |
| Memberships | Plan comparison, pricing clarity | Join Now |
| Coaching | Coach roster, program descriptions | Book a Session |
| Classes | Schedule viewer, booking flow | Reserve a Spot |
| Transformations | Social proof, before/after gallery | Start Your Journey |
| About The Tribe | Brand story, values, team | Meet the Coaches |
| Contact | Location, hours, inquiry form | Send Message |
| Join Now | Multi-step onboarding + payment | Confirm & Pay |
| Success Stories | Deep testimonials, transformation narratives | Read More |
| FAQ | Objection handling, policy clarity | Get Started |

### Homepage Section Architecture

1. **Hero** — Full-screen, dark mode, athletic energy. Tagline: "Become the Strongest Version of Yourself." CTAs: "Start Your Fitness Journey" + "Book a Free Assessment"
2. **Why Iron Tribe** — 4 differentiators: Guided Progress, Community Accountability, Flexible Plans, Free Assessment
3. **Programs** — Program cards: Strength Training, Body Composition, Calisthenics, Group Classes
4. **Coach Highlights** — 3 featured coaches with photo, specialty, CTA
5. **Member Transformations** — Before/after gallery with stats
6. **Class Schedule Preview** — This week's classes with times and availability
7. **Membership Plans** — Student / Regular / Annual comparison cards with pricing
8. **Community Gallery** — Grid of member moments
9. **Testimonials** — 3 featured reviews with star ratings
10. **Lead Capture CTA** — "Ready to start?" full-width section
11. **Location** — Map embed, hours, contact info
12. **Footer** — Links, socials, legal

---

## Lead Capture System — Layer 2

### Funnel Architecture

```
Discovery (Social / Google / Walk-in)
    ↓
Landing Page / Book Assessment CTA
    ↓
Lead Form: Name + Phone + Email + Goal + How did you hear about us?
    ↓
Auto-confirmation (SMS/Messenger) + CRM entry
    ↓
Assessment Visit
    ↓
Offer Presentation: Program + Plan recommendation
    ↓
Join Now (payment checkout)
    ↓
Welcome sequence
```

### Lead Pipeline Stages

1. **New Inquiry** — Form submitted or DM captured
2. **Contacted** — Staff reached out
3. **Assessment Booked** — Visit scheduled
4. **Trial Completed** — First session done
5. **Offer Sent** — Membership plan presented
6. **Joined** — Active member ✓
7. **Lost** — Did not convert
8. **Dormant** — Went silent, re-engage flow

### Join Now Flow

```
Step 1: Choose Path (Assessment / Monthly / Annual)
Step 2: Choose Plan (Student / Regular)
Step 3: Add-ons (Coach Check-ins / Body Comp Review)
Step 4: Personal Details (Name / Mobile / Email / Goals)
Step 5: Consent (Waiver / Privacy / Photo consent)
Step 6: Payment (GCash / Maya / Card / QR Ph)
Step 7: Confirmation + Welcome
```

---

## Member Operations — Layer 3

### Member CRM Fields

```
Name | Phone | Email | Goal | Program | Coach | Plan | 
Join Date | Last Visit | Attendance % | Status | Notes
```

### Coach Assignment Logic

- Every member is assigned one primary coach at intake
- Coach check-in frequency: 2x/week (as per current positioning)
- Coach dashboard shows assigned members, pending check-ins, progress flags

### Class Booking System

- Class types: Strength Training, Body Composition, Calisthenics, Group Cardio
- Capacity per class: configurable (default 12)
- Booking: Online + walk-in
- Waitlist: Auto-notify when spot opens
- Attendance: Coach marks present/absent → triggers streak tracking

---

## Retention Engine — Layer 4

### Challenge Module

| Challenge Type | Duration | Mechanic |
|---|---|---|
| 30-Day Consistency | 30 days | Attend 20+ sessions |
| 90-Day Transformation | 90 days | Body comp + performance metrics |
| Referral Blitz | 30 days | Bring 2 friends who join → prize |
| Iron Month | Monthly | Most attendance sessions |

### Streak & Milestone System

- Attendance streaks: 7-day, 30-day, 90-day badges
- Milestones: First session, 10th session, 50th session, 1-year anniversary
- Achievement triggers: Review request, social share prompt, coach shoutout
- Risk trigger: No visit in 7 days → coach check-in alert

### Review Engine

- Trigger: Post-milestone (30-day, transformation complete, challenge win)
- Delivery: SMS + Messenger
- Target: Google Business Profile
- Track: Requested / Received / Response rate

---

## Owner Intelligence — Layer 5

### Dashboard KPIs

```
Today's View:
├── New Leads (last 7 days)
├── Trials Scheduled (this week)
├── Membership Conversions (MTD)
├── Active Members
├── Members At Risk (no visit 7+ days)
├── Attendance % (gym average, today)
├── Monthly Revenue (MTD vs last month)
├── Coach Utilization %
├── Review Requests Pending
└── Next Best Actions (AI-generated)
```

### Business Intelligence Views

- Most popular program by enrollment
- Best converting lead source (FB / Google / Referral / Walk-in)
- Peak attendance times (hour/day heatmap)
- Membership churn risk score per member
- Lead response time performance
- Challenge participation rate
- Top revenue drivers by plan type

### AI Console (Simulated)

- Analyze membership trends → narrative summary
- Find churn risks → flagged member list with reasons
- Generate weekly owner brief → formatted report
- Create social campaign → content calendar
- Generate transformation story → member narrative
- Monthly report → full business review

---

## Data Spine — Google Sheets Architecture

| Tab | Fields |
|---|---|
| Leads | ID, Name, Phone, Email, Source, Stage, Date, Coach, Notes |
| Members | ID, Name, Contact, Goal, Program, Coach, Plan, Join Date, Last Visit, Attendance%, Status |
| Coaches | ID, Name, Specialty, Assigned Members, Utilization%, Status |
| Memberships | ID, Member, Plan, Start Date, End Date, Amount, Payment Method, Status |
| Bookings | ID, Member, Class, Date, Time, Status (Booked/Attended/No-show) |
| Challenges | ID, Name, Type, Start, End, Participants, Completions, Prize |
| Reviews | ID, Member, Platform, Requested Date, Received Date, Rating, Testimonial |
| Marketing | ID, Campaign, Type, Launch Date, Reach, Conversions, Cost |
| Intelligence_Log | ID, Date, Metric, Value, Notes |
| Settings | Key, Value |

**Production path:** Google Sheets + Apps Script (v1) → Supabase (v2 when scale justifies)

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Background Base | `#070709` | Page background |
| Background Card | `#0F0F12` | Cards, panels |
| Background Elevated | `#1A1A1F` | Modals, dropdowns |
| Border | `#1E1E24` | Dividers, card borders |
| Red Primary | `#EF4444` | CTAs, alerts, accent |
| Gold Accent | `#F59E0B` | Achievement, highlight |
| Green Success | `#10B981` | Active status, positive |
| Text Primary | `#F5F5F7` | Headings, main copy |
| Text Secondary | `#9CA3AF` | Supporting copy |
| Font Display | Bebas Neue | Hero headings |
| Font Body | Inter | All UI copy |

---

## Deployment Architecture

```
iron-tribe-fitness-simulator/    ← Standalone demo repo (GitHub Pages)
├── demo.html                     ← Self-contained simulator (no build)
├── src/                          ← Astro production source
│   ├── pages/                    ← 10 public + 12 admin pages
│   ├── components/               ← Shared UI components
│   ├── layouts/                  ← BaseLayout, AdminLayout
│   └── data/                     ← Mock data / types
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

**Demo delivery:** `demo.html` opened in browser — no server, no build, works offline in client meeting.
**Production path:** Astro build → GitHub Pages → custom domain.

---

## Compliance Requirements

- Philippine Data Privacy Act of 2012 compliance
- Explicit waiver and consent checkboxes on Join Now flow
- Photo/video consent separate checkbox
- Role-based staff access (owner / coach / staff)
- Payment tokenization via PayMongo (no card data stored)
- Breach notification procedure documented

---

*Blueprint complete. Proceed to Prototype Plan.*
