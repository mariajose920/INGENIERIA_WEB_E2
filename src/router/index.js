import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ServicioDetalleView from '../views/ServicioDetalleView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import ContactoView from '../views/ContactoView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView
    },
    {
      path: '/servicios',
      name: 'Catalogo',
      component: ServiciosView
    },
    {
      path: '/servicios/:id',
      name: 'Detalle',
      component: ServicioDetalleView
    },
    {
      path: '/favoritos',
      name: 'Favoritos',
      component: FavoritosView
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: ContactoView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
