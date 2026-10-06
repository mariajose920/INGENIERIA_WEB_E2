<template>
  <div class="favoritos">
    <h1>Mis Servicios Favoritos</h1>
    
    <!-- Renderizado condicional: si no hay favoritos -->
    <div v-if="favoritos.length === 0" class="sin-favoritos">
      <p>Aún no has agregado ningún servicio a tus favoritos.</p>
      <RouterLink to="/servicios" class="btn-explorar">
        Explorar catálogo
      </RouterLink>
    </div>
    
    <!-- Si hay favoritos, reutilizamos ServicioCard -->
    <div v-else class="grid-servicios">
      <ServicioCard 
        v-for="servicio in serviciosFavoritosData" 
        :key="servicio.id" 
        :servicio="servicio"
        :es-favorito="true"
        @toggle-favorito="manejarToggleFavorito"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import ServicioCard from '../components/ServicioCard.vue'
import { serviciosMock } from '../services/mockData.js'
import { cargarFavoritos, guardarFavoritos } from '../services/favoritosStorage.js'

// Inicializamos leyendo el localStorage
const favoritos = ref(cargarFavoritos())

// Guardamos en localStorage automáticamente ante cualquier cambio
watch(favoritos, (nuevosFavoritos) => {
  guardarFavoritos(nuevosFavoritos)
}, { deep: true })

// Propiedad computada que mapea los IDs guardados a los objetos de servicio
const serviciosFavoritosData = computed(() => {
  return serviciosMock.filter(servicio => favoritos.value.includes(servicio.id))
})

// Función para remover de favoritos (igual que en ServiciosView)
const manejarToggleFavorito = (id) => {
  favoritos.value = favoritos.value.filter(favId => favId !== id)
}
</script>

<style scoped>
.favoritos {
  padding: 20px;
}
.sin-favoritos {
  text-align: center;
  padding: 50px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px dashed #ccc;
}
.btn-explorar {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
.grid-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
