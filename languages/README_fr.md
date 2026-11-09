# VKT MarginMate

[English](../README.md) | [中文](README_zh.md) | [Español](README_es.md) | [Deutsch](README_de.md) | [日本語](README_ja.md) | Français

Voir la marge réelle d'un produit Amazon sans ouvrir de tableur.

> Chrome et Edge · Manifest V3 · Permissions minimales · Sans compte · 100 % local

---

## Pourquoi VKT MarginMate ?

Les vendeurs calculent encore à la main : copier le prix, se souvenir du taux de commission, chercher les frais FBA de la tranche de taille, estimer la publicité, puis tout soustraire dans Excel. Les taux changent selon la place de marché et la catégorie, et les pages de frais d'Amazon sont à trois clics et un PDF.

VKT MarginMate place tout le calcul à côté du bloc d'achat de la fiche déjà ouverte, y compris le chiffre qui compte vraiment : **le prix à pratiquer**.

| Atout | Détail |
|-------|--------|
| 🧮 **Détail en direct** | Commission, expédition FBA, stockage, placement, publicité, retours et coût rendu, ligne par ligne |
| 🎯 **Prix d'équilibre** | Le prix exact où le bénéfice tombe à zéro |
| 📈 **Prix cible** | « Combien facturer pour 20 % de marge ? » répondu pour ce produit |
| 📋 **Marges en recherche** | Un badge de bénéfice sur les résultats, tous avec Pro, triable par marge |
| 🌍 **16 places de marché** | Barèmes et TVA par boutique (barème US par paliers ; UK/DE commission + TVA, FBA manuel) |
| ✏️ **Tout est modifiable** | Coût, transport, douane, pub %, retours %, frais FBA manuel |
| 🔒 **Local par conception** | Sans compte, sans stockage serveur, sans envoi de contenu |

---

## Fonctions

### 🆓 Gratuit

| Fonction | Description |
|----------|-------------|
| 🧮 **Panneau sur la fiche** | Injecté à côté du bloc d'achat de chaque produit |
| 🎯 **Équilibre et cible** | Calculés à partir de vos coûts, mis à jour à la saisie |
| ✏️ **Valeurs par produit** | 3 produits enregistrables, le reste se recalcule aussitôt |
| 🌍 **Selon le pays** | Place de marché déduite du domaine ; TVA retirée si le prix la comprend |
| 📊 **Transparence** | Chaque ligne affiche le taux ou la tranche appliquée et la version du barème |
| 🔍 **Aperçu en recherche** | Badges de marge sur les 3 premiers résultats |

### ⭐ Pro (licence requise)

Paiement unique : **19,99 $** pour deux appareils. Ni abonnement ni période d'essai ; la licence est validée une fois puis mise en cache, l'extension fonctionne hors ligne.

| Fonction | Description |
|----------|-------------|
| ♾️ **Produits illimités** | Gratuit : 3. Pro supprime la limite |
| 📋 **Marges par lot** | Un badge sur tous les résultats, pas seulement les 3 premiers |
| ↕️ **Tri par marge** | Réordonne la grille de résultats par marge estimée |
| 📤 **Export CSV** | Recherches et produits enregistrés avec tout le détail |
| 🖥️ **Deux appareils** | Une licence active deux navigateurs |

---

## Comment c'est calculé

```
revenu net    = prix ÷ (1 + TVA)            (boutiques avec prix TTC uniquement)
commission    = max(minimum, prix × taux de catégorie)
frais FBA     = tranche selon dimensions + poids expédié
stockage      = pieds cubes × tarif mensuel × mois (tarif haut oct–déc)
publicité     = prix × % pub
retours       = prix × % retours            (prudent : remboursement total)
coût rendu    = coût unitaire + transport + douane
bénéfice      = revenu net − tout ce qui précède
```

Tous les taux sont dans [`data/fees.js`](../data/fees.js), le seul fichier à modifier quand Amazon change ses tarifs. Il est livré avec l'extension et peut être remplacé par une copie distante plus récente : un changement de tarif ne demande donc pas de nouvelle validation du store.

> VKT MarginMate est une estimation. Amazon applique des exceptions de catégorie, de taille et de promotion qu'aucune fiche ne révèle, et change ses tarifs plusieurs fois par an. Vérifiez dans Seller Central avant de fixer un prix.

---

## Places de marché prises en charge

`amazon.com` · `.co.uk` · `.de` · `.fr` · `.it` · `.es` · `.ca` · `.co.jp` · `.com.au` · `.in` · `.com.mx` · `.nl` · `.se` · `.pl` · `.ae` · `.sg`

Le barème d'expédition américain est complet. Les autres boutiques fournissent commission et TVA ; les frais FBA peuvent être saisis à la main dans le panneau.

---

## Installation

| Store | Statut |
|---|---|
| Chrome Web Store | *en cours de validation — lien à venir* |
| Microsoft Edge Add-ons | *en cours de validation — lien à venir* |

---

## Confidentialité

- **Sans compte, sans analytique, sans pistage.** Coûts et produits enregistrés restent dans `chrome.storage.local`.
- Deux appels réseau seulement : la mise à jour quotidienne des barèmes et, avec Pro, la validation de licence.
- Permissions : `storage`, `alarms`, l'accès aux 16 domaines Amazon et HTTPS vers `annmax1983.com` (mise à jour des barèmes, achat de licence) et `api.annmax1983.com` (validation de licence).

---

## Avis sur le code source

> ⚠️ **Ce dépôt sert uniquement à la présentation du projet — le code source complet n'y est pas publié.** Il ne contient que la documentation d'utilisation, les notes de version et les informations d'assistance de l'extension.

> 📥 **Téléchargement et installation uniquement depuis les boutiques officielles :** Chrome Web Store · Microsoft Edge Add-ons · Modules complémentaires Firefox (AMO). Aucun installateur hors ligne n'est distribué ici.

---

## Licence

Copyright © 2026 VKT MarginMate. Tous droits réservés.

Ce logiciel est propriétaire et à code fermé. Sans autorisation écrite préalable de l'auteur, la décompilation, l'ingénierie inverse, le crackage, la modification, le reconditionnement, la redistribution ou la revente du logiciel (en tout ou en partie) sont strictement interdites.

---

## Liens

- Site : https://www.annmax1983.com/extensions/marginmate
- Acheter une licence : https://annmax1983.com/checkout?plugin=marginmate
- Soutenir l'auteur : https://ko-fi.com/annmax?ref=marginmate
- Confidentialité : [privacy-policy.html](../privacy-policy.html)
- Contact : support@annmax1983.com

Non affilié à Amazon. « Amazon » et « FBA » sont des marques d'Amazon.com, Inc.
