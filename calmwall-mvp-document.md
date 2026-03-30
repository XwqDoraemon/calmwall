# CalmWall — MVP Product Document

> Free anxiety-relief techniques + premium phone wallpapers. No login required. Built for the global market.

---

## 1. Product Overview

### Vision
Help people manage anxiety and emotional stress through simple, evidence-based psychological techniques — wrapped in beautiful phone wallpapers they see every day.

### Name
**CalmWall** (working title, domain TBD)

### Target Audience
- English-speaking users aged 18–35
- Primary markets: US, UK, Canada, Australia
- Pain point: mild-to-moderate anxiety, stress, emotional overwhelm
- Behavior: uses phone wallpaper as self-expression / daily reminder

### Core Model
| | Free | Paid |
|--|------|------|
| Techniques content | ✅ Full access | ✅ Included |
| Wallpapers (blurred preview) | ✅ Watermarked preview | — |
| Wallpapers (HD download) | — | ✅ After payment |

---

## 2. Techniques (5 Methods)

### 2.1 5-4-3-2-1 Grounding
- **What:** Notice 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste
- **When:** Panic attack, dissociation, spiraling thoughts
- **Source:** DBT (Dialectical Behavior Therapy)
- **Wallpaper reminder:** "5-4-3-2-1 — You are here. You are safe."

### 2.2 Mindfulness Meditation
- **What:** Focus on the present moment — breath, body sensations, environment — without judgment
- **When:** Morning routine, breaks, before sleep
- **Source:** MBSR (Mindfulness-Based Stress Reduction)
- **Wallpaper reminder:** "Breathe in. Breathe out. This moment is enough."

### 2.3 Pomodoro Technique
- **What:** Work in focused 25-min blocks, then take a 5-min break. After 4 cycles, take a longer break
- **When:** Overwhelmed by tasks, procrastination, burnout
- **Source:** Francesco Cirillo (1980s)
- **Wallpaper reminder:** "25 minutes. One thing. You've got this."

### 2.4 Sensory Grounding
- **What:** Activate your senses intentionally — hold ice, smell lavender, listen to rain, sip cold water — to anchor back to the present
- **When:** Flashbacks, emotional flooding, anxiety spikes
- **Source:** Trauma-informed therapy / Somatic experiencing
- **Wallpaper reminder:** "Feel the ground beneath you. You are anchored."

### 2.5 Name It to Tame It
- **What:** Label your emotion specifically ("I'm feeling frustrated because...") to reduce amygdala activation and engage the prefrontal cortex
- **When:** Intense emotions, emotional overwhelm, conflict
- **Source:** Dr. Dan Siegel / affect labeling research
- **Wallpaper reminder:** "Name it. Don't numb it."

---

## 3. MVP Feature Scope

### In Scope (V1)
- [ ] Landing page with hero section + 5 technique cards
- [ ] 5 technique detail pages (What / When / How)
- [ ] Blurred/watermarked wallpaper preview on each page
- [ ] "Get This Wallpaper" CTA → payment page
- [ ] Payment via **Gumroad** (zero development for MVP)
- [ ] Mobile-first responsive design
- [ ] Deployed on **Cloudflare Pages**
- [ ] Basic SEO (meta tags, Open Graph, structured data)

### Out of Scope (V1 → V2+)
- User accounts / login
- Email subscription (Gumroad handles buyer email collection)
- Blog / content marketing pages
- Animation / interactive elements
- Multiple language support
- Native app

---

## 4. Site Architecture

```
/                    → Landing page (hero + technique cards)
/grounding           → 5-4-3-2-1 Grounding detail
/mindfulness         → Mindfulness Meditation detail
/pomodoro            → Pomodoro Technique detail
/sensory             → Sensory Grounding detail
/name-it             → Name It to Tame It detail
/gumroad.com/...     → External payment (Gumroad hosted)
```

### Page: Landing Page
| Section | Content |
|---------|---------|
| Hero | Tagline + subtitle + CTA button |
| Techniques Grid | 5 cards (image preview + title + 1-line description + "Learn More") |
| How It Works | 3 steps: Learn → Practice → Download Wallpaper |
| Footer | Links + disclaimer |

