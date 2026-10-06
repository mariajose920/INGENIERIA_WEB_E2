# Prompt de mejoras – Evaluación 2 Ingeniería Web (Vue.js)

Actúa como tutor y desarrollador Vue 3. El proyecto ya cumple las etapas 0–10 de la evaluación. Aplica SOLO los ajustes siguientes, manteniendo el código simple y fácil de explicar en la interrogación (sin Pinia, sin librerías nuevas). Haz commits **pequeños y separados**, uno por ajuste, con mensajes descriptivos que empiecen por `Evaluacion 2 - ` (p. ej. `Evaluacion 2 - Elimina mockData sin uso`). Antes de empezar ejecuta `git pull` (el remoto tiene 1 commit adelantado que borra PROMPT_Evaluacion_2.md). NO reescribas el historial (sin rebase, amend ni force push) y NO toques los 11 commits existentes. Después de cada commit: `npm run build` sin errores y `git push`.

## Ajustes

1. **Código muerto**: `src/services/mockData.js` ya no se usa (los datos vienen de `public/servicios.json`). Elimínalo.
2. **Fetch con ruta relativa a BASE_URL**: en `src/services/serviciosApi.js` usar `fetch(`${import.meta.env.BASE_URL}servicios.json`)` en lugar de `'/servicios.json'`.
3. **Reactividad del id en el detalle**: en `ServicioDetalleView.vue`, `idParam` se calcula una sola vez. Conviértelo en `computed(() => Number(route.params.id))` y úsalo en la búsqueda del servicio. Comentar por qué.
4. **Mensajes de error coherentes**: en `ServicioDetalleView.vue` y `FavoritosView.vue` el mensaje de error dice siempre "No se pudieron cargar los servicios". Está bien, pero muestra además el detalle técnico (`error`) en una línea pequeña. En `ContactoView.vue`, si el fetch falla, mostrar un aviso visible ("No se pudieron cargar los servicios; intente más tarde") con `v-if` en lugar de solo `console.error`, y deshabilitar el envío.
5. **Inicio con contenido**: `HomeView.vue` solo tiene un título y una línea. Agregar breve descripción de la plataforma y un `RouterLink` a `/servicios` y otro a `/contacto`.
6. **Evitar duplicación (opcional, solo si queda simple)**: la lógica `cargarDatos` (servicios/cargando/error + try/catch/finally) se repite en 4 vistas. Extraerla a `src/services/useServicios.js` (composable con `ref`s y `cargarDatos`) y usarla en las vistas, comentando el patrón. Si complica la explicación, omitir este ajuste.
7. **Detalle**: agregar en `ServicioDetalleView.vue` un botón para marcar/quitar favorito usando `cargarFavoritos/guardarFavoritos` (opcional; si se hace, comentar el flujo).
8. **README**: añadir una tabla "Contenido → Archivo donde se aplica" (ref, v-model, v-if/v-else/v-show, v-for, computed, componentes, props, emit, Vue Router, RouterLink, useRoute, rutas dinámicas, localStorage, JSON, Fetch, async/await, try/catch) con archivo y línea aproximada, y una sección "Actividades" que enlace/liste las 12 actividades del semestre (Parte I del portafolio).
9. **Verificación manual** (informar el resultado): todas las rutas, `/servicios/999` muestra "El servicio solicitado no existe.", filtros combinados, favoritos tras recargar, formulario con errores y con éxito, y error de fetch (cambiar temporalmente la URL, comprobar el mensaje y restaurar).

## Al terminar
Mostrar `git log --oneline` y confirmar que `origin/main` está sincronizado.
