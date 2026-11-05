# VKT MarginMate

English | [中文](languages/README_zh.md) | [Español](languages/README_es.md) | [Deutsch](languages/README_de.md) | [日本語](languages/README_ja.md) | [Français](languages/README_fr.md)

See the real profit of an Amazon product without opening a spreadsheet.

> Chrome · Manifest V3 · Minimal Permissions · No Account · 100% Local

---

## ⚠️ About this repository

This repository is **source code only**. It does **not** publish builds, ZIP files or releases, and no binary here is an official distribution.

- Install VKT MarginMate from the official store listings only (links below), never from a third-party download site.
- If you want to run the code yourself, load this folder as an unpacked extension in Chrome (see [Build](#build-from-source)).
- Chrome is the only supported target. The manifest is Manifest V3 and there is no Firefox build in this repository.

---

## Why VKT MarginMate?

Sellers still do this by hand: copy the price, remember the referral rate, look up the FBA fee for the size tier, guess at ad spend, then subtract everything in Excel. Rates change per marketplace and per category, and Amazon's own fee pages are three clicks and one PDF away.

VKT MarginMate puts the whole calculation next to the buybox on the product page you are already looking at — including the number that actually matters: **the price you need to charge**.

| Advantage | Detail |
|-----------|--------|
| 🧮 **Live breakdown** | Referral fee, FBA fulfilment, storage, inbound placement, ads, returns and landed cost, itemised |
| 🎯 **Break-even price** | The exact price where profit hits zero, so you know how low you can go |
| 📈 **Target-price solver** | "What should I charge for 20% margin?" — answered for the current product |
| 📋 **Search-page margins** | A profit badge on every result card, sortable by margin |
| 🌍 **16 marketplaces** | Fee tables and VAT handling per storefront (US tiered FBA; UK/DE referral + VAT, manual FBA) |
| ✏️ **Every number editable** | Unit cost, freight, duty, ad %, return %, FBA override — stored per ASIN |
| 🔒 **Local by design** | No account, no server-side storage, no page content uploaded |

---

## Features

### 🆓 Free

| Feature | Description |
|---------|-------------|
| 🧮 **On-page profit panel** | Injected beside the buybox on every Amazon product page |
| 🎯 **Break-even & target price** | Calculated from your own cost inputs, updated as you type |
| ✏️ **Per-product inputs** | Up to 3 saved products; everything else recalculates instantly |
| 🌍 **Country-aware** | Marketplace detected from the domain; VAT stripped where the storefront is tax-inclusive |
| 📊 **Fee transparency** | Every line shows the rate or size tier applied, plus the fee-table version used |
| 🔍 **Search-page preview** | Margin badges on the first 3 results of any Amazon search page |

### ⭐ Pro (License Required)

One-time purchase: **$19.99** for two devices. No subscription and no trial period — the licence is validated once and cached, so the extension keeps working offline.

| Feature | Description |
|---------|-------------|
| ♾️ **Unlimited saved products** | Free covers 3; Pro removes the cap |
| 📋 **Full batch margins** | A profit badge on every search result, not just the first 3 |
| ↕️ **Sort by margin** | Reorders the result grid by estimated margin, per column |
| 📤 **CSV export** | Search results and saved products, with the complete cost breakdown |
| 🖥️ **Two devices** | One licence activates the extension on two browsers |

---

## How the numbers are calculated

```
net revenue   = price ÷ (1 + VAT)          (tax-inclusive storefronts only)
referral fee  = max(min fee, price × category rate)
FBA fee       = size-tier lookup by dimensions + shipping weight
storage       = cubic feet × monthly rate × months  (Oct–Dec peak rate applied)
ads           = price × ad %
returns       = price × return %            (conservative: full refund)
landed cost   = unit cost + freight + duty
profit        = net revenue − all of the above
```

All rates live in [`data/fees.js`](data/fees.js) — a single versioned file transcribed from Amazon's public fee schedules. It ships with the extension and can be overridden by a newer remote copy, so rate changes never require a store review.

> VKT MarginMate is an estimator. Amazon applies category, size, program and promotion exceptions that no product page can reveal, and rates change several times a year. Confirm against Seller Central before pricing a product.

---

## Supported marketplaces

`amazon.com` · `.co.uk` · `.de` · `.fr` · `.it` · `.es` · `.ca` · `.co.jp` · `.com.au` · `.in` · `.com.mx` · `.nl` · `.se` · `.pl` · `.ae` · `.sg`

The US fulfilment table is complete. Other storefronts ship referral rates and VAT handling; the FBA fee can be entered manually in the panel until their tables are added.

---

## Installation

| Store | Status |
|---|---|
| Chrome Web Store | *submission pending — link will be added here* |

> Install only from the official listing above. This repository does not distribute installable builds.

---

## Build from source

```bash
npm install
npm run export-fees   # data/fees.js → data/fees.json (for the static host)
npm run build         # publish/marginmate-v<version>.zip — local use only
```

For development, open `chrome://extensions`, enable Developer mode and load this repository folder as an unpacked extension. Build output in `publish/` is for local testing and is not a release.

---

## Files

| Path | Purpose |
|------|---------|
| `manifest.json` | MV3 manifest, 16 Amazon storefronts |
| `data/fees.js` | Fee tables — the only file to touch when rates change |
| `selectors.js` / `extractor.js` | Product-page reads (price, ASIN, category, weight, dimensions) |
| `calc.js` | Pure fee engine, no DOM and no `chrome.*` |
| `content.js` / `content.css` | Injected product-page panel |
| `batch.js` | Search-page badges, margin sort, CSV export |
| `background.js` | Fee-table refresh, saved products, messaging |
| `license.js` | Shared annmax licence client |
| `index.html` / `promo.html` | Landing page and store tile (not shipped in the ZIP) |

---

## Privacy

- **No account, no analytics, no tracking.** Cost inputs and saved products stay in `chrome.storage.local`.
- Network access is limited to a daily fee-table refresh and, only if you activate Pro, a licence check.
- Permissions: `storage`, `alarms`, and host access to the 16 Amazon storefronts. Nothing else.

---

## License

Copyright © 2026 VKT MarginMate. All rights reserved. The source is published for transparency and review; it is not a distribution channel, and no build in this repository is an official release.

---

## Links

- Website: https://www.annmax1983.com/extensions/marginmate
- Buy a licence: https://annmax1983.com/checkout?plugin=marginmate
- Support the author: https://ko-fi.com/annmax?ref=marginmate
- Privacy policy: [privacy-policy.html](privacy-policy.html)
- Contact: support@annmax1983.com

Not affiliated with Amazon. “Amazon” and “FBA” are trademarks of Amazon.com, Inc.
