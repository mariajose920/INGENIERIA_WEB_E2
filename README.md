# Plataforma de Servicios Profesionales de Ñuble

Proyecto final para la Evaluación 2 de Ingeniería Web, construido con **Vue 3 (Composition API)** y **Vite**.

## Descripción
Esta es una SPA (Single Page Application) que permite explorar un catálogo de servicios profesionales disponibles en la región de Ñuble. Los usuarios pueden ver detalles, filtrar por categorías, guardar sus servicios favoritos y enviar mensajes a través de un formulario de contacto validado.

## Instalación y Ejecución

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. (Opcional) Para compilar para producción:
   ```bash
   npm run build
   ```

## Estructura de Carpetas

* `public/`: Contiene el archivo estático `servicios.json` que simula la API para el consumo de datos.
* `src/`
  * `assets/`: Recursos estáticos (imágenes, css global si los hay).
  * `components/`: Componentes reutilizables, como `NavBar.vue` y `ServicioCard.vue`.
  * `router/`: Configuración de **Vue Router** (`index.js`).
  * `services/`: Lógica de consumo de datos (`serviciosApi.js`) y persistencia (`favoritosStorage.js`).
  * `views/`: Las páginas de la aplicación que se renderizan a través del router.
  * `App.vue`: Componente raíz.
  * `main.js`: Punto de entrada de la aplicación.

## Rutas
* `/`: Inicio (`HomeView.vue`)
* `/servicios`: Catálogo de servicios con filtros (`ServiciosView.vue`)
* `/servicios/:id`: Detalle dinámico del servicio (`ServicioDetalleView.vue`)
* `/favoritos`: Lista de servicios guardados localmente (`FavoritosView.vue`)
* `/contacto`: Formulario con validaciones (`ContactoView.vue`)
* `/*`: Página 404 (`NotFoundView.vue`)

## Conceptos Aplicados para Interrogación
A continuación se detalla dónde encontrar cada concepto técnico solicitado:

| Concepto | Archivo(s) donde se aplica | Justificación / Línea |
| :--- | :--- | :--- |
| **ref** | `ServiciosView.vue`, `ContactoView.vue` | Manejo de estado de filtros, carga, formulario, y favoritos. |
| **v-model** | `ServiciosView.vue`, `ContactoView.vue` | Sincronización de inputs de búsqueda y campos del formulario. |
| **v-if / v-else-if / v-else** | `ServiciosView.vue`, `ServicioDetalleView.vue` | Renderizado condicional de estados de carga, error y listado vacío. |
| **v-show** | `ContactoView.vue` | Mensajes de error en los campos del formulario. Se usa `v-show` para que el espacio del DOM se mantenga estructuralmente aunque no sea visible. |
| **v-for** | `ServiciosView.vue`, `ContactoView.vue` | Iteración sobre el array de servicios y poblar las opciones del `<select>`. |
| **computed** | `ServiciosView.vue`, `FavoritosView.vue` | Filtrado combinado de servicios y cruce de datos con IDs guardados. |
| **Componentes** | `ServicioCard.vue`, `NavBar.vue` | Encapsulación de la tarjeta visual y de la barra de navegación. |
| **props** | `ServicioCard.vue` | Recibe el objeto `servicio` y el booleano `esFavorito` desde las vistas. |
| **emit** | `ServicioCard.vue` | Emite el evento `toggle-favorito` hacia el padre sin modificar estado propio. |
| **Vue Router** | `router/index.js`, `main.js` | Definición y montaje del enrutador central. |
| **RouterLink** | `NavBar.vue`, `ServicioDetalleView.vue` | Navegación SPA interna sin recarga de página. |
| **useRoute (rutas dinámicas)** | `ServicioDetalleView.vue` | Lectura de `route.params.id` para la consulta del detalle. |
| **localStorage** | `services/favoritosStorage.js` | Lectura y escritura de IDs favoritos. |
| **JSON (parse/stringify)** | `services/favoritosStorage.js` | Conversión del array de favoritos a string y viceversa para localStorage. |
| **Fetch, async/await** | `services/serviciosApi.js` | Petición GET al archivo `public/servicios.json`. |
| **try/catch/finally** | `ServiciosView.vue`, `ContactoView.vue` | Manejo seguro de la promesa de carga de datos, estableciendo errores y quitando el flag de carga. |
| **Manejo de errores** | `ServiciosView.vue`, `ServicioDetalleView.vue` | Visualización en pantalla de botones de reintento ante una falla del Fetch. |
