<template>
  <div id="app">
    <NavBar />
    <!-- El RouterView se activará en la Etapa 2. Por ahora mostramos un mensaje. -->
    <main style="padding: 20px;">
      <h2>Estructura Inicial Creada</h2>
      <p>Las vistas y componentes están listos para integrarse con Vue Router.</p>
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
</style>