### Page: Technique Detail
| Section | Content |
|---------|---------|
| Hero | Method name + 1-line summary |
| What Is It? | 150-200 words explanation |
| When to Use It | Trigger scenarios (bulleted list) |
| How to Do It | Step-by-step (3-5 steps, numbered) |
| Wallpaper Preview | Blurred/watermarked image + "Get This Wallpaper" button |
| Navigation | Back to home + other techniques |

---

## 5. Wallpaper Design

### Specs
| Item | Value |
|------|-------|
| Dimensions | 1080 × 1920px (iPhone) + 1440 × 3200px (Android hi-res) |
| Format | PNG / JPG |
| Style | Minimalist, calming, soft gradients or nature photography |
| Text overlay | Technique name + 1-line reminder quote |
| Color palette | Sage green, lavender, soft blue, warm sand, blush pink |

### Quantity (MVP)
- 3 wallpapers per technique = **15 wallpapers total**
- Each wallpaper available in 2 sizes = **30 files**

### Design Tool
- Background images: **Midjourney** (prompts below)
- Text overlay & layout: **Canva** or **Figma**

### Midjourney Prompts (Examples)
```
Minimalist phone wallpaper, soft sage green gradient background,
single floating leaf, clean negative space, calming, aesthetic,
8k, --ar 9:16 --style raw

Minimalist phone wallpaper, soft lavender mist, gentle waves,
abstract zen, peaceful atmosphere, muted tones, 8k, --ar 9:16

Minimalist phone wallpaper, warm sunrise gradient, soft light
rays through clouds, hopeful, serene, clean composition, 8k,
--ar 9:16 --style raw
```

---

## 6. Payment & Monetization

### Platform: Gumroad (MVP)

**Why Gumroad:**
- Zero development — upload files, set price, get link
- Built-in payment processing (Stripe + PayPal)
- Handles email delivery, receipts, tax
- "Pay what you want" option built-in
- Free to start (10% fee per sale)

### Pricing
| Product | Price | Strategy |
|---------|-------|----------|
| Single wallpaper | $0.99 | Impulse buy, low friction |
| Technique bundle (3 wallpapers) | $2.99 | Better perceived value |
| Full collection (15 wallpapers) | $4.99 | Anchor product, main revenue |
| Pay-what-you-want (full set) | $1+ | Generosity-driven, viral potential |

### Flow
```
User clicks "Get This Wallpaper" on site
  → Redirects to Gumroad product page
  → User enters email + payment
  → Gumroad sends download link to email
  → User downloads wallpaper
```

### Revenue Estimate (Conservative)
| Scenario | Monthly Downloads | Avg Revenue |
|----------|-------------------|-------------|
| 100 visitors/day, 2% conversion | 60 sales | ~$180 |
| 500 visitors/day, 2% conversion | 300 sales | ~$900 |
| 1000 visitors/day, 3% conversion | 900 sales | ~$3,600 |

---

## 7. Technical Implementation

### Tech Stack
| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Astro** (or plain HTML) | Zero JS by default, fast, SEO-friendly |
| Styling | **Tailwind CSS** | Rapid prototyping, responsive |
| Hosting | **Cloudflare Pages** | Free, fast global CDN, auto-deploy from Git |
| Images | **Base64 inline** (previews) + **Gumroad hosted** (paid) | No storage needed |
| Payment | **Gumroad embed links** | Zero backend |
| Domain | Purchase via Cloudflare Registrar (~$10/year) |

### Project Structure
```
calmwall/
├── public/
│   ├── wallpapers/       # Blurred preview images (small, webp)
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── TechniqueCard.astro
│   │   ├── WallpaperPreview.astro
│   │   └── Footer.astro
│   └── pages/
│       ├── index.astro
│       ├── grounding.astro
│       ├── mindfulness.astro
│       ├── pomodoro.astro
│       ├── sensory.astro
│       └── name-it.astro
├── tailwind.config.js
└── package.json
```

### Deployment
```bash
# One-time setup
npm create astro@latest calmwall
cd calmwall
npx astro add tailwind cloudflare

# Deploy
git remote add origin <your-repo>
git push origin main
# Cloudflare Pages auto-deploys from GitHub
```

