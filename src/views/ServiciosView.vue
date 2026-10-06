<template>
  <div class="servicios">
    <h1>Catálogo de Servicios</h1>
    
    <!-- Filtros de búsqueda -->
    <div class="filtros">
      <!-- v-model sincroniza el input de texto con el ref 'busqueda' -->
      <input 
        type="text" 
        v-model="busqueda" 
        placeholder="Buscar por nombre..." 
        class="input-busqueda"
      />
      
      <!-- v-model sincroniza el select con el ref 'categoriaSeleccionada' -->
      <select v-model="categoriaSeleccionada" class="select-categoria">
        <option value="">Todas las categorías</option>
        <option v-for="cat in categoriasDisponibles" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <!-- Renderizado condicional si no hay resultados -->
    <div v-if="serviciosFiltrados.length === 0" class="sin-resultados">
      <p>No se encontraron servicios para los criterios seleccionados.</p>
    </div>
    
    <!-- Si hay resultados, renderizamos la grilla -->
    <div v-else class="grid-servicios">
      <ServicioCard 
        v-for="servicio in serviciosFiltrados" 
        :key="servicio.id" 
        :servicio="servicio"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { serviciosMock } from '../services/mockData.js'

const servicios = ref(serviciosMock)

// Estado reactivo para los filtros
const busqueda = ref('')
const categoriaSeleccionada = ref('')

// Propiedad computada para obtener categorías únicas
// Usamos Set para evitar duplicados
const categoriasDisponibles = computed(() => {
  const categorias = servicios.value.map(s => s.categoria)
  return [...new Set(categorias)]
})

// Propiedad computada que aplica ambos filtros en conjunto
// Se recalcula automáticamente cuando 'busqueda', 'categoriaSeleccionada' o 'servicios' cambian
const serviciosFiltrados = computed(() => {
  return servicios.value.filter(servicio => {
    // Verificamos si el nombre incluye el texto buscado (ignorando mayúsculas/minúsculas)
    const coincideTexto = servicio.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    // Verificamos si la categoría coincide (o si no se seleccionó ninguna)
    const coincideCategoria = categoriaSeleccionada.value === '' || servicio.categoria === categoriaSeleccionada.value
    
    return coincideTexto && coincideCategoria
  })
})
</script>

<style scoped>
.servicios {
  padding: 20px;
}
.filtros {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}
.input-busqueda, .select-categoria {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  flex: 1;
  min-width: 200px;
}
.sin-resultados {
  text-align: center;
  padding: 40px;
  background-color: #ffeaa7;
  border-radius: 8px;
  color: #d63031;
  font-weight: bold;
}
.grid-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
