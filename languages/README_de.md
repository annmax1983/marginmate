# VKT MarginMate

[English](../README.md) | [中文](README_zh.md) | [Español](README_es.md) | Deutsch | [日本語](README_ja.md) | [Français](README_fr.md)

Den echten Gewinn eines Amazon-Produkts sehen, ohne eine Tabelle zu öffnen.

> Chrome & Edge · Manifest V3 · Minimale Berechtigungen · Kein Konto · 100 % lokal

---

## ⚠️ Über dieses Repository

Dieses Repository enthält **nur den Quellcode**. Es veröffentlicht **keine** Builds, ZIP-Dateien oder Releases; kein Binary hier ist eine offizielle Distribution.

- Installieren Sie VKT MarginMate ausschließlich über den offiziellen Store-Eintrag (Link unten), nie über Download-Portale Dritter.
- Wer den Code selbst ausführen will, lädt diesen Ordner als entpackte Erweiterung in Chrome oder Edge.
- Unterstützt werden Chrome und Edge (Manifest V3, Chromium). Eine Firefox-Version gibt es hier nicht.

---

## Warum VKT MarginMate?

Verkäufer rechnen noch immer von Hand: Preis kopieren, Provisionssatz erinnern, FBA-Gebühr der Größenklasse nachschlagen, Werbekosten schätzen und alles in Excel abziehen. Sätze unterscheiden sich je Marktplatz und Kategorie, und Amazons eigene Gebührenseiten liegen drei Klicks und ein PDF entfernt.

VKT MarginMate legt die gesamte Rechnung neben den Kaufkasten der Seite, die Sie ohnehin offen haben — inklusive der Zahl, auf die es ankommt: **der Preis, den Sie verlangen müssen**.

| Vorteil | Detail |
|---------|--------|
| 🧮 **Live-Aufstellung** | Provision, FBA-Versand, Lager, Inbound Placement, Werbung, Retouren und Landed Cost, Zeile für Zeile |
| 🎯 **Break-even-Preis** | Der Preis, bei dem der Gewinn null ist |
| 📈 **Zielpreis** | „Was verlange ich für 20 % Marge?“ — direkt für dieses Produkt beantwortet |
| 📋 **Margen in Suchergebnissen** | Gewinn-Badge auf Ergebniskarten, mit Pro auf allen Treffern, sortierbar nach Marge |
| 🌍 **16 Marktplätze** | Gebührentabellen und VAT je Storefront (US gestaffelt, UK/DE Provision + VAT, FBA manuell) |
| ✏️ **Alles editierbar** | Einkaufspreis, Fracht, Zoll, Werbe-%, Retouren-%, FBA-Gebühr manuell |
| 🔒 **Lokal gedacht** | Kein Konto, kein Server-Speicher, keine Seiteninhalte hochgeladen |

---

## Funktionen

### 🆓 Kostenlos

| Funktion | Beschreibung |
|----------|--------------|
| 🧮 **Panel auf der Produktseite** | Wird neben dem Kaufkasten eingeblendet |
| 🎯 **Break-even und Zielpreis** | Aus Ihren Kosten berechnet, beim Tippen aktualisiert |
| ✏️ **Werte pro Produkt** | 3 Produkte speicherbar, alles andere rechnet sofort neu |
| 🌍 **Marktplatzabhängig** | Über die Domain erkannt; VAT wird abgezogen, wo der Preis sie enthält |
| 📊 **Transparenz** | Jede Zeile zeigt Satz oder Größenklasse und die Version der Tabelle |
| 🔍 **Vorschau in Suchergebnissen** | Margen-Badges bei den ersten 3 Treffern |

### ⭐ Pro (Lizenz erforderlich)

Einmalzahlung: **19,99 $** für zwei Geräte. Kein Abo, keine Testphase — die Lizenz wird einmal geprüft und zwischengespeichert, die Erweiterung läuft offline weiter.

