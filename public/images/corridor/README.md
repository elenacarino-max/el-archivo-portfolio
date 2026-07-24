# Imagen del pasillo

Esta carpeta contiene la imagen ambiental usada en portada y en la página del pasillo.

Archivo actual:

- `corridor-placeholder.svg`: placeholder elegante con seis puertas rotuladas.

Para usar una imagen definitiva, guarda el archivo en esta carpeta y cambia la ruta en `src/data/visualAssets.ts`.

Ejemplo:

```ts
export const corridorBackgroundImage = `${import.meta.env.BASE_URL}images/corridor/corridor-archive.webp`;
```

Mantén una imagen horizontal, oscura y con suficiente espacio visual para que el overlay preserve la legibilidad del texto.
