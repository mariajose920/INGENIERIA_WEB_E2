<template>
  <nav class="navbar">
    <!-- El RouterLink se configurará en la siguiente etapa -->
    <a href="/">Inicio</a> |
    <a href="/servicios">Servicios</a> |
    <a href="/favoritos">Favoritos</a> |
    <a href="/contacto">Contacto</a>
  </nav>
</template>

<script setup>
// Componente de navegación (NavBar)
</script>

<style scoped>
.navbar {
  padding: 1rem;
  background-color: #f0f0f0;
  text-align: center;
}
.navbar a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}
</style>
