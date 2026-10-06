<template>
  <div class="servicio-card">
    <h3>{{ servicio.nombre }}</h3>
    <p class="categoria">{{ servicio.categoria }}</p>
    <p class="descripcion">{{ servicio.descripcion }}</p>
    <!-- Formateo del precio a CLP -->
    <p class="precio">{{ formatoPrecio(servicio.precio) }}</p>
    
    <!-- Renderizado condicional para la disponibilidad -->
    <p v-if="servicio.disponible" class="disponible">Disponible</p>
    <p v-else class="no-disponible">No Disponible</p>
    
    <!-- Enlace dinámico al detalle del servicio -->
    <RouterLink :to="`/servicios/${servicio.id}`" class="btn-detalle">
      Ver detalle
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Definimos las props que recibe el componente
const props = defineProps({
  servicio: {
    type: Object,
    required: true
  }
})

// Función para formatear el precio como moneda chilena (CLP)
const formatoPrecio = (precio) => {
  return precio.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })
}
</script>

<style scoped>
.servicio-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.categoria {
  font-size: 0.9em;
  color: #666;
  text-transform: uppercase;
}
.descripcion {
  margin: 10px 0;
}
.precio {
  font-weight: bold;
  font-size: 1.2em;
  color: #2c3e50;
}
.disponible {
  color: #27ae60;
  font-weight: bold;
}
.no-disponible {
  color: #c0392b;
  font-weight: bold;
}
.btn-detalle {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
.btn-detalle:hover {
  background-color: #2980b9;
}
</style>
