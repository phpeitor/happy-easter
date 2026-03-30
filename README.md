# Happy Easter ✨

[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

Landing temática de Semana Santa construida con HTML, CSS y JavaScript. El proyecto muestra una ilustración animada, texto tipográfico, un chat con las 7 palabras de Jesús en la cruz y una interacción de lightbox para el logo principal.

[![Video](https://img.youtube.com/vi/D__8YC5yuts/0.jpg)](https://www.youtube.com/watch?v=D__8YC5yuts)

[▶ Ver demo en YouTube](https://www.youtube.com/watch?v=D__8YC5yuts)

## Características 🎨

- Ilustración CSS animada del personaje principal 🎭.
- Halo, corona y elementos decorativos dibujados con CSS 👑.
- Texto animado con Typed.js ⌨️.
- Chat visual con las 7 palabras de Jesús en la cruz 💬.
- Lightbox para ampliar el logo 🔍.
- **Responsive design optimizado** para móvil, tablet y desktop 📱.
- Efectos visuales interactivos (lluvia, relámpagos, modo oscuro) ⚡.
- Animaciones suaves sin overflow en pantallas pequeñas ✨.

## Diseño Responsive 📱

El proyecto está optimizado para funcionar correctamente en todos los tamaños de pantalla:

### Breakpoints:
- **Desktop (980px+)**: Versión completa con todas las nubes animadas y elementos decorativos.
- **Tablet (760px - 980px)**: Ajuste de posiciones y tamaños, ocultación de algunas nubes.
- **Móvil (480px - 760px)**: Escala optimizada del personaje, chat flotante al fondo, fx-widget centrado.
- **Móvil pequeño (<480px)**: Versión ultra compacta, márgenes de seguridad, botones expandibles.

### Mejoras implementadas:
- ✅ Posicionamiento de elementos con `left/right` en lugar de `width: calc` para evitar overflow.
- ✅ Centrado seguro con `transform: translateX(-50%)` y `left: 50%`.
- ✅ Ocultación de nubes en móvil para mejor rendimiento y limpieza visual.
- ✅ Texto y chat box con ancho automático y márgenes constantes.
- ✅ FX-widget sin transformación heredada en pequeños dispositivos.

## Estructura del proyecto 🗂️

```text
happy-easter/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   |-- jquery.min.js
|   |-- script.js
|   `-- typed.min.js
|-- img/
|   `-- ...
|-- README.md
```

## Efectos Interactivos 🎬

El sitio incluye varios efectos visuales que se pueden activar/desactivar con los botones en la esquina inferior:

- **Lluvia** 🌧️: Animación de gotas cayendo en la pantalla.
- **Relámpagos** ⚡: Destellos visuales aleatorios.
- **Modo Oscuro** 🌙: Overlay oscuro con gradiente para una experiencia nocturna.

## Tecnologías Utilizadas 🛠️

- **HTML5**: Estructura semántica del proyecto.
- **CSS3**: Estilos, animaciones, gradientes y efectos visuales.
- **JavaScript**: Interactividad, animaciones con Typed.js y control de efectos.
- **jQuery**: Manipulación del DOM simplificada.
- **Typed.js**: Animación de escritura de texto con cursor.

## Cómo ejecutar el proyecto 🚀

### Opción 1: VS Code Live Server 🧩

1. Clona el repositorio:

```bash
git clone https://github.com/phpeitor/happy-easter
cd happy-easter
```

2. Instala la extensión Live Server en VS Code.
3. Abre `index.html` con Live Server.
4. Prueba el responsive con las DevTools (F12) → Modo dispositivo → selecciona tamaño móvil.

### Opción 2: Abrir el HTML directamente 🌐

Puedes abrir `index.html` en el navegador. Para mejor experiencia:
1. Sirve desde un servidor local (recomendado para pruebas de responsive).
2. Abre las DevTools en modo móvil para validar el diseño adaptatativo.

### Opción 3: Hosting en línea 🌍

Sube los archivos a tu servidor web (Apache, Nginx, etc.) y accede desde dispositivos reales para probar completamente el responsive en móvil.

## Notas de desarrollo 📝

- **Caché**: Los archivos CSS y JS incluyen parámetros de versión (`?ver=X.X`) para forzar recarga en navegadores.
- **Animaciones**: Las animaciones se deshabilitan automáticamente en `@media (max-width: 760px)` para mejorar la fluidez en móvil si es necesario.
- **Rendimiento**: Las nubes se ocultan en pantallas pequeñas para optimizar performance.

## Licencia 📄

Proyecto de uso libre con fines personales y educativos.

Creado por [phpeitor](https://www.linkedin.com/in/drphp/)