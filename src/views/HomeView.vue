<template>
  <div class="home">
    <h1>Inicio</h1>
    <p>Bienvenido a la Plataforma de Servicios Profesionales de Ñuble.</p>
    
    <div class="descripcion">
      <p>
        Nuestra plataforma conecta a profesionales locales con clientes que necesitan 
        servicios de calidad en la región. Explora nuestro catálogo de servicios, 
        guarda tus favoritos y contacta directamente a los profesionales.
      </p>
    </div>

    <div class="acciones">
      <RouterLink to="/servicios" class="btn-primario">
        Explorar Servicios
      </RouterLink>
      <RouterLink to="/contacto" class="btn-secundario">
        Ir a Contacto
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home { 
  padding: 40px 20px; 
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.descripcion {
  margin: 20px 0 40px;
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
}
.acciones {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primario, .btn-secundario {
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}
.btn-primario {
  background-color: #3498db;
  color: white;
}
.btn-primario:hover {
  background-color: #2980b9;
}
.btn-secundario {
  background-color: #f1c40f;
  color: #333;
}
.btn-secundario:hover {
  background-color: #f39c12;
  color: white;
}
</style>
