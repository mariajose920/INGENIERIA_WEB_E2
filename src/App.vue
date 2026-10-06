<template>
  <div id="app">
    <NavBar />
    <main>
      <!-- Aquí se renderizan las vistas correspondientes a cada ruta -->
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
/* CSS global básico */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
}
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