### Image Strategy (No Storage)
- **Preview wallpapers:** Optimized WebP, 200-300KB each, base64 or `public/` folder → served by Cloudflare CDN
- **Full-res wallpapers:** Hosted on Gumroad, never stored on the site
- Total preview assets: ~15 files × 300KB = ~4.5MB → trivial

---

## 8. SEO & Traffic Strategy

### On-Page SEO
- Each technique page targets specific keywords:
  - `/grounding` → "5-4-3-2-1 grounding technique", "grounding exercises for anxiety"
  - `/mindfulness` → "mindfulness for beginners", "how to meditate for anxiety"
  - `/pomodoro` → "pomodoro technique for anxiety", "focus technique for overwhelm"
  - `/sensory` → "sensory grounding exercises", "somatic anxiety relief"
  - `/name-it` → "name it to tame it", "emotion labeling technique"
- Meta tags, Open Graph images, Twitter Cards on every page
- Structured data (FAQ schema on technique pages)

### Off-Page Traffic (MVP Phase)
| Channel | Action | Effort |
|---------|--------|--------|
| **Pinterest** | Create pins from wallpaper previews, link to technique pages | Low, high long-term ROI |
| **Reddit** | Post in r/anxiety, r/selfimprovement, r/CasualConversation | Medium, sensitive to self-promotion |
| **Product Hunt** | Launch day post | One-time, high spike |
| **Instagram Reels** | 15-sec wallpaper reveal videos | Medium, needs content |
| **TikTok** | Same format as Reels | Medium |
| **Medium** | Republish technique content with CTA | Low |

---

## 9. MVP Timeline

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| **Week 1** | Content & Design | Write all technique copy; Generate 15 wallpaper images in Midjourney; Design wallpaper layouts in Canva |
| **Week 2** | Build & Deploy | Build Astro site with all pages; Set up Gumroad products; Deploy to Cloudflare Pages; Connect domain |
| **Week 3** | Polish & Launch | Mobile testing; SEO meta tags; Open Graph images; Product Hunt launch; Initial social posts |
| **Week 4** | Observe & Iterate | Monitor traffic + sales; Collect feedback; Fix issues; Start Pinterest content pipeline |

**Total MVP build time: ~2-3 weeks (part-time)**

---

## 10. Costs

| Item | Cost |
|------|------|
| Cloudflare Pages | Free |
| Cloudflare R2 | Free (if needed later) |
| Domain (.com) | ~$10/year |
| Midjourney subscription | $10/month (Basic, ~200 images) |
| Canva | Free |
| Gumroad | Free (10% per transaction) |
| **Total (MVP)** | **~$20/month** |

---

## 11. Success Metrics (MVP)

| Metric | Target (Month 1) | Target (Month 3) |
|--------|-------------------|-------------------|
| Unique visitors | 1,000 | 10,000 |
| Wallpaper sales | 20 | 200 |
| Revenue | ~$60 | ~$600 |
| Email list (via Gumroad) | 20 | 200 |
| Pinterest impressions | 5,000 | 50,000 |

---

## 12. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Low conversion rate | A/B test pricing; improve wallpaper quality; add social proof |
| Gumroad reliability | V2: migrate to Stripe Checkout (self-hosted) |
| Image quality insufficient | Use Midjourney v6+; manual retouch in Canva; test with target users |
| No one finds the site | Prioritize Pinterest SEO; post on Reddit authentically |
| Copyright concerns on AI images | Midjourney terms allow commercial use; add human editing to ensure uniqueness |

---

## 13. V2 Roadmap (Post-MVP)

- [ ] Stripe Checkout integration (own payment flow)
- [ ] Email collection + nurture sequence
- [ ] New techniques (box breathing, body scan, journaling, etc.)
- [ ] Monthly wallpaper subscription ($2.99/mo)
- [ ] Interactive technique guides (animation/audio)
- [ ] Community features (user stories, anonymous sharing)
- [ ] PWA / offline access

---

*Document version: MVP v1.0 | Date: 2026-03-27*
