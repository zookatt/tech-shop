# Botiga Tech — Modernización de una tienda online

## El punto de partida

En la carpeta `Temario/2.Arquitectura-Web/14_Tienda-online` hay una tienda online de informática escrita en 2010. Ábrela en el navegador y en el editor. Observa cómo está construida:

- `DOCTYPE XHTML 1.0 Transitional` — una especificación que lleva más de una década obsoleta.
- Fondo negro, Comic Sans, anchos fijos en píxeles. Sin respuesta para móvil.
- Todo el layout con `position: absolute` y coordenadas manuales: cambiar el tamaño de un producto implica recalcular a mano la posición de todos los demás.
- Cero elementos semánticos: la página entera es una jerarquía de `<div>` sin significado.
- `display: yes` — una propiedad CSS que nunca ha existido en ningún navegador.
- El JavaScript rellena los productos dinámicamente con `innerHTML` dentro de `<div id="div1" name="DIVS">`.

Tu tarea es reescribir esa misma tienda desde cero, aplicando todo lo aprendido en el curso.

## El desafío

Construir una página de catálogo de una tienda de tecnología que se parezca visualmente a cómo se diseñan hoy los e-commerce: limpia, legible, con buena jerarquía visual y completamente funcional en cualquier ancho de pantalla.

No tienes que implementar el carrito con JavaScript. El objetivo es la maquetación HTML y los estilos CSS. El carrito puede ser una sección con datos fijos en el HTML.

Los productos, precios y stock son los mismos del ejercicio original:

| Producto         | Precio | Stock  |
| ---------------- | ------ | ------ |
| Antivirus        | 33 €   | 5 ud.  |
| Gráfica          | 169 €  | 2 ud.  |
| Disco duro       | 36 €   | 8 ud.  |
| Ordenador        | 360 €  | 3 ud.  |
| Bolso portátil   | 11 €   | 10 ud. |
| Portátil         | 540 €  | 4 ud.  |
| Memoria RAM      | 21 €   | 3 ud.  |
| Router           | 66 €   | 1 ud.  |
| Sintonizadora TV | 25 €   | 2 ud.  |

