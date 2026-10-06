<template>
  <div class="servicios">
    <h1>Catálogo de Servicios</h1>
    
    <div class="grid-servicios">
      <!-- Iteramos sobre la lista de servicios usando v-for -->
      <!-- Es obligatorio usar :key con un valor único (como el id) -->
      <ServicioCard 
        v-for="servicio in servicios" 
        :key="servicio.id" 
        :servicio="servicio"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServicioCard from '../components/ServicioCard.vue'
import { serviciosMock } from '../services/mockData.js'

// Estado reactivo que contiene los servicios (Etapa 3)
const servicios = ref(serviciosMock)
</script>

<style scoped>
.servicios {
  padding: 20px;
}
.grid-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
