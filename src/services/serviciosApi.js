export async function obtenerServicios() {
  // Realizamos la petición HTTP GET al archivo JSON estático usando BASE_URL
  const response = await fetch(`${import.meta.env.BASE_URL}servicios.json`)
  
  // Verificamos si la respuesta es exitosa (código 200-299)
  if (!response.ok) {
    // Si hay un error, lanzamos una excepción para atraparla en el catch
    throw new Error('No se pudieron obtener los servicios desde el servidor.')
  }
  
  // Convertimos la respuesta a formato JSON y la devolvemos
  const data = await response.json()
  return data
}
