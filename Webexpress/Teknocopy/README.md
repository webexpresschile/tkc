# Teknocopy – Sitio Web MVP
**teknocopy.cl** · Arriendo de impresoras Ricoh y gestión de impresión en Chile

---

## Archivos del proyecto

| Archivo | Descripción |
|---|---|
| `teknocopy-linked.html` | HTML principal (referencia `teknocopy-styles.css` y `teknocopy-scripts.js`) |
| `teknocopy-styles.css` | Todos los estilos: variables CSS, layout, componentes, responsive |
| `teknocopy-scripts.js` | JS: nav scroll, menú mobile, tabs, formulario CTA, animaciones |
| `teknocopy.html` | Versión todo-en-uno (stand-alone, sin dependencias externas) |

---

## Cómo usar

### Versión modular (recomendada para desarrollo)
Usa los 3 archivos juntos en la misma carpeta:
```
teknocopy-linked.html
teknocopy-styles.css
teknocopy-scripts.js
```
Abre `teknocopy-linked.html` en el navegador o súbelo a tu servidor/hosting.

### Versión stand-alone
Usa solo `teknocopy.html`. CSS y JS están embebidos. Ideal para entregar al cliente como preview o para subir a plataformas como Netlify Drop.

---

## Secciones incluidas

1. **Hero** – Titular, subtítulo, panel de control animado, métricas y CTAs
2. **Logos bar** – Clientes y partners (JUNJI, Municipalidades, Ricoh, etc.)
3. **Soluciones** – Grid 3×2 con mockups por cada servicio
4. **Conoce Teknocopy** – Tabs interactivos con 4 subsecciones detalladas
5. **3 formas de ahorrar** – Palancas de ahorro con métricas reales
6. **Timeline 30 días** – Proceso de incorporación + tabla de resultados
7. **Tabla comparativa** – Teknocopy vs. comprar vs. otros arriendos
8. **Sectores** – Empresas / Educación / Gobierno con beneficios específicos
9. **Testimonios** – 3 cards con quote, autor y video thumbnail
10. **CTA final** – Form de cotización con toast de confirmación
11. **Footer** – Empresa, servicios, sectores, recursos, contacto, redes

---

## Stack y dependencias externas

- **Fuentes:** Google Fonts – Plus Jakarta Sans + DM Sans
- **CSS:** Puro CSS con variables custom, sin frameworks
- **JS:** Vanilla JS, sin librerías externas
- **SEO:** Schema JSON-LD `LocalBusiness`, meta OG, canonical

---

## Personalización rápida

### Cambiar colores principales
Editar variables en `:root` al inicio de `teknocopy-styles.css`:
```css
--navy: #0a1628;        /* Fondo hero y navy */
--blue-bright: #2563eb; /* Azul principal y CTAs */
--accent: #00d4aa;      /* Verde teal de acento */
```

### Reemplazar datos de contacto
Buscar en `teknocopy-linked.html`:
- `+56 2 XXXX XXXX` → número real
- `contacto@teknocopy.cl` → email real
- CTAs de cotización → conectar a CRM o formulario externo

### Conectar formulario a email/CRM
En `teknocopy-scripts.js`, función `submitForm()`:
```js
// Reemplazar el toast por un fetch a tu endpoint:
await fetch('https://tu-crm.com/api/leads', {
  method: 'POST',
  body: JSON.stringify({ email }),
  headers: { 'Content-Type': 'application/json' }
});
```

---

## Próximos pasos (roadmap SEO/marketing)

- [ ] Agregar 2–3 casos de éxito reales (educación, sector público, empresa privada)
- [ ] Crear páginas internas: `/servicios/arriendo-impresoras/`, `/sectores/educacion/`
- [ ] Publicar blog con artículos SEO (ver `seo-teknocopy.md`)
- [ ] Configurar Google Search Console + GA4
- [ ] Implementar schema `Service` y `FAQPage` en páginas de detalle
- [ ] Conectar formulario a CRM (HubSpot, Pipedrive, etc.)
- [ ] Reemplazar logos placeholder por logos reales de clientes (con permiso)

---

*Generado como MVP estratégico. Ver documentos de análisis: `mkt-teknocopy.md`, `seo-teknocopy.md`, `web-teknocopy.md`.*
