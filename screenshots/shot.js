/* Static replicas of the real injected panel / search badges, filled with numbers
   produced by calc.js for price $29.99, Home & Kitchen, 8x6x4, 1 lb, cost $6 + $1.50 freight. */
const MM = {
  version: "2026.11",
  price: "$29.99",
  profit: "$7.17",
  margin: "23.9%",
  roi: "95.6%",
  breakeven: "$18.95",
  target20: "$27.38"
};

function panelHTML() {
  return `
<section class="mm-panel" id="mm-panel">
  <header class="mm-head">
    <span class="mm-logo">◆</span>
    <span class="mm-title">VKT MarginMate</span>
    <span class="mm-badge">USD</span>
    <button class="mm-collapse">–</button>
    <button class="mm-close">✕</button>
  </header>
  <div class="mm-body">
    <div class="mm-sub">
      <span class="mm-cat">Home &amp; Kitchen</span>
      <span class="mm-rate">15.0% referral</span>
      <span class="mm-asin">B0C1X2Y3Z4</span>
    </div>

    <div class="mm-metrics">
      <div class="mm-metric mm-good">
        <span class="mm-metric-label">Net profit</span>
        <strong>${MM.profit}</strong>
      </div>
      <div class="mm-metric">
        <span class="mm-metric-label">Margin</span>
        <strong>${MM.margin}</strong>
      </div>
      <div class="mm-metric">
        <span class="mm-metric-label">ROI</span>
        <strong>${MM.roi}</strong>
      </div>
    </div>

    <div class="mm-lines">
      <div class="mm-line mm-line-price"><span>Price</span><span>${MM.price}</span></div>
      <div class="mm-line"><span>Referral <em>15.0%</em></span><span class="mm-neg">$4.50</span></div>
      <div class="mm-line"><span>FBA fulfilment <em>Large standard</em></span><span class="mm-neg">$4.55</span></div>
      <div class="mm-line"><span>Storage <em>0.111 ft³</em></span><span class="mm-neg">$0.27</span></div>
      <div class="mm-line"><span>Advertising <em>15%</em></span><span class="mm-neg">$4.50</span></div>
      <div class="mm-line"><span>Returns <em>5%</em></span><span class="mm-neg">$1.50</span></div>
      <div class="mm-line"><span>Landed cost</span><span class="mm-neg">$7.50</span></div>
    </div>

    <div class="mm-inputs">
      <label>Unit cost<input value="6.00" readonly></label>
      <label>Freight / unit<input value="1.50" readonly></label>
      <label>Ad % of price<input value="15" readonly></label>
      <label>Return %<input value="5" readonly></label>
      <label>FBA fee (override)<input placeholder="auto" readonly></label>
      <label>Target margin %<input value="20" readonly></label>
    </div>

    <div class="mm-footer">
      <div class="mm-foot-row"><span>Break-even price</span><strong>${MM.breakeven}</strong></div>
      <div class="mm-foot-row"><span>For 20% margin</span><strong>${MM.target20}</strong></div>
      <div class="mm-note">Estimates based on Amazon's public fee schedule · v${MM.version}</div>
    </div>

    <a class="mm-more">How these fees are calculated</a>
  </div>
</section>`;
}

const ART = {
  cable: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v5.5a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3V21"/><rect x="5" y="1.5" width="4" height="2.6" rx="1.3"/><rect x="15" y="19.9" width="4" height="2.6" rx="1.3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.6"/><path d="M10.4 5.4h3.2"/></svg>',
  charger: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="13" width="15" height="7.5" rx="2.4"/><path d="M12 13V8.6"/><path d="m13 3.2-3.2 4.4h3.2l-1.4 3.2"/></svg>',
  earbuds: '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.6 13.5v-2.2a8.4 8.4 0 0 1 16.8 0v2.2"/><rect x="2.6" y="12.6" width="4.2" height="7.2" rx="2.1"/><rect x="17.2" y="12.6" width="4.2" height="7.2" rx="2.1"/></svg>'
};

const RESULTS = [
  { icon: ART.cable, title: "USB C Cable 2-Pack 6ft, 60W Fast Charging Braided", meta: "4.6 · 12,904", price: "$12.99", badge: "-$0.42 · -3%", good: false },
  { icon: ART.phone, title: "Silicone Phone Case for iPhone 15, Shockproof Slim", meta: "4.4 · 3,182", price: "$9.99", badge: "-$1.10 · -11%", good: false },
  { icon: ART.charger, title: "Wireless Charger Stand 15W, Fast Charging Dock", meta: "4.5 · 8,470", price: "$24.99", badge: "+$3.80 · 15%", good: true },
  { icon: ART.earbuds, title: "Bluetooth Earbuds with Charging Case, IPX5", meta: "4.3 · 21,336", price: "$32.50", badge: "+$6.05 · 19%", good: true }
];

function resultsHTML() {
  return RESULTS.map((r) => `
  <div class="sr">
    <div class="sr-img">${r.icon}</div>
    <div class="sr-body">
      <div class="sr-title">${r.title}</div>
      <div class="sr-meta"><span class="stars">★★★★★</span> ${r.meta}</div>
      <div class="sr-price">${r.price}<span class="mm-badge ${r.good ? "mm-badge-good" : "mm-badge-bad"}">${r.badge}</span></div>
    </div>
  </div>`).join("") + `
  <div id="mm-toolbar" class="sr-toolbar">
    <span class="mm-tb-brand">VKT MarginMate</span>
    <span class="mm-tb-count">16 products</span>
    <span class="mm-tb-hint">cost 35% of price · 1 lb standard size</span>
    <button class="mm-tb-btn">Sort by margin</button>
    <button class="mm-tb-btn mm-tb-primary">Export CSV</button>
  </div>`;
}

document.querySelectorAll("[data-panel]").forEach((el) => { el.innerHTML = panelHTML(); });
document.querySelectorAll("[data-results]").forEach((el) => { el.innerHTML = resultsHTML(); });
