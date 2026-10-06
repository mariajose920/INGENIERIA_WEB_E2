<template>
  <div class="detalle-container">
    
    <div v-if="cargando" class="estado-carga">
      <p>Cargando detalles del servicio...</p>
    </div>
    
    <div v-else-if="error" class="estado-error">
      <p>No se pudieron cargar los servicios. Intente nuevamente.</p>
      <button @click="cargarDatos" class="btn-reintentar">Reintentar</button>
    </div>
    
    <template v-else>
      <div v-if="servicio" class="detalle-card">
        <h1>{{ servicio.nombre }}</h1>
        <span class="categoria-badge">{{ servicio.categoria }}</span>
        
        <p class="descripcion-completa">{{ servicio.descripcionCompleta || servicio.descripcion }}</p>
        
        <div class="info-adicional">
          <p class="precio">{{ formatoPrecio(servicio.precio) }}</p>
          <p v-if="servicio.disponible" class="disponible">✓ Disponible para contratación</p>
          <p v-else class="no-disponible">✗ Temporalmente no disponible</p>
        </div>

        <RouterLink to="/servicios" class="btn-volver">
          &larr; Volver al catálogo
        </RouterLink>
      </div>

      <div v-else class="error-no-existe">
        <h2>Error 404</h2>
        <p>El servicio solicitado no existe.</p>
        <RouterLink to="/servicios" class="btn-volver">
          Volver al catálogo
        </RouterLink>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { obtenerServicios } from '../services/serviciosApi.js'

const route = useRoute()
const idParam = Number(route.params.id)

const servicios = ref([])
const cargando = ref(true)
const error = ref(null)

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

const servicio = computed(() => {
  return servicios.value.find(s => s.id === idParam)
})

const formatoPrecio = (precio) => {
  return precio.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })
}
</script>

<style scoped>
.detalle-container { padding: 20px; max-width: 800px; margin: 0 auto; }
.detalle-card { background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.categoria-badge { display: inline-block; background-color: #eee; padding: 5px 10px; border-radius: 20px; font-size: 0.9em; color: #555; margin-bottom: 20px; }
.descripcion-completa { font-size: 1.1em; line-height: 1.6; color: #333; margin-bottom: 30px; }
.info-adicional { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #3498db; margin-bottom: 25px; }
.precio { font-size: 1.5em; font-weight: bold; color: #2c3e50; margin: 0 0 10px 0; }
.disponible { color: #27ae60; font-weight: bold; }
.no-disponible { color: #c0392b; font-weight: bold; }
.btn-volver { display: inline-block; padding: 10px 20px; background-color: #95a5a6; color: #fff; text-decoration: none; border-radius: 5px; }
.btn-volver:hover { background-color: #7f8c8d; }
.error-no-existe { text-align: center; padding: 50px; background-color: #fff; border-radius: 8px; border: 1px solid #ffcccc; }
.error-no-existe h2 { color: #e74c3c; }
.estado-carga { text-align: center; padding: 40px; font-size: 1.2em; color: #555; }
.estado-error { text-align: center; padding: 40px; background-color: #ffcccc; color: #c0392b; border-radius: 8px; }
.btn-reintentar { margin-top: 15px; padding: 10px 20px; background-color: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; }
.btn-reintentar:hover { background-color: #c0392b; }
</style>
