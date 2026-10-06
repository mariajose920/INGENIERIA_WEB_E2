import { ref } from 'vue'
import { obtenerServicios } from './serviciosApi.js'

// Composable que encapsula la lógica de estado y carga de servicios
// Este patrón (Composition API) evita repetir ref(), try/catch y estados en 4 componentes distintos.
export function useServicios() {
  const servicios = ref([])
  const cargando = ref(true)
  const error = ref(null)

  const cargarDatos = async () => {
    cargando.value = true
    error.value = null
    try {
      const data = await obtenerServicios()
      servicios.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      cargando.value = false
    }
  }

  return {
    servicios,
    cargando,
    error,
    cargarDatos
  }
}
