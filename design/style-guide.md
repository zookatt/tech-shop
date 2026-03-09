# Botiga Tech — Carta gráfica

> Documento de diseño · v1.0 · Marzo 2026
>
> Este documento define el sistema visual de Botiga Tech. Contiene todas las decisiones de diseño que el desarrollador front-end debe implementar: paleta de color, tipografía, espaciado, componentes y comportamientos interactivos. Cualquier valor no definido aquí debe consultarse antes de inventarlo.

## 1. Layout y retícula

### Contenedor

El contenido de todas las páginas está centrado horizontalmente dentro de un contenedor con un ancho máximo de **1200px** y relleno lateral de **24px** en móvil y **40px** en desktop. En pantallas más anchas que el contenedor, el fondo de la página es visible a ambos lados.

### Breakpoints

| Nombre      | Condición           | Comportamiento principal       |
| ----------- | ------------------- | ------------------------------ |
| **Móvil**   | base (sin query)    | 1 columna. Ancho: 375px mínimo |
| **Tablet**  | `min-width: 768px`  | 2 columnas en el catálogo      |
| **Desktop** | `min-width: 1024px` | 3 columnas en el catálogo      |

> **Mobile-first.** Los estilos base se escriben para móvil. Las media queries solo amplían o ajustan para pantallas más grandes. Nunca usar `max-width`.

### Catálogo — cuadrícula de productos

- Móvil: 1 columna, separación entre tarjetas de **16px**
- Tablet: 2 columnas, separación de **20px**
- Desktop: 3 columnas, separación de **24px**

## 2. Paleta de color

### Colores base

| Token             | Valor HSL            | Muestra                     | Uso                            |
| ----------------- | -------------------- | --------------------------- | ------------------------------ |
| `--color-bg`      | `hsl(220, 14%, 96%)` | Gris muy claro, casi blanco | Fondo de página                |
| `--color-surface` | `hsl(0, 0%, 100%)`   | Blanco puro                 | Tarjetas, modales, formularios |

### Colores de marca

| Token                  | Valor HSL            | Uso                                                     |
| ---------------------- | -------------------- | ------------------------------------------------------- |
| `--color-primary`      | `hsl(221, 83%, 53%)` | Azul medio — botones CTA, links activos, borde de foco  |
| `--color-primary-dark` | `hsl(221, 83%, 40%)` | Azul oscuro — estado `:hover` del botón primario        |
| `--color-primary-bg`   | `hsl(221, 83%, 97%)` | Azul muy pálido — fondos de destacados o banners suaves |

### Colores de texto

| Token                    | Valor HSL            | Contraste sobre surface | Uso                                               |
| ------------------------ | -------------------- | ----------------------- | ------------------------------------------------- |
| `--color-text-primary`   | `hsl(222, 47%, 11%)` | AAA                     | Títulos, nombres de producto, precio              |
| `--color-text-secondary` | `hsl(220, 9%, 46%)`  | AA                      | Descripciones, texto de apoyo, cabeceras de tabla |
| `--color-text-muted`     | `hsl(220, 9%, 65%)`  | Solo textos grandes     | Placeholders, etiquetas desactivadas              |

> El texto muted **no cumple AA** sobre fondo blanco en tamaños pequeños. Usarlo solo en `font-size` ≥ 18px o con peso bold.

### Colores de borde

| Token                  | Valor HSL            | Uso                                                          |
| ---------------------- | -------------------- | ------------------------------------------------------------ |
| `--color-border`       | `hsl(220, 13%, 91%)` | Bordes de tarjetas, separadores de tabla, inputs en reposo   |
| `--color-border-focus` | `hsl(221, 83%, 53%)` | Borde de input al recibir foco (igual que `--color-primary`) |

### Badges de stock

Cada badge tiene un color de fondo pálido (10% de opacidad del color principal) y el texto en el tono pleno. Indicaciones:

| Token               | Valor HSL            | Estado                       | Condición        |
| ------------------- | -------------------- | ---------------------------- | ---------------- |
| `--color-badge-in`  | `hsl(142, 71%, 45%)` | Verde — **En stock**         | 3 o más unidades |
| `--color-badge-low` | `hsl(25, 95%, 53%)`  | Naranja — **Pocas unidades** | 1 o 2 unidades   |
| `--color-badge-out` | `hsl(0, 84%, 60%)`   | Rojo — **Agotado**           | 0 unidades       |

El fondo de cada badge es el mismo tono con `opacity: 0.12` o usando `hsl` con `/ 12%` de alpha.

## 3. Tipografía

### Familia tipográfica

**Inter** — tipografía sin serifa de alta legibilidad, optimizada para pantalla.

