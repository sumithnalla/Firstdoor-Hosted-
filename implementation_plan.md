# FirstDoor Website: Plan Implementation + Mobile Optimization

## Summary of Changes

Based on `claudepla.md`, the following changes are needed across all pages. After content changes, the entire site will be mobile-optimized with Framer Motion animations.

---

## Pages That Need Major Changes

### 1. Home Page (`Home.tsx`) — Missing Sections
Current home has: Hero → Popular Areas → Two Ways → Featured Properties → Why FirstDoor → Final CTA

**Missing sections to ADD:**
- **Stats / Social Proof Bar** — after Hero (₹50Cr managed · 1L sqft sold · 100+ customers · 700+ RERA projects)
- **Investment Returns Highlight** — "Invest ₹1Cr → ₹75,000/month rental income" bold callout
- **Services Overview** — 6 icon cards (Residential, Commercial, Plots & Villas, Rental, Fractional Investment, No Brokerage)
- **New Launches Section** — 2–3 new launch project cards w/ "New Launch" badge + FOMO CTA
- **WhatsApp Community Callout** — dedicated section explaining community benefits

**Update stats** to match plan:
- ₹50 Crores Property Under Management
- 1 Lakh Sqft Sold
- 100+ Happy Customers  
- 700+ RERA Verified Projects

---

### 2. Services Page (`Services.tsx`) — **NEW PAGE** (doesn't exist yet)
Full new page with these sections:
1. Hero — "Your Complete Real Estate Partner in Hyderabad"
2. Residential Services
3. Commercial Services ⭐ (visually highlighted - client emphasized)
4. Rental Services (split Owner/Tenant)
5. Investment & ROI (₹1Cr → ₹75K/month callout, 6–15% returns)
6. No Brokerage / No Hidden Fees
7. Expert Guidance & Documentation
8. Bottom CTA

Must add `/services` route to `App.tsx` and navbar.

---

### 3. About Page (`About.tsx`) — Minor Updates
Current about is mostly fine. Updates:
- **Stats strip** must use plan numbers: ₹50Cr · 1L sqft · 100+ customers · 700+ RERA projects
- **Agent Intro** — add photo placeholder + title "Hyderabad Real Estate Expert"
- **Values/Principles** — keep existing 4 values (they match plan)
- Add a dedicated **Stats Strip** section (currently has stats inside the bio card only)

---

### 4. Contact Page (`Contact.tsx`) — Minor Updates
Current contact is mostly aligned. Updates:
- **Hero** — update to "Let's Find Your Perfect Property" ✓ (already there)
- Ensure Two Big Cards (Call + WhatsApp) are prominent at top
- **WhatsApp Community Section** — update benefits to match plan bullets
- Confirm email `sumithofficial2@gmail.com` is displayed ✓

---

## Animation & Mobile Optimization

All pages will use **Framer Motion** with these patterns:
- `fadeUp` — fade + slide up for section entries (already used, will standardize)
- `staggerChildren` — stagger card grids for natural reveal
- `whileHover` — subtle scale/lift on cards and buttons
- `useInView` — trigger animations once on scroll
- `AnimatePresence` — smooth mount/unmount for the mobile menu (already used)

**Mobile-specific fixes:**
- Hero CTA buttons — full-width stack on mobile, side-by-side on md+
- Stats bars — 2-col grid on mobile
- Property carousel — swipe-friendly with proper touch targets
- Services cards — 1-col on mobile, 2-col on sm, 3-col on lg
- New Launches — 1-col stack on mobile
- Navbar — ensure mobile menu is smooth and compact
- All section padding — reduce on mobile (`py-10 sm:py-20`)
- Font sizes — clamped for readability on small screens
- Touch targets — minimum 44px tap areas throughout

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/Home.tsx` | MODIFY — add 5 new sections, update stats |
| `src/pages/Services.tsx` | NEW — full services page |
| `src/pages/About.tsx` | MODIFY — update stats strip |
| `src/pages/Contact.tsx` | MINOR — update benefits list |
| `src/App.tsx` | MODIFY — add `/services` route |
| `src/components/layout/Navbar.tsx` | MODIFY — add Services link |
| `src/components/layout/Footer.tsx` | MODIFY — add Services link |

---

## Verification Plan

1. Run `npm run dev` and check all pages visually
2. Check mobile in DevTools at 375px (iPhone SE) and 390px (iPhone 14)
3. Verify all new sections render correctly
4. Confirm animations are smooth and don't block interactivity
5. Check Services link appears in navbar and footer
