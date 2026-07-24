# El Archivo · Portfolio de Elena

Portfolio profesional creado con React, TypeScript y Vite. La experiencia presenta proyectos de datos, Machine Learning, Business Intelligence, MLOps y desarrollo de aplicaciones como expedientes resueltos dentro de un archivo visual.

## Requisitos

- Node.js 20 o superior.
- npm 10 o superior.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Vite mostrará la URL local en la terminal.

## Comprobaciones

```bash
npm run lint
npm run build
```

`npm run lint` ejecuta la comprobación estricta de TypeScript. `npm run build` genera la versión de producción en `dist/`.

## Vista previa de producción

```bash
npm run preview
```

## Estructura

- `src/data/cases.ts`: contenido tipado de los seis expedientes.
- `src/components/`: componentes reutilizables.
- `src/pages/`: portada, pasillo, expediente dinámico y página no encontrada.
- `src/styles/global.css`: diseño visual, responsive, foco visible y reducción de movimiento.
- `public/images/`: estructura preparada para capturas futuras.
- `public/images/corridor/`: imagen ambiental del pasillo y placeholder sustituible.
- `public/documents/cv-elena-de-vicente.pdf`: CV descargable desde el expediente 000.

## Actualizar expedientes

El contenido de los proyectos está centralizado en `src/data/cases.ts`. Para añadir o cambiar un proyecto, modifica sus campos de datos sin tocar la plantilla de `CasePage`.

No incluyas contraseñas, claves API ni datos privados. Los enlaces que no existan todavía deben quedarse como pendientes.

## Imagen del pasillo

La portada y el pasillo usan la variable CSS `--corridor-image`. Su ruta se define en `src/data/visualAssets.ts` para respetar automáticamente el `base` de Vite en local y GitHub Pages.

Ahora apunta a la imagen optimizada del archivo:

```ts
export const corridorBackgroundImage = `${import.meta.env.BASE_URL}images/corridor/corridor-archive.webp`;
```

El pasillo muestra los expedientes profesionales alternados en ambos lados y reserva la puerta central del fondo para el expediente 000.

## Añadir evidencias reales

Cada elemento de `evidence` puede seguir siendo un texto pendiente o convertirse en una evidencia completa:

```ts
{
  label: "Dashboard ejecutivo en Power BI",
  image: "images/cases/003/dashboard-principal.webp",
  alt: "Página principal del dashboard Choose Your Side",
  href: "https://github.com/elenacarino-max/DashboardStarWars",
  kind: "image",
}
```

Guarda la imagen dentro de `public/images/cases/<número>/`. La plantilla se encargará de mostrarla y mantendrá el placeholder de los elementos que todavía no tengan archivo.

## GitHub Pages

El proyecto usa `HashRouter` para que las rutas funcionen al recargar en GitHub Pages. Vite está configurado con:

```ts
base: "/el-archivo-portfolio/"
```

El workflow de despliegue está en `.github/workflows/deploy.yml` y publica `dist/` en GitHub Pages cuando se hace push a `main`.
