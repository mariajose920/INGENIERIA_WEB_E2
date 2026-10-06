<template>
  <div class="servicio-card">
    <div class="card-header">
      <h3>{{ servicio.nombre }}</h3>
      <!-- Botón de Favoritos. Emite el evento al padre al hacer clic -->
      <button 
        @click="$emit('toggle-favorito', servicio.id)" 
        class="btn-favorito"
        :class="{ activo: esFavorito }"
        :title="esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'"
      >
        {{ esFavorito ? '★' : '☆' }}
      </button>
    </div>
    
    <p class="categoria">{{ servicio.categoria }}</p>
    <p class="descripcion">{{ servicio.descripcion }}</p>
    <p class="precio">{{ formatoPrecio(servicio.precio) }}</p>
    
    <p v-if="servicio.disponible" class="disponible">Disponible</p>
    <p v-else class="no-disponible">No Disponible</p>
    
    <RouterLink :to="`/servicios/${servicio.id}`" class="btn-detalle">
      Ver detalle
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Definimos las props que recibe el componente desde su padre
const props = defineProps({
  servicio: {
    type: Object,
    required: true
  },
  esFavorito: {
    type: Boolean,
    default: false
  }
})

// Definimos los eventos que este componente hijo puede emitir hacia su padre
defineEmits(['toggle-favorito'])

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
  position: relative;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.card-header h3 {
  margin: 0;
  padding-right: 30px;
}
.btn-favorito {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  padding: 0;
  line-height: 1;
}
.btn-favorito.activo {
  color: #f1c40f; /* Color estrella activa (dorado) */
}
.btn-favorito:hover {
  transform: scale(1.1);
}
.categoria {
  font-size: 0.9em;
  color: #666;
  text-transform: uppercase;
  margin-top: 5px;
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
