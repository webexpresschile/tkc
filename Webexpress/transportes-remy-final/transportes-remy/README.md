# Transportes REMY - Sitio Web

## Estructura del Proyecto

```
transportes-remy/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos CSS separados
├── js/
│   └── main.js            # JavaScript separado
├── camiones/              # Páginas individuales de camiones
│   ├── volvo-fh16.html
│   ├── mack-granite.html
│   └── iveco-stralis.html
└── plataformas/           # Páginas individuales de plataformas
    ├── porta-contenedor-40.html
    ├── lowboy.html
    └── extensible.html
```

## Características

✅ **HTML, CSS y JavaScript separados** para mejor organización
✅ **Diseño responsive** optimizado para móvil, tablet y desktop
✅ **Páginas individuales** para cada camión y plataforma
✅ **Botones "Ver más"** en cada card que redirigen a la página del producto
✅ **Formulario de contacto** funcional con integración WhatsApp
✅ **Navegación suave** entre secciones
✅ **Animaciones al scroll**

## Páginas de Productos

Cada camión y plataforma tiene su propia página con:
- Imagen destacada
- Título principal
- Subtítulo descriptivo
- Descripción detallada
- Especificaciones técnicas
- Formulario de contacto

## Instalación

1. Extrae todos los archivos en tu servidor web o directorio local
2. Abre `index.html` en tu navegador
3. Personaliza el número de WhatsApp en `js/main.js` (línea 46 y 74)

## Personalización

### Cambiar Número de WhatsApp
Edita `js/main.js` y cambia `'1234567890'` por tu número real (incluye código de país sin +).

### Cambiar Colores
Edita las variables en `css/style.css`:
```css
:root {
    --azul-oscuro: #0A2540;
    --amarillo-industrial: #FDB927;
    --gris-metalico: #7A8B9C;
}
```

### Agregar Más Vehículos
1. Copia una página de producto existente
2. Renombra y modifica el contenido
3. Agrega una nueva card en `index.html` con el botón "Ver más"

## Soporte

Para dudas o consultas sobre el sitio web, contacta al desarrollador.

---
**Transportes REMY** | Puerto Cabello, Venezuela
