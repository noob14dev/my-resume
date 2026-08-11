# my-resume

Hoja de vida / CV de **Juan Camilo Larrota Ruiz**, construida en HTML, CSS y JavaScript.

## Estructura

| Archivo                | Descripción                                                       |
|------------------------|-------------------------------------------------------------------|
| `index.html`           | Estructura base de la página                                      |
| `data.json`            | **Todo el contenido del CV** (perfil, experiencia, proyectos...)   |
| `app.js`               | Carga `data.json` y renderiza el CV dinámicamente                 |
| `style.css`            | Estilos, responsivo y listo para impresión (PDF)                  |
| `.github/workflows/`   | GitHub Actions: despliega automáticamente en GitHub Pages         |

> La información vive únicamente en `data.json`: para actualizar el CV solo editas ese archivo.

## Cómo se actualiza la web

1. Edita `data.json` (o `style.css`/`app.js`) en tu máquina.
2. Commitea y haz push a `main`:

   ```sh
   git add -A
   git commit -m "actualizar CV"
   git push origin main
   ```

3. El workflow **GitHub Actions** despliega automáticamente en GitHub Pages.
4. Verifica el despliegue en **Actions** (pestaña del repo) y espera ~1 min.

## Previsualización

- **Local:** abre `index.html` (usa el fallback embebido si falla el `fetch`).
- **Producción:** <https://noob14dev.github.io/my-resume/>