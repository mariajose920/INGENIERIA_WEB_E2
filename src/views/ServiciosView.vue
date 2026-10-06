<template>
  <div class="servicios">
    <h1>Catálogo de Servicios</h1>
    
    <!-- Estado de Carga -->
    <div v-if="cargando" class="estado-carga">
      <p>Cargando servicios...</p>
    </div>
    
    <!-- Estado de Error -->
    <div v-else-if="error" class="estado-error">
      <p>No se pudieron cargar los servicios. Intente nuevamente.</p>
      <button @click="cargarDatos" class="btn-reintentar">Reintentar</button>
    </div>
    
    <!-- Estado de Éxito -->
    <div v-else>
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
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { cargarFavoritos, guardarFavoritos } from '../services/favoritosStorage.js'
import { obtenerServicios } from '../services/serviciosApi.js'

const servicios = ref([])
const cargando = ref(true)
const error = ref(null)

const busqueda = ref('')
const categoriaSeleccionada = ref('')
const favoritos = ref(cargarFavoritos())

watch(favoritos, (nuevosFavoritos) => {
  guardarFavoritos(nuevosFavoritos)
}, { deep: true })

// Función que carga los datos usando async/await
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

// onMounted se ejecuta cuando el componente se añade al DOM
onMounted(() => {
  cargarDatos()
})

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
.estado-carga { text-align: center; padding: 40px; font-size: 1.2em; color: #555; }
.estado-error { text-align: center; padding: 40px; background-color: #ffcccc; color: #c0392b; border-radius: 8px; }
.btn-reintentar { margin-top: 15px; padding: 10px 20px; background-color: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; }
.btn-reintentar:hover { background-color: #c0392b; }
</style>