| Funktion | Beschreibung |
|----------|--------------|
| ♾️ **Unbegrenzt speichern** | Kostenlos 3, Pro hebt die Grenze auf |
| 📋 **Vollständige Batch-Margen** | Badge auf allen Treffern, nicht nur den ersten 3 |
| ↕️ **Sortierung nach Marge** | Ordnet das Ergebnisraster nach geschätzter Marge |
| 📤 **CSV-Export** | Suchergebnisse und gespeicherte Produkte inklusive Aufstellung |
| 🖥️ **Zwei Geräte** | Eine Lizenz aktiviert zwei Browser |

---

## So wird gerechnet

```
Nettoerlös    = Preis ÷ (1 + VAT)          (nur Storefronts mit Bruttopreisen)
Provision     = max(Mindestgebühr, Preis × Kategoriesatz)
FBA-Gebühr    = Größenklasse nach Maßen + Versandgewicht
Lager         = Kubikfuß × Monatssatz × Monate (Okt–Dez: Hochsaison)
Werbung       = Preis × Werbe-%
Retouren      = Preis × Retouren-%        (konservativ: volle Erstattung)
Landed Cost   = Einkaufspreis + Fracht + Zoll
Gewinn        = Nettoerlös − alles oben
```

Alle Sätze stehen in [`data/fees.js`](../data/fees.js) — die einzige Datei, die bei Tarifänderungen angepasst wird. Sie ist Teil der Erweiterung und kann durch eine neuere Remote-Kopie ersetzt werden, Tarifänderungen brauchen also kein Store-Review.

> VKT MarginMate ist eine Schätzung. Amazon kennt Kategorie-, Größen- und Aktionsausnahmen, die keine Produktseite zeigt, und ändert Sätze mehrmals im Jahr. Prüfen Sie vor der Preisentscheidung Seller Central.

---

## Unterstützte Marktplätze

`amazon.com` · `.co.uk` · `.de` · `.fr` · `.it` · `.es` · `.ca` · `.co.jp` · `.com.au` · `.in` · `.com.mx` · `.nl` · `.se` · `.pl` · `.ae` · `.sg`

Die US-Versandtabelle ist vollständig. Andere Marktplätze liefern Provision und VAT; die FBA-Gebühr lässt sich im Panel manuell eintragen.

---

## Installation

| Store | Status |
|---|---|
| Chrome Web Store | *in Prüfung — Link folgt hier* |
| Microsoft Edge Add-ons | *in Prüfung — Link folgt hier* |

> Bitte nur über den offiziellen Eintrag installieren. Dieses Repository verteilt keine installierbaren Builds.

---

## Aus dem Quellcode bauen

```bash
npm install
npm run export-fees   # data/fees.js → data/fees.json (für den statischen Host)
npm run build         # publish/marginmate-v<version>.zip — nur lokal
```

Zum Entwickeln `chrome://extensions` oder `edge://extensions` öffnen, Entwicklermodus aktivieren und diesen Ordner als entpackte Erweiterung laden. Was in `publish/` landet, ist für lokale Tests gedacht, kein Release.

---

## Datenschutz

- **Kein Konto, keine Analyse, kein Tracking.** Kosten und gespeicherte Produkte bleiben in `chrome.storage.local`.
- Netzwerkzugriffe: tägliche Tabellenaktualisierung und, nur bei Pro, eine Lizenzprüfung.
- Berechtigungen: `storage`, `alarms`, Zugriff auf die 16 Amazon-Domains sowie HTTPS auf `annmax1983.com` (Tabellenaktualisierung, Lizenzkauf) und `api.annmax1983.com` (Lizenzprüfung).

---

## Lizenz

Copyright © 2026 VKT MarginMate. Alle Rechte vorbehalten. Der Quellcode wird zur Transparenz und Prüfung veröffentlicht; er ist kein Distributionskanal, und kein Build hier ist ein offizielles Release.

---

## Links

- Webseite: https://www.annmax1983.com/extensions/marginmate
- Lizenz kaufen: https://annmax1983.com/checkout?plugin=marginmate
- Autor unterstützen: https://ko-fi.com/annmax?ref=marginmate
- Datenschutz: [privacy-policy.html](../privacy-policy.html)
- Kontakt: support@annmax1983.com

Nicht mit Amazon verbunden. „Amazon“ und „FBA“ sind Marken von Amazon.com, Inc.
