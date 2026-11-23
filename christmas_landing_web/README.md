# Taller: organizar un proyecto React por componentes

Este proyecto es una app de React creada con [Vite](https://vite.dev/). El objetivo del taller es generar componentes básicos y el árbol de componentes de Christmas.

La estructura de carpetas de más abajo es solo teoría: muestra qué carpetas suele tener un proyecto cuando crece. En la sesión no se rellena.

Requisitos: Node.js 22 o superior y npm 10 o superior (`generate-react-cli` los necesita).

```bash
node -v
npm -v
```

Arrancar el proyecto:

```bash
npm install
npm run dev
```

---

## 1. Organización por carpetas

Vite deja el proyecto así. Cada carpeta tiene un trabajo concreto.

```text
demo_web/
├── public/                 # Archivos estáticos. Se sirven tal cual, sin pasar por el bundler
│   ├── favicon.svg
│   └── icons.svg
├── src/                    # Todo el código de la aplicación
│   ├── assets/             # Imágenes y SVG que importamos desde un componente
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.jsx             # Componente raíz. Aquí se monta la interfaz
│   ├── App.css             # Estilos de App
│   ├── main.jsx            # Punto de entrada: crea la raíz de React y renderiza <App />
│   └── index.css           # Estilos globales (tipografía, colores, reset)
├── index.html              # Única página HTML. Contiene <div id="root">
├── package.json            # Dependencias y scripts (dev, build, lint)
├── vite.config.js          # Configuración de Vite
└── eslint.config.js        # Reglas de lint
```

Flujo de arranque:

1. El navegador carga `index.html`.
2. Ese HTML carga `src/main.jsx`.
3. `main.jsx` busca el nodo `#root` y renderiza `<App />`.
4. `App.jsx` es el componente desde el que cuelga el resto de la interfaz.

`public/` y `src/assets/` no son lo mismo:

- Un archivo en `public/` se referencia por su URL (`/favicon.svg`). No se importa.
- Un archivo en `src/assets/` se importa desde el componente (`import heroImg from './assets/hero.png'`). Vite lo procesa y le pone un nombre con hash en el build.

---

## 2. Carpetas típicas de un proyecto React

Referencia. Un proyecto mediano acaba separando la interfaz, los datos y las utilidades. Hoy solo generamos componentes.

```text
demo_web/
├── .env                    # Variables locales (URLs, claves). No se sube a git
├── .env.example            # Misma lista de variables, sin valores secretos. Sí se sube
├── public/
└── src/
    ├── assets/             # Imágenes y SVG importados desde los componentes
    ├── components/         # Piezas reutilizables: Header, ChristmasItem
    ├── pages/              # Una vista por ruta: Home, About, NotFound
    ├── hooks/              # Hooks propios: useWishlist
    ├── context/            # Estado compartido entre componentes: WishlistContext
    ├── services/           # Llamadas a APIs: getProducts, getStaff
    ├── utils/              # Funciones puras: formatear una fecha, filtrar una lista
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

| Carpeta o archivo | Para qué |
| --- | --- |
| `components/` | Piezas de UI que se reutilizan en varias vistas |
| `pages/` | Una pantalla o ruta. Compone componentes, no se reutiliza como un botón |
| `hooks/` | Lógica con estado que varios componentes comparten  |
| `context/` | Datos que tienen que llegar a muchos componentes sin pasarlos por props |
| `services/` | Funciones que hablan con el backend. El componente no escribe el `fetch` |
| `utils/` | Funciones sin React: cálculos, formatos, filtros |
| `.env` | Valores que cambian por entorno. Está en `.gitignore` |
| `.env.example` | Plantilla para que otra persona sepa qué variables hacen falta |

---

## 3. Organización por componentes

Un componente es una pieza de interfaz con su propio marcado, sus estilos y, si hace falta, su estado. La convención del taller: **una carpeta por componente**, con el mismo nombre en PascalCase.

No todo nodo del árbol es un archivo. Solo se crea un componente cuando esa pieza se reutiliza o tiene una responsabilidad propia. Un `<img>`, un `<nav>` o un `<button>` pueden vivir dentro del JSX de su padre.

### Árbol de componentes de ejemplo

`App` ya existe (`src/App.jsx`) y es el provider del context: envuelve al resto. `Main` es el padre de la lista de Navidad y de `Home`, `About`, `Contact` y las demás vistas. Esas vistas son componentes anidados, no páginas: no hay carpeta `pages/`.

`Header` y `Footer` viven al lado de `Main`. El resto de componentes de la lista van dentro de la carpeta `Main`, y `Main.jsx` los importa.

```text
App                         App.jsx                    
├── Header                  components/Header/Header.jsx    <header> 
│   ├── img                 <img> dentro de Header.jsx
│   ├── Nav                 <nav> dentro de Header.jsx
│   └── Button              <button> dentro de Header.jsx
├── Main                    components/Main/Main.jsx
│   ├── ChristmasList       components/Main/ChristmasList/ChristmasList.jsx   <form>
│   │   ├── ChristmasItem   components/Main/ChristmasItem/ChristmasItem.jsx   <article> <h2> <p>
│   │   ├── ChristmasItem   el mismo componente, otra instancia
│   │   ├── ChristmasItem
│   │   └── ChristmasItem
│   ├── Home                components/Main/Home/Home.jsx
│   ├── About               components/Main/About/About.jsx
│   ├── Contact             components/Main/Contact/Contact.jsx
│   ├── ProductDetail       components/Main/ProductDetail/ProductDetail.jsx
│   ├── Staff               components/Main/Staff/Staff.jsx
│   ├── Topic               components/Main/Topic/Topic.jsx
│   ├── WishList            components/Main/WishList/WishList.jsx
│   └── NotFound            components/Main/NotFound/NotFound.jsx
└── Footer                  components/Footer/Footer.jsx    <footer>
```

| Nodo | Qué es | Dónde vive |
| --- | --- | --- |
| `App` | Raíz. Provider del context. Renderiza `Header`, `Main` y `Footer` | `src/App.jsx` (ya existe) |
| `Header` | Componente. Pinta `<header>` | `src/components/Header/` |
| `Footer` | Componente. Pinta `<footer>` | `src/components/Footer/` |
| `img`, `Nav`, `Button` | Etiquetas, no componentes | Dentro de `Header.jsx`: `<img>`, `<nav>`, `<button>` |
| `Main` | Padre de la lista y de las vistas | `src/components/Main/` |
| `ChristmasList` | Componente. Pinta un `<form>` | `src/components/Main/ChristmasList/` |
| `ChristmasItem` | Componente. Pinta `<article>` con `<h2>` y `<p>`. Se usa varias veces | `src/components/Main/ChristmasItem/` |
| `Home`, `About`, `Contact`, `ProductDetail`, `Staff`, `Topic`, `WishList`, `NotFound` | Vistas anidadas en `Main` | `src/components/Main/<Nombre>/` |

`ChristmasItem` aparece cuatro veces en el árbol y solo tiene un archivo. La lista renderiza el mismo componente con datos distintos.

Carpetas que quedan al generar el árbol. Cada una lleva su `.jsx` y su `.css`:

```text
src/components/
├── Header/
├── Footer/
└── Main/
    ├── Main.jsx
    ├── Main.css
    ├── ChristmasList/
    ├── ChristmasItem/
    ├── Home/
    ├── About/
    ├── Contact/
    ├── ProductDetail/
    ├── Staff/
    ├── Topic/
    ├── WishList/
    └── NotFound/
```

Reglas:

- El nombre de la carpeta, del archivo y de la función coinciden: `ChristmasItem/ChristmasItem.jsx` exporta `function ChristmasItem`.
- Los estilos de cada pieza viven a su lado (`ChristmasItem.css`), no en `App.css`.
- `App.jsx` y `Main.jsx` componen: importan y colocan. No pintan el detalle de cada hijo.
- Una etiqueta HTML no justifica una carpeta. `Nav` y `Button` se quedan en `Header`.

---

## 4. Generar componentes con create-react-component-folder (CRCF)

[create-react-component-folder](https://www.npmjs.com/package/create-react-component-folder) crea la carpeta del componente con su `.jsx`, su `.css` y su `index.js` de exportación. 

### Paso 1: Instalar CRCF
Instala la herramienta como dependencia de desarrollo desde la raíz del proyecto:

```bash
npm install --save-dev create-react-component-folder
```

### Paso 2: Crear componentes
`Header`, `Main` y `Footer` caen en `src/components`. El resto va dentro de `src/components/Main`:

```bash
npx crcf src/components/Header Main Footer --jsx --notest -f

npx crcf src/components/Main/ChristmasList ChristmasItem Home About Contact ProductDetail Staff Topic WishList NotFound --jsx --notest -f
```

*(Nota: Usamos `--jsx` para generar archivos con esa extensión y `--notest` para evitar que cree archivos de pruebas).*

