<template>
  <div class="favoritos">
    <h1>Mis Servicios Favoritos</h1>
    
    <div v-if="cargando" class="estado-carga">
      <p>Cargando favoritos...</p>
    </div>
    
    <div v-else-if="error" class="estado-error">
      <p>No se pudieron cargar los servicios. Intente nuevamente.</p>
      <button @click="cargarDatos" class="btn-reintentar">Reintentar</button>
    </div>
    
    <template v-else>
      <div v-if="favoritos.length === 0" class="sin-favoritos">
        <p>Aún no has agregado ningún servicio a tus favoritos.</p>
        <RouterLink to="/servicios" class="btn-explorar">
          Explorar catálogo
        </RouterLink>
      </div>
      
      <div v-else class="grid-servicios">
        <ServicioCard 
          v-for="servicio in serviciosFavoritosData" 
          :key="servicio.id" 
          :servicio="servicio"
          :es-favorito="true"
          @toggle-favorito="manejarToggleFavorito"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import ServicioCard from '../components/ServicioCard.vue'
import { cargarFavoritos, guardarFavoritos } from '../services/favoritosStorage.js'
import { obtenerServicios } from '../services/serviciosApi.js'

const favoritos = ref(cargarFavoritos())
const servicios = ref([])
const cargando = ref(true)
const error = ref(null)

watch(favoritos, (nuevosFavoritos) => {
  guardarFavoritos(nuevosFavoritos)
}, { deep: true })

const cargarDatos = async () => {
  cargando.value = true
  error.value = null
  try {
    const data = await obtenerServicios()
    servicios.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  cargarDatos()
})

const serviciosFavoritosData = computed(() => {
  return servicios.value.filter(servicio => favoritos.value.includes(servicio.id))
})

const manejarToggleFavorito = (id) => {
  favoritos.value = favoritos.value.filter(favId => favId !== id)
}
</script>

<style scoped>
.favoritos { padding: 20px; }
.sin-favoritos { text-align: center; padding: 50px; background-color: #f9f9f9; border-radius: 8px; border: 1px dashed #ccc; }
.btn-explorar { display: inline-block; margin-top: 15px; padding: 10px 20px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 5px; }
.grid-servicios { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }
.estado-carga { text-align: center; padding: 40px; font-size: 1.2em; color: #555; }
.estado-error { text-align: center; padding: 40px; background-color: #ffcccc; color: #c0392b; border-radius: 8px; }
.btn-reintentar { margin-top: 15px; padding: 10px 20px; background-color: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; }
.btn-reintentar:hover { background-color: #c0392b; }
</style>
