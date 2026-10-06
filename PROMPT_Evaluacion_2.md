# Prompt para generar el código – Evaluación N.º 2 Ingeniería Web (Vue.js)

> Copia todo lo que está debajo de la línea y pégalo en Claude Code (con la carpeta del repositorio abierta).

---

## ROL Y OBJETIVO

Actúa como desarrollador Vue.js senior y a la vez como tutor. Debes construir, **etapa por etapa**, la aplicación web **"Plataforma de Servicios Profesionales de Ñuble"** para una evaluación universitaria individual de Ingeniería Web. Después de la entrega, la estudiante será interrogada sobre su propio código (explicar fragmentos, flujo de datos entre componentes, justificar decisiones, predecir efectos de cambios), por lo que el código debe ser **simple, legible, didáctico y fácil de defender**. Evita abstracciones innecesarias, librerías extra y patrones avanzados.

## STACK Y RESTRICCIONES TÉCNICAS

- Vue 3 + Vite (creado con `npm create vue@latest` o `npm create vite@latest` con plantilla `vue`), **JavaScript** (no TypeScript).
- Usar `<script setup>` con Composition API (`ref`, `computed`, `onMounted`).
- Vue Router 4 (`createRouter`, `createWebHistory`, `RouterLink`, `RouterView`, `useRoute`).
- **Sin** Pinia/Vuex, sin Vuetify/Bootstrap/Tailwind, sin axios. CSS propio simple (puede ir en `src/assets/main.css` o en `<style scoped>`).
- Datos con `fetch()` + `async/await` + `try/catch`. Persistencia con `localStorage` + `JSON.stringify/parse`.
- Comentar en español los puntos clave (qué hace `v-model`, por qué `computed`, flujo props/emit, etc.), con densidad moderada, sin comentar lo obvio.
- Textos de la interfaz en español.

## REGLAS DE GIT (OBLIGATORIAS)

El historial de commits es parte de la evaluación. Los commits deben representar **avances reales y separados**, nunca todos al final.

1. Al terminar **cada etapa**, ejecuta `git status`, `git add .` y `git commit -m "<mensaje exacto de la etapa>"`. Un commit por etapa, con el mensaje **literal** indicado abajo (sin tildes, tal como en el enunciado).
2. Haz `git push` después de cada commit si existe un remoto configurado (`git remote -v`). Si no hay remoto, avísame al inicio y continúa con commits locales; yo lo agregaré y compartiré el repositorio con el docente.
3. No uses `--amend`, `rebase`, `--force` ni `--no-verify`. No agrupes etapas en un solo commit.
4. No incluyas `node_modules/` ni `dist/` (verifica `.gitignore`). El archivo `Evaluacion_2_Ingenieria_Web_2026.docx.md` que ya existe en la carpeta puede quedar en el repositorio.
5. Antes de cada commit, verifica que la app compile (`npm run build`) o al menos que `npm run dev` inicie sin errores.
6. Si alguna etapa no produce cambios reales en archivos, no crees commits vacíos: dímelo.

## ETAPAS A EJECUTAR (en este orden)

### ETAPA 0 – Preparación del repositorio
- Crear el proyecto Vue **en la raíz del repositorio actual** (`C:\Users\mjvil\OneDrive\Escritorio\INGENIERIA_WEB_E2`), no en una subcarpeta anidada (si el CLI lo pide, usar `.` como destino y conservar el `.git` y el archivo `.md` existentes).
- `npm install` y comprobar que `npm run dev` levanta.
- Limpiar el contenido de ejemplo (HelloWorld, logos, contadores).
- Commit: `Evaluacion 2 - Inicio del proyecto`

### ETAPA 1 – Estructura inicial (5 pts)
Estructura exacta bajo `src/`:
```
src/
├── components/
├── views/
├── router/
├── services/
├── App.vue
└── main.js
```
- Crear las vistas en `views/`: `HomeView.vue` (Inicio), `ServiciosView.vue`, `ServicioDetalleView.vue`, `FavoritosView.vue`, `ContactoView.vue`, `NotFoundView.vue` (404). Cada una con contenido mínimo funcional (título y texto).
- Crear `components/NavBar.vue` (menú) y `App.vue` con `<NavBar />` + `<RouterView />`.
- Separar responsabilidades: vistas = páginas, components = piezas reutilizables, services = acceso a datos / localStorage, router = rutas.
- Commit: `Evaluacion 2 - Estructura inicial`

### ETAPA 2 – Navegación con Vue Router (5 pts)
Archivo `src/router/index.js` con estas rutas (con `name` para cada una):

| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/servicios` | Catálogo |
| `/servicios/:id` | Detalle |
| `/favoritos` | Favoritos |
| `/contacto` | Contacto |
| `/:pathMatch(.*)*` | 404 |

- Registrar el router en `main.js`.
- El menú usa **`RouterLink`** (nunca `<a href>`), con estilo para el enlace activo (`router-link-active`). Navegación SPA sin recargas.
- Commit: `Evaluacion 2 - Router y navegacion`

### ETAPA 3 – Catálogo dinámico (5 pts)
- Mínimo **6 servicios** (idealmente 8) con campos: `id`, `nombre`, `categoria`, `descripcion`, `precio`, `disponible` (boolean). Contenido realista de Ñuble (p. ej. asesoría contable en Chillán, diseño web, consultoría agrícola, clases particulares, servicios legales, arquitectura, etc.) y al menos 3 categorías distintas, con algunos `disponible: false`.
- En esta etapa los datos pueden estar temporalmente en un archivo de `services/` (se reemplazarán por fetch en la Etapa 8).
- Crear `components/ServicioCard.vue` que **reciba el servicio por props** (`defineProps`) y muestre: nombre, categoría, descripción breve, precio (formato CLP, p. ej. `toLocaleString('es-CL')`), disponibilidad (con `v-if/v-else` o clase visual) y un `RouterLink` "Ver detalle" a `/servicios/:id`.
- `ServiciosView.vue` genera las tarjetas con **`v-for`** y `:key="servicio.id"`. Prohibido escribir tarjetas HTML manuales por servicio.
- Commit: `Evaluacion 2 - Catalogo y componentes`

### ETAPA 4 – Búsqueda, filtros y condicionales (5 pts)
En `ServiciosView.vue`:
- `ref` para `busqueda` y `categoriaSeleccionada`, enlazados con **`v-model`** a un `<input>` de texto y un `<select>` de categoría (opción "Todas").
- Lista de categorías del select calculada (p. ej. `computed` con `Set`).
- `serviciosFiltrados` como **`computed`** que aplica **ambos** filtros en conjunto (nombre contiene texto, ignorando mayúsculas; y categoría).
- `v-if` / `v-else` : si `serviciosFiltrados.length === 0` mostrar exactamente: **"No se encontraron servicios para los criterios seleccionados."**; si no, el `v-for`.
- Commit: `Evaluacion 2 - Busqueda y filtros`

### ETAPA 5 – Ruta dinámica y detalle (5 pts)
- En `ServicioDetalleView.vue` usar **`useRoute()`** para leer `route.params.id` (convertir a número).
- Buscar el servicio por id (`computed`) y mostrar: nombre, categoría, descripción completa, precio y disponibilidad. Botón/enlace para volver a `/servicios`.
- Si el id no existe: `v-else` con mensaje claro "El servicio solicitado no existe." (sin pantalla en blanco ni errores en consola).
- Añadir descripción completa (campo `descripcionCompleta` o similar) a los datos si hace falta.
- Commit: `Evaluacion 2 - Detalle de servicio`

### ETAPA 6 – Comunicación entre componentes (5 pts)
- `ServicioCard` recibe por **props**: `servicio` y `esFavorito` (boolean). Muestra un botón ★/☆ ("Agregar/Quitar de favoritos").
- Al hacer clic emite con **`defineEmits`**: `emit('toggle-favorito', servicio.id)`. La tarjeta **no** modifica favoritos por sí misma.
- El padre (`ServiciosView`) mantiene el `ref` `favoritos` (array de ids), escucha `@toggle-favorito` y agrega/quita el id. Pasa `:es-favorito="favoritos.includes(servicio.id)"`.
- Comentar en el código el flujo: padre → props → hijo → emit → padre.
- Commit: `Evaluacion 2 - Props emit y favoritos`

### ETAPA 7 – Persistencia con localStorage (4 pts)
- Crear `src/services/favoritosStorage.js` con funciones `cargarFavoritos()` (lee y hace `JSON.parse`, con `try/catch` y valor por defecto `[]`) y `guardarFavoritos(ids)` (`JSON.stringify`). Clave: `"favoritos_servicios"`.
- Inicializar el `ref` desde localStorage y guardar con `watch` (deep) o al cambiar.
- Los favoritos deben compartirse entre `ServiciosView` y `FavoritosView` leyendo/escribiendo el mismo storage (mantenerlo simple: ambas vistas usan las funciones del service; no usar store global).
- `FavoritosView.vue`: muestra **solo** los servicios favoritos (reutilizando `ServicioCard`), permite **eliminar** (mismo toggle/emit), y mensaje con `v-if/v-else` cuando no hay favoritos.
- Verificar la prueba obligatoria: marcar ≥2 favoritos → recargar → entrar a Favoritos → siguen ahí.
- Commit: `Evaluacion 2 - Persistencia localStorage`

### ETAPA 8 – Consumo de datos con Fetch (6 pts)
- Mover los servicios a `public/servicios.json` (JSON válido, ≥6 servicios).
- Crear `src/services/serviciosApi.js` con `async function obtenerServicios()` que use `fetch('/servicios.json')`, verifique `response.ok` (lanzar `Error` si no) y devuelva `await response.json()`.
- Las vistas que necesiten datos (`ServiciosView`, `ServicioDetalleView`, `FavoritosView`) los cargan en `onMounted` con `async/await` y **`try/catch/finally`**, con tres `ref`: `servicios`, `cargando`, `error`.
- Estados en el template con `v-if / v-else-if / v-else`:
  - Carga: **"Cargando servicios..."**
  - Error: mensaje comprensible (p. ej. "No se pudieron cargar los servicios. Intente nuevamente.") + botón "Reintentar".
  - Éxito: catálogo.
- La app nunca queda en blanco. Para probar el error, cambiar temporalmente la URL del fetch y confirmar el mensaje (luego restaurarla).
- Commit: `Evaluacion 2 - Consumo de datos con Fetch`

### ETAPA 9 – Formulario de contacto
En `ContactoView.vue`:
- Campos con `v-model`: **Nombre**, **Correo electrónico**, **Servicio de interés** (`<select>` poblado con los servicios obtenidos por fetch) y **Mensaje** (`textarea`).
- Validación al enviar (`@submit.prevent`): nombre obligatorio, correo con formato válido (regex simple), servicio seleccionado, mensaje con mínimo de caracteres. Mostrar errores por campo con `v-if`.
- Si es válido: mostrar confirmación ("Gracias {{nombre}}, su mensaje fue enviado") y limpiar el formulario. No se envía a ningún servidor.
- Commit: `Evaluacion 2 - Formulario y validaciones`

### ETAPA 10 – Revisión y entrega
- Recorrer la lista de verificación: inicia sin errores; todas las rutas funcionan; búsqueda+filtros en conjunto; detalle de distintos servicios; favoritos agregar/eliminar y persistencia tras recarga; formulario valida; fetch funciona y maneja errores; consola sin errores; remoto con todos los commits.
- Crear/actualizar `README.md` (también ayuda a la Parte I): descripción, cómo ejecutar (`npm install`, `npm run dev`), estructura de carpetas, rutas, y qué contenido de Vue se aplicó en qué archivo (útil para la interrogación).
- Ejecutar `npm run build` sin errores.
- Comandos finales: `git add .`, `git commit -m "Evaluacion 2 - Version final"`, `git push`, `git log --oneline`.
- Commit: `Evaluacion 2 - Version final`

## ORDEN ESPERADO DEL `git log --oneline` (de más antiguo a más reciente)
1. Evaluacion 2 - Inicio del proyecto
2. Evaluacion 2 - Estructura inicial
3. Evaluacion 2 - Router y navegacion
4. Evaluacion 2 - Catalogo y componentes
5. Evaluacion 2 - Busqueda y filtros
6. Evaluacion 2 - Detalle de servicio
7. Evaluacion 2 - Props emit y favoritos
8. Evaluacion 2 - Persistencia localStorage
9. Evaluacion 2 - Consumo de datos con Fetch
10. Evaluacion 2 - Formulario y validaciones
11. Evaluacion 2 - Version final

## FORMA DE TRABAJAR

1. Antes de escribir código, revisa el estado del repo (`git status`, `git remote -v`, archivos existentes) y dime brevemente tu plan.
2. Trabaja **una etapa a la vez**: implementa → prueba (dev server / build) → commit → resumen de 3–5 líneas de lo que hiciste y qué archivos tocaste → continúa con la siguiente.
3. Al final de cada etapa, agrega una mini-explicación "Para la interrogación": qué concepto se usó y en qué archivo/línea está (p. ej. "v-model: `ServiciosView.vue`, input de búsqueda").
4. Al terminar todo, entrega una tabla **Contenido → Archivo donde se aplica** cubriendo: ref, v-model, v-if/v-else/v-show, v-for, computed, componentes, props, emit, Vue Router, RouterLink, useRoute, rutas dinámicas, localStorage, JSON, Fetch, async/await, try/catch, manejo de errores. Usa `v-show` en al menos un lugar justificado (p. ej. mensaje de error de un campo o badge) para poder explicarlo.
5. No avances de etapa si la actual tiene errores. No inventes funcionalidades fuera del enunciado.

## CRITERIOS DE ACEPTACIÓN FINALES
- 6 vistas y 6 rutas funcionando como SPA, 404 incluida.
- Catálogo ≥6 servicios vía `v-for` y `ServicioCard` con props/emit.
- Búsqueda + categoría con `v-model` y `computed`, con mensaje de "sin coincidencias".
- Detalle por id con manejo de id inexistente.
- Favoritos persistentes en `localStorage` y eliminables desde la vista Favoritos.
- Datos vía `fetch` con estados carga / éxito / error.
- Formulario con validaciones y confirmación.
- 11 commits con los mensajes exactos, en orden, subidos al remoto.
