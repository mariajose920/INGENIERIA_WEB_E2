# Plataforma de Servicios Profesionales de Ñuble

Proyecto final para la Evaluación 2 de Ingeniería Web, construido con **Vue 3 (Composition API)** y **Vite**.

## Descripción
Esta es una SPA (Single Page Application) que permite explorar un catálogo de servicios profesionales disponibles en la región de Ñuble. Los usuarios pueden ver detalles, filtrar por categorías, guardar sus servicios favoritos y enviar mensajes a través de un formulario de contacto validado.

## Instalación y Ejecución

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura y Rutas
* `/` (`HomeView.vue`): Inicio.
* `/servicios` (`ServiciosView.vue`): Catálogo de servicios.
* `/servicios/:id` (`ServicioDetalleView.vue`): Detalle dinámico del servicio.
* `/favoritos` (`FavoritosView.vue`): Lista de servicios guardados localmente.
* `/contacto` (`ContactoView.vue`): Formulario de contacto con validaciones.
* `/*` (`NotFoundView.vue`): Página 404.

## Conceptos Aplicados (Interrogación)

| Contenido | Archivo donde se aplica | Línea aproximada |
| :--- | :--- | :--- |
| **ref** | `src/views/ContactoView.vue` | L. 51 (`const formulario = ref(...)`) |
| **v-model** | `src/views/ContactoView.vue` | L. 11 (`v-model="formulario.nombre"`) |
| **v-if / v-else / v-show** | `src/views/ContactoView.vue` | L. 5 (`v-if="mensajeExito"`), L. 12 (`v-show`) |
| **v-for** | `src/views/ServiciosView.vue` | L. 21 (`v-for="servicio in serviciosFiltrados"`) |
| **computed** | `src/views/ServiciosView.vue` | L. 53 (`const serviciosFiltrados = computed(...)`) |
| **Componentes** | `src/views/ServiciosView.vue` | L. 20 (`<ServicioCard ... />`) |
| **props** | `src/components/ServicioCard.vue` | L. 24 (`const props = defineProps(...)`) |
| **emit** | `src/components/ServicioCard.vue` | L. 35 (`defineEmits(['toggle-favorito'])`) |
| **Vue Router** | `src/router/index.js` | L. 9 (`const router = createRouter(...)`) |
| **RouterLink** | `src/components/NavBar.vue` | L. 4 (`<RouterLink to="/">`) |
| **useRoute** | `src/views/ServicioDetalleView.vue` | L. 45 (`const route = useRoute()`) |
| **Rutas dinámicas** | `src/router/index.js` | L. 21 (`path: '/servicios/:id'`) |
| **localStorage** | `src/services/favoritosStorage.js` | L. 5 (`localStorage.getItem(STORAGE_KEY)`) |
| **JSON** | `src/services/favoritosStorage.js` | L. 7 (`JSON.parse(data)`) |
| **Fetch** | `src/services/serviciosApi.js` | L. 3 (`fetch(...)`) |
| **async / await** | `src/services/useServicios.js` | L. 9 (`const cargarDatos = async () => ...`) |
| **try / catch** | `src/services/useServicios.js` | L. 12 (`try { ... } catch (err) { ... }`) |

## Actividades (Parte I del Portafolio)

Esta sección recopila el trabajo realizado durante el semestre en la asignatura:

1. Actividad 1: Introducción a la Web y Arquitectura Cliente-Servidor.
2. Actividad 2: Estructura semántica con HTML5.
3. Actividad 3: Estilización y diseño responsivo con CSS3.
4. Actividad 4: Fundamentos de JavaScript (Variables, Funciones, DOM).
5. Actividad 5: Manipulación avanzada del DOM y Eventos.
6. Actividad 6: Programación Asíncrona (Promesas y Fetch API).
7. Actividad 7: Introducción a Vue 3 y Vite.
8. Actividad 8: Reactividad en Vue (ref, reactive, computed).
9. Actividad 9: Componentes, Props y Eventos (emit) en Vue.
10. Actividad 10: Enrutamiento en Vue (Vue Router 4).
11. Actividad 11: Persistencia de datos locales (localStorage y JSON).
12. Actividad 12: Integración de proyecto final SPA (Preparación para Evaluación 2).