Puedes usar las imágenes de `14_Tienda-online/img/productos/` o sustituirlas por otras de [Unsplash](https://unsplash.com/) o [Pexels](https://www.pexels.com/).

## Referencias de diseño

Busca una referencia propia antes de escribir una sola línea de código. Observa cómo resuelven el catálogo de productos estas tiendas reales:

- [PCComponentes](https://www.pccomponentes.com/)
- [FNAC](https://www.fnac.es/)
- [Amazon — Informática](https://www.amazon.es/s?i=computers)
- [AppInformatica](https://www.appinformatica.com/)

Fíjate en:

- Cómo está estructurada la tarjeta de producto (imagen, título, precio, stock, botón).
- Qué breakpoints usan para pasar de 1 a 2 a 3 columnas.
- Qué jerarquía tipográfica aplican.
- Qué papel juegan los espacios en blanco.

Haz un boceto en papel o en Figma. No se entrega, pero hacerlo antes de abrir el editor reduce errores.

Las especificaciones de colores y tipografía están en `style-guide.md`.

## Estructura de archivos esperada

```
botiga-tech/
├── index.html
├── css/
│   └── style.css
├── img/
│   └── productos/
└── README.md
```

Un solo archivo CSS. Sin carpetas `desktop/` y `mobile/` separadas.

## Proceso de trabajo

Sigue este orden. No saltes pasos.

### 1. Fork y clonado

1. Accede al repositorio del ejercicio en GitHub (el formador te pasará el enlace).
2. Haz **fork** → aparece una copia bajo tu usuario de GitHub.
3. Clona **tu fork** a local:

```bash
git clone https://github.com/TU-USUARIO/botiga-tech.git
cd botiga-tech
```

4. Comprueba que el remote apunta a tu fork:

```bash
git remote -v
```

### 2. README inicial

Antes de tocar HTML o CSS, crea tu `README.md` a partir de `README-template.md`. Rellena los campos que puedas. Deja en blanco las capturas y «Lo que aprendí».

```bash
git add README.md
git commit -m "docs: add initial README from template"
```

Un commit. Solo el README.

### 3. HTML primero, sin CSS

Crea el `index.html` completo con todos los elementos semánticos. No añadas estilos todavía. Sin CSS, la página debe ser legible: contenido en orden lógico de arriba a abajo, headings marcando la jerarquía, listas siendo listas, la tabla siendo una tabla.

Comprueba antes de commitear:

- Estructura semántica completa (ver requisitos más abajo).
- Imágenes con `alt` descriptivo.
- Tabla con `<th scope>` correcto.
- Sin ningún atributo `style=""` inline.

```bash
git add index.html
git commit -m "feat: add semantic HTML structure"
```

### 4. CSS base: reset, variables y tipografía

Crea `css/style.css`. En este commit solo van el reset, las variables CSS y los estilos globales de tipografía. Sin layout todavía.

```bash
git add css/style.css
git commit -m "feat: add CSS reset, custom properties and base typography"
```

### 5. Layout móvil

Añade los estilos de layout **sin ninguna media query**. Los estilos base son para móvil. Una sola columna. La tarjeta debe ser legible en 375px.

```bash
git commit -m "feat: add mobile layout for product catalog"
```

### 6. Layout desktop

Añade las media queries con `min-width` para pantallas más anchas. El catálogo pasa a 2 columnas en tablet y 3 en desktop.

```bash
git commit -m "feat: add responsive layout with min-width breakpoints"
```

### 7. Componentes y estados

Estiliza los estados interactivos: `:hover` en tarjetas, `:focus-visible` en botones e inputs, badge de stock según disponibilidad.

```bash
git commit -m "feat: add hover states and stock badge variants"
```

### 8. Revisión final y deploy

- Valida con [validator.w3.org](https://validator.w3.org/).
- Comprueba accesibilidad básica en DevTools (Lighthouse).
- Activa GitHub Pages desde Settings → Pages → Branch: main.
- Actualiza el README con capturas y el enlace al deploy.

```bash
git commit -m "docs: update README with screenshots and deploy link"
```

## Requisitos técnicos HTML

### DOCTYPE y metadatos

- `<!DOCTYPE html>` — HTML5. No XHTML.
- La etiqueta `<html>` necesita el atributo `lang` con el idioma de la página.
- El primer elemento del `<head>` debe ser `<meta charset="UTF-8">`.
- Añade la `<meta>` de viewport para que la página responda en móvil.
- `<title>` descriptivo y favicon.

### Landmarks semánticos obligatorios

| Elemento    | Uso en este ejercicio                                   |
| ----------- | ------------------------------------------------------- |
| `<header>`  | Cabecera del sitio con nombre de la tienda y navegación |
| `<nav>`     | Menú de navegación dentro del header                    |
| `<main>`    | Contenido principal — todo el catálogo y el carrito     |
| `<section>` | Bloque del catálogo, bloque del carrito                 |
| `<article>` | Cada tarjeta de producto                                |
| `<footer>`  | Pie de página con créditos y logos de pago              |

Ningún `<div>` debe usarse donde exista un elemento semántico equivalente.

### Tarjeta de producto

Cada tarjeta es una unidad de contenido independiente: el elemento `<article>` es el contenedor correcto. Dentro de él necesitas:

- Un `<figure>` que agrupe la imagen del producto. La imagen no va suelta directamente en el `<article>`.
- El atributo `alt` de la imagen debe describir lo que se ve en la fotografía, no limitarse a repetir el nombre del artículo.
- Un heading para el nombre del producto. Su nivel (`<h2>`, `<h3>`...) depende de la jerarquía del documento: si la sección del catálogo tiene un `<h2>`, el heading de cada tarjeta debe ser `<h3>`.
- El precio y la información de stock como párrafos o elementos en línea dentro del cuerpo de la tarjeta.
- Para el badge de stock (`En stock`, `Pocas unidades`, `Agotado`) un `<span>` con clases diferentes según el estado es la estructura habitual.

### Tabla del carrito

La tabla tiene dos tipos de celdas y hay que distinguirlos correctamente:

- Las **cabeceras** (nombres de columna y nombres de producto) usan `<th>`.
- Los **datos** (cantidades, precios, totales) usan `<td>`.
- Cada `<th>` necesita el atributo `scope`: `scope="col"` para cabeceras de columna y `scope="row"` para cabeceras de fila (el nombre del producto en cada fila, y la celda «Total» en el pie).
- La tabla se divide en tres secciones: `<thead>` para la fila de cabeceras, `<tbody>` para las filas de productos y `<tfoot>` para la fila del total.

### Lo que no debe aparecer

- Ningún bloque `<style>` en el `<head>` o en el `<body>`.
- Ningún atributo `style=""` inline en ningún elemento.
- `position: absolute` para construir el layout.
- El doctype XHTML.
- `<b>` o `<i>` para énfasis — usa `<strong>` y `<em>`.
- `<br>` para añadir espacio vertical — usa `margin` o `padding`.

## Requisitos técnicos CSS

### Reset al principio del archivo

El primer bloque del CSS debe aplicarse al selector universal (`*`) e incluir tres propiedades: `box-sizing`, `margin` y `padding`. Sin este bloque, los espaciados por defecto del navegador varían entre Chrome, Firefox y Safari y el layout se rompe de formas impredecibles.

### Variables CSS en `:root`

Declara todas las variables del proyecto en `:root` antes de cualquier otra regla. Organízalas por categorías con comentarios:

- **Colores** — fondo de página, fondo de tarjeta, color primario, variante hover, colores de texto (principal, secundario, apagado), color de borde, y variantes de color para los badges de stock (disponible, pocas unidades, agotado).
- **Tipografía** — familia de fuente, escala de tamaños (al menos xs, sm, base, lg, xl, 2xl), pesos y altura de línea.
- **Espaciado** — escala de valores desde el más pequeño al más grande, basada en múltiplos de 4px o en una escala de potencias de 2 en `rem`.
- **Bordes** — al menos dos valores de `border-radius` (tarjeta vs. badge/pill) y dos valores de sombra (reposo y hover).

Ningún valor de color, tamaño de fuente ni espaciado debe estar escrito directamente fuera de `:root`. Si el mismo tono azul aparece en dos sitios, centralízalo en una variable.

### Mobile-first obligatorio

Los estilos base, sin ninguna media query, son para 375px. El catálogo es una sola columna. Las media queries añaden columnas y ajustes para pantallas más anchas usando siempre `min-width`:

- A partir de **768px** (tablet): el catálogo pasa a 2 columnas.
- A partir de **1024px** (desktop): el catálogo pasa a 3 columnas.

Usar `max-width` en las media queries invierte la lógica: los estilos base son entonces para desktop y se sobreescriben hacia abajo. Ese enfoque se llama desktop-first y **no está permitido** en este ejercicio.

### CSS Grid para el catálogo

La cuadrícula de productos es un layout de dos dimensiones: CSS Grid es la herramienta correcta. La propiedad `grid-template-columns` con `repeat()` y la unidad `fr` permiten pasar de 1 a 2 a 3 columnas cambiando un solo valor dentro de cada media query. No uses `float`, `position: absolute` ni columnas manuales con `width` para construir el grid.

### Estados interactivos

Todo elemento clicable (tarjeta, botón, enlace) necesita un estado `:hover` y un estado `:focus-visible` visualmente diferenciados. El estado de foco es especialmente importante para usuarios de teclado. Si eliminas el `outline` por defecto del navegador, debes sustituirlo por otro indicador visible con `outline` o `box-shadow`.

### Lo que no debe aparecer en el CSS

- Colores o tamaños hardcodeados fuera de `:root`.
- El mismo selector declarado más de una vez en el archivo con propiedades solapadas.
- `display: yes` — no existe. Los valores válidos son `block`, `flex`, `grid`, `inline`, `none` y sus variantes.
- `position: absolute` para el layout general de la página.
- Media queries con `max-width`.

## Requisitos de commits

Mínimo 8 commits propios. El commit `Initial commit` del fork no cuenta.

### Formato: Conventional Commits

```
tipo: descripción en imperativo, minúsculas, sin punto final
```

Tipos:

- `feat:` — nueva sección o característica de la maquetación.
- `fix:` — corrección de un error.
- `style:` — ajuste de estilos sin cambio funcional.
- `docs:` — cambios en el README u otra documentación.
- `refactor:` — reestructuración sin cambio funcional.

### Commits válidos

```
docs: add initial README from template
feat: add semantic HTML structure with landmarks and product cards
feat: add CSS reset, custom properties and base typography
feat: add mobile layout for product catalog
feat: add responsive layout with min-width breakpoints
feat: add hover states and stock badge variants
fix: correct th scope attributes in cart table
docs: update README with screenshots and deploy link
```

### Commits que no son válidos

```
Initial commit
first commit
changes
Improve typography and spacing
Improve typography and spacing
todo listo
```

### Cada commit debe ser atómico

Un commit = un cambio lógico. Si tuvieras que deshacerlo, solo ese cambio desaparecería. Un commit que incluye estructura HTML, estilos CSS y README no es atómico.

## Checklist de entrega

**HTML**

- [ ] `<!DOCTYPE html>` HTML5
- [ ] `<html lang="es">`
- [ ] `<meta charset>` y `<meta viewport>` en el `<head>`
- [ ] `<header>`, `<nav>`, `<main>`, `<footer>` presentes
- [ ] `<section>` para catálogo y para carrito, con heading descriptivo
- [ ] `<article>` para cada tarjeta de producto
- [ ] `<figure>` envolviendo cada imagen de producto
- [ ] `alt` descriptivo en todas las imágenes
- [ ] Tabla con `<thead>`, `<tbody>`, `<tfoot>`
- [ ] `<th scope="col">` en cabeceras de columna
- [ ] `<th scope="row">` en nombres de producto y en la fila de total
- [ ] Sin bloques `<style>` en el HTML
- [ ] Sin atributos `style=""` inline
- [ ] Sin `<br>` para espaciado vertical
- [ ] Validación W3C sin errores

**CSS**

- [ ] Reset con `box-sizing + margin + padding` al principio
- [ ] Variables CSS en `:root` organizadas por categorías
- [ ] Sin colores hardcodeados fuera de `:root`
- [ ] Estilos base para móvil (sin media query)
- [ ] Media queries con `min-width` únicamente
- [ ] CSS Grid para la cuadrícula de productos
- [ ] Fuente cargada con `@font-face` o Google Fonts
- [ ] Estados `:hover` y `:focus-visible` en elementos interactivos
- [ ] Sin selectores duplicados con propiedades solapadas
- [ ] Un solo archivo CSS

**Git**

- [ ] Mínimo 8 commits propios
- [ ] Todos los commits en formato Conventional Commits
- [ ] Cada commit es atómico
- [ ] El historial sigue la secuencia lógica de trabajo

**Entrega**

- [ ] Repositorio público en GitHub
- [ ] GitHub Pages activo con enlace al deploy
- [ ] README personalizado con capturas móvil y desktop

## Criterios de evaluación

| Criterio                            | Puntuación |
| ----------------------------------- | ---------- |
| HTML semántico                      | 20         |
| Accesibilidad (landmarks, th, alt)  | 10         |
| CSS: reset, variables, organización | 20         |
| CSS: responsive mobile-first        | 20         |
| Fidelidad al diseño de referencia   | 20         |
| Commits y proceso                   | 10         |
| **Total**                           | **100**    |

## Recursos

- [HTML elements reference — MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element)
- [CSS Custom Properties — MDN](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Grid — MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout)
- [A Complete Guide to CSS Grid — CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)
- [W3C Validator](https://validator.w3.org/)
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- [Unsplash — Technology](https://unsplash.com/s/photos/technology)
