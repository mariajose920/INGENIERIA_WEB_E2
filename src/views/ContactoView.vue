<template>
  <div class="contacto-container">
    <h1>Contacto</h1>
    
    <div v-if="mensajeExito" class="alerta-exito">
      <p>{{ mensajeExito }}</p>
      <button @click="mensajeExito = ''" class="btn-cerrar">Cerrar</button>
    </div>

    <form @submit.prevent="validarYEnviar" class="form-contacto" v-else>
      <div class="form-group">
        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" v-model="formulario.nombre" />
        <span v-show="errores.nombre" class="error-msg">{{ errores.nombre }}</span>
      </div>

      <div class="form-group">
        <label for="correo">Correo electrónico:</label>
        <input type="email" id="correo" v-model="formulario.correo" />
        <span v-show="errores.correo" class="error-msg">{{ errores.correo }}</span>
      </div>

      <div class="form-group">
        <label for="servicioInteres">Servicio de interés:</label>
        
        <div v-if="error" class="error-msg-visible">
          No se pudieron cargar los servicios; intente más tarde.
        </div>
        <select v-else id="servicioInteres" v-model="formulario.servicioInteres">
          <option value="" disabled>Seleccione un servicio...</option>
          <option v-for="serv in servicios" :key="serv.id" :value="serv.nombre">
            {{ serv.nombre }}
          </option>
        </select>
        <span v-show="errores.servicioInteres" class="error-msg">{{ errores.servicioInteres }}</span>
      </div>

      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" v-model="formulario.mensaje" rows="4"></textarea>
        <span v-show="errores.mensaje" class="error-msg">{{ errores.mensaje }}</span>
      </div>

      <button type="submit" class="btn-enviar" :disabled="cargando || error">
        Enviar Mensaje
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useServicios } from '../services/useServicios.js'

const formulario = ref({
  nombre: '',
  correo: '',
  servicioInteres: '',
  mensaje: ''
})

const errores = ref({
  nombre: '',
  correo: '',
  servicioInteres: '',
  mensaje: ''
})

const mensajeExito = ref('')

// Usamos el composable
const { servicios, cargando, error, cargarDatos } = useServicios()

onMounted(() => {
  cargarDatos()
})

const validarYEnviar = () => {
  errores.value = { nombre: '', correo: '', servicioInteres: '', mensaje: '' }
  let esValido = true

  if (!formulario.value.nombre.trim()) {
    errores.value.nombre = 'El nombre es obligatorio.'
    esValido = false
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formulario.value.correo.trim()) {
    errores.value.correo = 'El correo es obligatorio.'
    esValido = false
  } else if (!regexCorreo.test(formulario.value.correo)) {
    errores.value.correo = 'Ingrese un correo electrónico válido.'
    esValido = false
  }

  if (!formulario.value.servicioInteres) {
    errores.value.servicioInteres = 'Debe seleccionar un servicio de interés.'
    esValido = false
  }

  if (formulario.value.mensaje.trim().length < 10) {
    errores.value.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    esValido = false
  }

  if (esValido) {
    mensajeExito.value = `Gracias ${formulario.value.nombre}, su mensaje fue enviado correctamente.`
    formulario.value = {
      nombre: '',
      correo: '',
      servicioInteres: '',
      mensaje: ''
    }
  }
}
</script>

<style scoped>
.contacto-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-contacto {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}
.form-group input, .form-group select, .form-group textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
}
.error-msg {
  color: #e74c3c;
  font-size: 0.85em;
  margin-top: 5px;
}
.error-msg-visible {
  color: #c0392b;
  background-color: #fadbd8;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  font-size: 0.9em;
}
.btn-enviar {
  width: 100%;
  padding: 12px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn-enviar:hover:not(:disabled) {
  background-color: #219150;
}
.btn-enviar:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}
.alerta-exito {
  background-color: #d4edda;
  color: #155724;
  padding: 20px;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  text-align: center;
}
.btn-cerrar {
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #155724;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
