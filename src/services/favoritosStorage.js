const STORAGE_KEY = 'favoritos_servicios'

export function cargarFavoritos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) {
      return JSON.parse(data) // Convertimos el JSON string a Array
    }
  } catch (error) {
    console.error("Error al cargar favoritos desde localStorage:", error)
  }
  return [] // Valor por defecto si no hay datos o falla el parseo
}

export function guardarFavoritos(ids) {
  try {
    const data = JSON.stringify(ids) // Convertimos el Array a JSON string
    localStorage.setItem(STORAGE_KEY, data)
  } catch (error) {
    console.error("Error al guardar favoritos en localStorage:", error)
  }
}