- Fuente: [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- Pesos en uso: **400** (Regular) · **500** (Medium) · **600** (Semibold) · **700** (Bold)
- Fallback: `system-ui, -apple-system, sans-serif`

No se usa ninguna otra familia en esta interfaz. No usar serif, monospace ni fuentes por defecto del navegador como Arial o Comic Sans.

### Escala tipográfica

La base del sistema es **1rem = 16px** (tamaño de fuente raíz del navegador, no modificar en `html`).

| Paso   | rem       | px   | Peso habitual | Uso principal                                    |
| ------ | --------- | ---- | ------------- | ------------------------------------------------ |
| `xs`   | 0.75 rem  | 12px | Semibold 600  | Badges, captions, etiquetas de stock             |
| `sm`   | 0.875 rem | 14px | Regular 400   | Texto de apoyo, cabeceras de tabla, placeholders |
| `base` | 1 rem     | 16px | Regular 400   | Párrafos, descripciones, ítems de lista          |
| `lg`   | 1.125 rem | 18px | Semibold 600  | Nombre de producto en tarjeta, precio            |
| `xl`   | 1.5 rem   | 24px | Bold 700      | Título de sección — `<h2>`                       |
| `2xl`  | 2 rem     | 32px | Bold 700      | Título de página — `<h1>`                        |

### Altura de línea

| Contexto             | Valor | Aplicación                                        |
| -------------------- | ----- | ------------------------------------------------- |
| Títulos (`h1`, `h2`) | `1.2` | `line-height: 1.2`                                |
| Cuerpo de texto      | `1.6` | `line-height: 1.6` — valor por defecto del `body` |

## 4. Espaciado

Sistema de 8 puntos: todos los espaciados interiores (padding) y exteriores (margin, gap) son múltiplos de **4px**. Los valores impares (como 6px) están prohibidos.

| Token        | rem      | px   | Uso típico                                                  |
| ------------ | -------- | ---- | ----------------------------------------------------------- |
| `--space-1`  | 0.25 rem | 4px  | Separación mínima entre elementos inline                    |
| `--space-2`  | 0.5 rem  | 8px  | Padding de badge · separación entre icono y texto           |
| `--space-3`  | 0.75 rem | 12px | Padding interno de inputs                                   |
| `--space-4`  | 1 rem    | 16px | Padding lateral de tarjeta en móvil · gap mínimo de grid    |
| `--space-6`  | 1.5 rem  | 24px | Padding interno de tarjeta en desktop · gap de grid desktop |
| `--space-8`  | 2 rem    | 32px | Separación entre secciones en móvil                         |
| `--space-12` | 3 rem    | 48px | Separación entre secciones en desktop                       |
| `--space-16` | 4 rem    | 64px | Márgenes verticales de bloque de catálogo                   |

## 5. Bordes y sombras

### Radio de borde

| Token           | Valor  | Uso                              |
| --------------- | ------ | -------------------------------- |
| `--radius-sm`   | 6px    | Botones, inputs                  |
| `--radius-md`   | 12px   | Tarjetas de producto             |
| `--radius-lg`   | 16px   | Tarjetas destacadas o modales    |
| `--radius-full` | 9999px | Badges, pills, avatares circular |

### Sombras

Las sombras son de color neutro (mismo tono que `--color-text-secondary`) con opacidad reducida. No usar sombras de color saturado.

| Token         | Valor                              | Uso                                      |
| ------------- | ---------------------------------- | ---------------------------------------- |
| `--shadow-sm` | `0 1px 2px hsl(220 9% 46% / 8%)`   | Tarjeta en reposo                        |
| `--shadow-md` | `0 4px 12px hsl(220 9% 46% / 12%)` | Tarjeta en `:hover` · elementos elevados |
| `--shadow-lg` | `0 8px 24px hsl(220 9% 46% / 16%)` | Modales, dropdowns                       |

## 6. Componentes

### 6.1 Tarjeta de producto

```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │                       │  │
│  │    imagen producto    │  │  ← aspect-ratio 4/3 · object-fit: cover
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│  Nombre del producto        │  ← font-size lg · semibold · text-primary
│  Descripción breve (opc.)   │  ← font-size sm · regular · text-secondary
│                             │
│  169 €                  [●] │  ← precio: lg · bold · text-primary
│                             │     badge stock: alineado a la derecha
│  ┌──────────────────────┐   │
│  │   Añadir al carrito  │   │  ← botón primario · ancho completo
│  └──────────────────────┘   │
└─────────────────────────────┘
```

**Especificaciones:**

| Propiedad          | Valor                                       |
| ------------------ | ------------------------------------------- |
| Fondo              | `--color-surface`                           |
| Borde              | `1px solid --color-border`                  |
| Radio              | `--radius-md`                               |
| Sombra reposo      | `--shadow-sm`                               |
| Sombra `:hover`    | `--shadow-md`                               |
| Elevación `:hover` | `transform: translateY(-2px)`               |
| Transición         | `box-shadow 0.2s ease, transform 0.2s ease` |
| Padding interno    | `--space-4` (móvil) · `--space-6` (desktop) |

La imagen ocupa el ancho completo de la tarjeta. En móvil la tarjeta no tiene `border-radius` lateral (va de borde a borde). En desktop sí.

### 6.2 Badge de stock

Elemento en línea que indica disponibilidad. Siempre visible en la tarjeta.

```
 ● En stock      ← verde
 ● Pocas unidades ← naranja
 ● Agotado       ← rojo
```

| Propiedad     | Valor                                                      |
| ------------- | ---------------------------------------------------------- |
| Display       | `inline-flex` con `align-items: center` y `gap: --space-1` |
| Font-size     | `--font-size-xs`                                           |
| Font-weight   | `--font-weight-semibold`                                   |
| Padding       | `--space-1` vertical · `--space-2` horizontal              |
| Border-radius | `--radius-full`                                            |
| Fondo         | color del badge al 12% de opacidad                         |
| Texto         | color del badge al 100%                                    |

### 6.3 Botón primario

Acción principal de la tarjeta: «Añadir al carrito».

| Estado           | Fondo                  | Texto                | Borde                                                  |
| ---------------- | ---------------------- | -------------------- | ------------------------------------------------------ |
| Reposo           | `--color-primary`      | blanco               | ninguno                                                |
| `:hover`         | `--color-primary-dark` | blanco               | ninguno                                                |
| `:focus-visible` | `--color-primary`      | blanco               | `outline: 2px solid --color-primary` con `offset: 2px` |
| `:disabled`      | `--color-border`       | `--color-text-muted` | ninguno                                                |

| Propiedad     | Valor                                         |
| ------------- | --------------------------------------------- |
| Padding       | `--space-3` vertical · `--space-6` horizontal |
| Border-radius | `--radius-sm`                                 |
| Font-size     | `--font-size-base`                            |
| Font-weight   | `--font-weight-semibold`                      |
| Transición    | `background-color 0.15s ease`                 |
| Cursor        | `pointer`                                     |

### 6.4 Tabla del carrito

La tabla ocupa el ancho completo de su contenedor. Sin bordes exteriores — solo separadores horizontales entre filas.

```
┌──────────────────┬──────┬────────────┬──────────┐
│ Producto         │ Uds. │ Precio/ud. │  Total   │  ← <thead>: fondo --color-bg
├──────────────────┼──────┼────────────┼──────────┤
│ Gráfica          │  1   │  169,00 €  │ 169,00 € │  ← <tbody>
├──────────────────┼──────┼────────────┼──────────┤
│ Memoria RAM      │  2   │   21,00 €  │  42,00 € │
├──────────────────┴──────┴────────────┼──────────┤
│ Total                                │ 211,00 € │  ← <tfoot>: bold
└──────────────────────────────────────┴──────────┘
```

| Zona            | Color de fondo    | Texto                                    | Borde inferior   |
| --------------- | ----------------- | ---------------------------------------- | ---------------- |
| `<thead>`       | `--color-bg`      | `--color-text-secondary` · sm · semibold | `--color-border` |
| `<tbody>` filas | `--color-surface` | `--color-text-primary` · base · regular  | `--color-border` |
| `<tfoot>`       | `--color-surface` | `--color-text-primary` · base · **bold** | ninguno          |

Padding de celda: `--space-3` vertical · `--space-4` horizontal.

### 6.5 Header del sitio

El header es pegajoso (`position: sticky; top: 0`) con fondo `--color-surface` y una sombra inferior sutil (`--shadow-sm`) para indicar que el contenido se desplaza por debajo.

```
┌──────────────────────────────────────────────────────────┐
│  Botiga Tech          Inicio  Productos  Carrito (2)      │
└──────────────────────────────────────────────────────────┘
```

- Logotipo/nombre: `--font-size-xl` · bold · `--color-text-primary`
- Links de nav: `--font-size-base` · medium · `--color-text-secondary`
- Link activo/hover: `--color-primary`
- Altura del header: **64px**
- Padding lateral: igual que el contenedor

## 7. Interacciones y animaciones

### Principios

- Las transiciones son siempre **sutiles y rápidas**: entre 100ms y 250ms.
- Curva de aceleración: `ease` para entradas/salidas genéricas.
- No usar animaciones que duren más de 300ms en elementos de UI frecuentes.

### Resumen de estados interactivos

| Elemento            | `:hover`                           | `:focus-visible`                                       |
| ------------------- | ---------------------------------- | ------------------------------------------------------ |
| Tarjeta de producto | `translateY(-2px)` + `--shadow-md` | `outline: 2px solid --color-primary` con `offset: 2px` |
| Botón primario      | Fondo `--color-primary-dark`       | `outline: 2px solid --color-primary` con `offset: 2px` |
| Link de navegación  | Color `--color-primary`            | `outline: 2px solid --color-primary` con `offset: 2px` |
| Input de formulario | Borde `--color-border-focus`       | Borde `--color-border-focus` + `outline` visible       |

> Nunca usar `outline: none` sin proporcionar un sustituto visible. El indicador de foco es obligatorio para la accesibilidad con teclado.
