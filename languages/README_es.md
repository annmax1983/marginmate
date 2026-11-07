# VKT MarginMate

[English](../README.md) | [中文](README_zh.md) | Español | [Deutsch](README_de.md) | [日本語](README_ja.md) | [Français](README_fr.md)

Conoce el beneficio real de cualquier producto de Amazon sin abrir una hoja de cálculo.

> Chrome y Edge · Manifest V3 · Permisos mínimos · Sin cuenta · 100 % local

---

## ⚠️ Sobre este repositorio

Este repositorio contiene **solo el código fuente**. **No** publica compilaciones, ZIP ni releases, y ningún binario de aquí es una distribución oficial.

- Instala VKT MarginMate únicamente desde la ficha oficial de la tienda (enlace más abajo), nunca desde sitios de descarga de terceros.
- Para ejecutar el código tú mismo, carga esta carpeta como extensión descomprimida en Chrome o Edge.
- Se admiten Chrome y Edge (Manifest V3, Chromium). Aquí no hay versión para Firefox.

---

## ¿Por qué VKT MarginMate?

Los vendedores siguen haciéndolo a mano: copiar el precio, recordar la comisión, buscar la tarifa FBA del tramo de tamaño, estimar la publicidad y restarlo todo en Excel. Las tarifas cambian por mercado y por categoría, y las páginas de Amazon quedan a tres clics y un PDF de distancia.

VKT MarginMate pone todo el cálculo junto a la caja de compra de la ficha que ya tienes abierta, incluido el dato que de verdad importa: **el precio que necesitas cobrar**.

| Ventaja | Detalle |
|---------|---------|
| 🧮 **Desglose en vivo** | Comisión, envío FBA, almacenaje, colocación, publicidad, devoluciones y coste de compra, línea a línea |
| 🎯 **Precio de equilibrio** | El precio exacto donde el beneficio es cero |
| 📈 **Precio objetivo** | «¿Cuánto cobro para un 20 % de margen?» respondido para ese producto |
| 📋 **Márgenes en búsquedas** | Insignia de beneficio en los resultados, con Pro en todos, y orden por margen |
| 🌍 **16 marketplaces** | Tarifas e IVA por tienda (EE. UU. por tramos; UK/DE comisión + IVA, FBA manual) |
| ✏️ **Todo editable** | Coste, transporte, arancel, publicidad, devoluciones, tarifa FBA manual |
| 🔒 **Local por diseño** | Sin cuenta, sin almacenamiento en servidor, sin subir contenidos |

---

## Funciones

### 🆓 Gratis

| Función | Descripción |
|---------|-------------|
| 🧮 **Panel en la ficha** | Se inyecta junto a la caja de compra de cada producto |
| 🎯 **Equilibrio y objetivo** | Calculados con tus costes, recalculados al escribir |
| ✏️ **Datos por producto** | Hasta 3 productos guardados; el resto se recalcula al instante |
| 🌍 **Según el país** | Mercado detectado por dominio; IVA descontado donde el precio lo incluye |
| 📊 **Transparencia** | Cada línea muestra la tarifa o el tramo aplicado y la versión de la tabla |
| 🔍 **Vista previa en búsquedas** | Insignias en los 3 primeros resultados |

### ⭐ Pro (requiere licencia)

Pago único: **19,99 $** para dos dispositivos. Sin suscripción y sin periodo de prueba; la licencia se valida una vez y queda en caché, así que funciona sin conexión.

| Función | Descripción |
|---------|-------------|
| ♾️ **Productos ilimitados** | Gratis cubre 3; Pro quita el límite |
| 📋 **Márgenes completos** | Insignia en todos los resultados, no solo en 3 |
| ↕️ **Orden por margen** | Reordena la cuadrícula de resultados por margen estimado |
| 📤 **Exportar CSV** | Búsquedas y productos guardados con todo el desglose |
| 🖥️ **Dos dispositivos** | Una licencia activa dos navegadores |

---

## Cómo se calcula

```
ingreso neto  = precio ÷ (1 + IVA)          (solo tiendas con IVA incluido)
comisión      = max(mínimo, precio × tarifa de categoría)
envío FBA     = tramo por dimensiones + peso de envío
almacenaje    = pies cúbicos × tarifa mensual × meses (tarifa alta oct–dic)
publicidad    = precio × % de publicidad
devoluciones  = precio × % de devoluciones  (conservador: reembolso total)
coste total   = coste unitario + transporte + arancel
beneficio     = ingreso neto − todo lo anterior
```

Todas las tarifas están en [`data/fees.js`](../data/fees.js), el único archivo que hay que tocar cuando Amazon cambia precios. Se incluye con la extensión y puede actualizarse desde una copia remota, así que un cambio de tarifa no requiere revisión de la tienda.

> VKT MarginMate es una estimación. Amazon aplica excepciones de categoría, tamaño y promociones que ninguna ficha revela, y las tarifas cambian varias veces al año. Confirma en Seller Central antes de fijar un precio.

---

## Mercados compatibles

`amazon.com` · `.co.uk` · `.de` · `.fr` · `.it` · `.es` · `.ca` · `.co.jp` · `.com.au` · `.in` · `.com.mx` · `.nl` · `.se` · `.pl` · `.ae` · `.sg`

La tabla de envío de EE. UU. está completa. Los demás mercados incluyen comisión e IVA; la tarifa FBA puede introducirse a mano en el panel.

---

## Instalación

| Tienda | Estado |
|---|---|
| Chrome Web Store | *en revisión — el enlace se añadirá aquí* |
| Microsoft Edge Add-ons | *en revisión — el enlace se añadirá aquí* |

> Instala solo desde la ficha oficial. Este repositorio no distribuye compilaciones instalables.

---

## Compilar desde el código

```bash
npm install
npm run export-fees   # data/fees.js → data/fees.json (para el host estático)
npm run build         # publish/marginmate-v<versión>.zip — solo uso local
```

Para desarrollar, abre `chrome://extensions` o `edge://extensions`, activa el modo desarrollador y carga esta carpeta como extensión descomprimida. Lo que genera `publish/` es para pruebas locales, no una versión publicada.

---

## Privacidad

- **Sin cuenta, sin analítica, sin rastreo.** Los costes y los productos guardados se quedan en `chrome.storage.local`.
- Solo hay dos llamadas de red: la actualización diaria de tarifas y, si activas Pro, la validación de licencia.
- Permisos: `storage`, `alarms`, acceso a los 16 dominios de Amazon y HTTPS a `annmax1983.com` (actualización de tarifas, compra de licencia) y `api.annmax1983.com` (validación de licencia).

---

## Licencia

Copyright © 2026 VKT MarginMate. Todos los derechos reservados. El código se publica por transparencia y revisión; no es un canal de distribución y ninguna compilación de este repositorio es una versión oficial.

---

## Enlaces

- Sitio web: https://www.annmax1983.com/extensions/marginmate
- Comprar licencia: https://annmax1983.com/checkout?plugin=marginmate
- Apoyar al autor: https://ko-fi.com/annmax?ref=marginmate
- Privacidad: [privacy-policy.html](../privacy-policy.html)
- Contacto: support@annmax1983.com

No afiliado a Amazon. «Amazon» y «FBA» son marcas de Amazon.com, Inc.
