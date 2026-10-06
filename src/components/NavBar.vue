<template>
  <nav class="navbar">
    <!-- RouterLink permite navegación SPA sin recargar la página -->
    <RouterLink to="/">Inicio</RouterLink> |
    <RouterLink to="/servicios">Servicios</RouterLink> |
    <RouterLink to="/favoritos">Favoritos</RouterLink> |
    <RouterLink to="/contacto">Contacto</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  padding: 1rem;
  background-color: #ffffff;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.navbar a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
/* Estilo aplicado automáticamente por Vue Router al enlace activo */
.navbar a.router-link-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
