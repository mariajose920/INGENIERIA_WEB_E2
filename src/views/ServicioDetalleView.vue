<template>
  <div class="detalle-container">
    <!-- Si encontramos el servicio, mostramos el detalle -->
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

    <!-- Si el servicio no existe (id inválido), mostramos este mensaje -->
    <div v-else class="error-no-existe">
      <h2>Error 404</h2>
      <p>El servicio solicitado no existe.</p>
      <RouterLink to="/servicios" class="btn-volver">
        Volver al catálogo
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { serviciosMock } from '../services/mockData.js'

// useRoute nos permite acceder a los parámetros de la URL
const route = useRoute()

// Extraemos el id de la URL y lo convertimos a número
const idParam = Number(route.params.id)

// Buscamos el servicio correspondiente de forma reactiva (computed)
const servicio = computed(() => {
  return serviciosMock.find(s => s.id === idParam)
})

// Función auxiliar para formatear el precio
const formatoPrecio = (precio) => {
  return precio.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })
}
</script>

<style scoped>
.detalle-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.detalle-card {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.categoria-badge {
  display: inline-block;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9em;
  color: #555;
  margin-bottom: 20px;
}
.descripcion-completa {
  font-size: 1.1em;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
}
.info-adicional {
  background-color: #f9f9f9;
  padding: 15px;
  border-left: 4px solid #3498db;
  margin-bottom: 25px;
}
.precio {
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3e50;
  margin: 0 0 10px 0;
}
.disponible { color: #27ae60; font-weight: bold; }
.no-disponible { color: #c0392b; font-weight: bold; }
.btn-volver {
  display: inline-block;
  padding: 10px 20px;
  background-color: #95a5a6;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.btn-volver:hover {
  background-color: #7f8c8d;
}
.error-no-existe {
  text-align: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ffcccc;
}
.error-no-existe h2 { color: #e74c3c; }
</style>
