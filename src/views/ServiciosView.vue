<template>
  <div class="servicios">
    <h1>Catálogo de Servicios</h1>
    
    <div class="filtros">
      <input type="text" v-model="busqueda" placeholder="Buscar por nombre..." class="input-busqueda" />
      <select v-model="categoriaSeleccionada" class="select-categoria">
        <option value="">Todas las categorías</option>
        <option v-for="cat in categoriasDisponibles" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div v-if="serviciosFiltrados.length === 0" class="sin-resultados">
      <p>No se encontraron servicios para los criterios seleccionados.</p>
    </div>
    
    <div v-else class="grid-servicios">
      <ServicioCard 
        v-for="servicio in serviciosFiltrados" 
        :key="servicio.id" 
        :servicio="servicio"
        :es-favorito="favoritos.includes(servicio.id)"
        @toggle-favorito="manejarToggleFavorito"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { serviciosMock } from '../services/mockData.js'
import { cargarFavoritos, guardarFavoritos } from '../services/favoritosStorage.js'

const servicios = ref(serviciosMock)
const busqueda = ref('')
const categoriaSeleccionada = ref('')

// Inicializamos el estado desde localStorage
const favoritos = ref(cargarFavoritos())

// Observamos los cambios en el array de favoritos para guardarlos automáticamente
watch(favoritos, (nuevosFavoritos) => {
  guardarFavoritos(nuevosFavoritos)
}, { deep: true }) // deep: true asegura que detecte cambios dentro del array

const manejarToggleFavorito = (id) => {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(favId => favId !== id)
  } else {
    favoritos.value.push(id)
  }
}

const categoriasDisponibles = computed(() => {
  const categorias = servicios.value.map(s => s.categoria)
  return [...new Set(categorias)]
})

const serviciosFiltrados = computed(() => {
  return servicios.value.filter(servicio => {
    const coincideTexto = servicio.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaSeleccionada.value === '' || servicio.categoria === categoriaSeleccionada.value
    
    return coincideTexto && coincideCategoria
  })
})
</script>

<style scoped>
.servicios { padding: 20px; }
.filtros { display: flex; gap: 15px; margin-bottom: 25px; flex-wrap: wrap; }
.input-busqueda, .select-categoria { padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 1em; flex: 1; min-width: 200px; }
.sin-resultados { text-align: center; padding: 40px; background-color: #ffeaa7; border-radius: 8px; color: #d63031; font-weight: bold; }
.grid-servicios { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
</style>
