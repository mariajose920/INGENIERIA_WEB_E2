Chillán, Octubre de 2026

**EVALUACIÓN N.º 2**

**Ingeniería Web – Evaluación Integradora**

| Antecedente | Descripción |
| :---- | :---- |
| Asignatura | Ingeniería Web |
| Modalidad | Individual |
| Puntaje total | 100 puntos |
| Parte I | Portafolio de 12 actividades – 10 puntos |
| Parte II | Caso práctico presencial – 40 puntos |
| Parte III | Interrogación individual – 50 puntos |

# **1\. Propósito de la evaluación**

Evaluar de manera integrada los conocimientos y habilidades desarrollados durante las actividades prácticas de la asignatura. El estudiante deberá evidenciar el trabajo realizado durante el semestre, construir individualmente una solución web en Vue.js y posteriormente explicar y defender técnicamente el código desarrollado.

La evaluación considera tanto el resultado final como el proceso de desarrollo. Por esta razón, el uso de Git y el registro progresivo mediante commits forman parte de las evidencias de la evaluación.

# **2\. Estructura general**

| Parte | Evidencia | Puntaje |
| :---- | :---- | :---- |
| I | Revisión de las 12 actividades desarrolladas y compartidas mediante Git | 10 |
| II | Desarrollo individual de un caso práctico en sala | 40 |
| III | Interrogación individual sobre el código y los contenidos aplicados | 50 |
|  | TOTAL | 100 |

# **PARTE I – PORTAFOLIO DE ACTIVIDADES**

Puntaje: 10 puntos

El estudiante deberá compartir con el docente el repositorio o los repositorios utilizados durante el semestre. Se revisarán las doce actividades desarrolladas hasta la fecha y la evidencia de su proceso de trabajo.

| Criterio | Puntos |
| :---- | :---- |
| Las 12 actividades se encuentran disponibles y accesibles | 4 |
| Organización de proyectos, carpetas y archivos | 2 |
| README y documentación de las actividades | 2 |
| Historial de Git y commits que evidencian el proceso | 2 |
| TOTAL | 10 |

**Importante:** la sola carga de todas las actividades al repositorio el día de la evaluación no constituye por sí misma evidencia suficiente del proceso. Se revisará el historial disponible en Git.

# **PARTE II – CASO PRÁCTICO PRESENCIAL**

Puntaje: 40 puntos

## **3\. Caso: Plataforma de Servicios Profesionales de Ñuble**

Una organización desea implementar una aplicación web para publicar y consultar diferentes servicios profesionales disponibles en la Región de Ñuble. Actualmente la información se encuentra desorganizada y se requiere una aplicación que permita a los usuarios navegar por los servicios, buscarlos, filtrarlos, revisar su detalle, guardar servicios de interés y comunicarse mediante un formulario.

La solución deberá desarrollarse utilizando Vue.js e integrar los contenidos trabajados durante las actividades de la asignatura.

## **4\. Condiciones generales del desarrollo**

* El desarrollo es individual y se realiza presencialmente.  
* El repositorio deberá ser compartido con el docente desde el inicio de la evaluación.  
* Los avances deberán registrarse mediante los commits solicitados.  
* Los commits deben representar avances reales y no deben generarse todos al finalizar.  
* El estudiante deberá poder ejecutar y demostrar su aplicación.  
* El código desarrollado será utilizado posteriormente durante la interrogación individual.

# **ETAPA 0 – Preparación del repositorio**

Antes de comenzar a programar, cree o prepare el repositorio de la evaluación y compártalo con el docente. Luego cree el proyecto Vue y compruebe que se ejecuta correctamente.

git status  
git add .  
git commit \-m "Evaluacion 2 \- Inicio del proyecto"  
git push

# **ETAPA 1 – Estructura inicial de la aplicación**

Puntaje asociado: 5 puntos

La aplicación deberá disponer como mínimo de las siguientes vistas:

* Inicio  
* Servicios  
* Detalle de servicio  
* Favoritos  
* Contacto  
* Página no encontrada (404)

Organice el proyecto utilizando una estructura equivalente a:

src/  
├── components/  
├── views/  
├── router/  
├── services/  
├── App.vue  
└── main.js

Se evaluará la organización, separación de responsabilidades y funcionamiento inicial.

git commit \-m "Evaluacion 2 \- Estructura inicial"

# **ETAPA 2 – Navegación con Vue Router**

Puntaje asociado: 5 puntos

Configure Vue Router e implemente las siguientes rutas:

| Ruta | Vista / funcionalidad |
| :---- | :---- |
| / | Inicio |
| /servicios | Catálogo de servicios |
| /servicios/:id | Detalle de un servicio |
| /favoritos | Servicios favoritos |
| /contacto | Formulario de contacto |
| Otra ruta | Página 404 |

El menú principal deberá utilizar RouterLink y la navegación deberá funcionar como SPA.

git commit \-m "Evaluacion 2 \- Router y navegacion"

# **ETAPA 3 – Catálogo dinámico**

Puntaje asociado: 5 puntos

La aplicación deberá trabajar con un mínimo de seis servicios. Cada servicio debe disponer al menos de:

id  
nombre  
categoria  
descripcion  
precio  
disponible

El catálogo debe generarse dinámicamente mediante v-for. No se aceptará escribir manualmente una tarjeta HTML distinta para cada servicio.

Cree un componente reutilizable, por ejemplo ServicioCard.vue, que reciba el servicio mediante props. Cada tarjeta deberá mostrar nombre, categoría, descripción breve, precio, disponibilidad y una acción para consultar el detalle.

git commit \-m "Evaluacion 2 \- Catalogo y componentes"

# **ETAPA 4 – Búsqueda, filtros y condicionales**

Puntaje asociado: 5 puntos

En la vista Servicios implemente un buscador por nombre y un selector de categoría. Ambos controles deberán utilizar v-model y funcionar de manera conjunta.

La lista resultante deberá calcularse mediante computed.

Se deberá evidenciar el uso correcto de:

v-model  
v-if / v-else  
v-for  
computed

Cuando no existan coincidencias, muestre un mensaje equivalente a:

No se encontraron servicios para los criterios seleccionados.

git commit \-m "Evaluacion 2 \- Busqueda y filtros"

# **ETAPA 5 – Ruta dinámica y detalle del servicio**

Puntaje asociado: 5 puntos

Desde cada tarjeta deberá ser posible navegar al detalle del servicio utilizando la ruta /servicios/:id. La vista deberá recuperar el identificador desde la ruta y presentar como mínimo nombre, categoría, descripción completa, precio y disponibilidad.

Si el ID solicitado no corresponde a un servicio válido, la interfaz deberá informar que el servicio no existe.

git commit \-m "Evaluacion 2 \- Detalle de servicio"

# **ETAPA 6 – Comunicación entre componentes**

Puntaje asociado: 5 puntos

ServicioCard deberá permitir marcar o desmarcar un servicio como favorito. La comunicación deberá utilizar props para recibir información desde el padre y emit para comunicar la acción desde el hijo.

Componente padre  
      ↓ props  
ServicioCard  
      ↓ emit  
Componente padre

Se evaluará el uso correcto de props, emit, separación de responsabilidades y funcionamiento de la interacción.

git commit \-m "Evaluacion 2 \- Props emit y favoritos"

# **ETAPA 7 – Persistencia con localStorage**

Puntaje asociado: 4 puntos

Los servicios seleccionados como favoritos deberán almacenarse mediante localStorage. La vista Favoritos deberá mostrar solamente los elementos seleccionados y permitir eliminarlos.

Prueba obligatoria:

1. Marque al menos dos servicios como favoritos.  
2. Recargue el navegador.  
3. Ingrese nuevamente a la vista Favoritos.  
4. Compruebe que los servicios continúan almacenados.

git commit \-m "Evaluacion 2 \- Persistencia localStorage"

# **ETAPA 8 – Consumo de datos con Fetch**

Puntaje asociado: 6 puntos

Los datos del catálogo deberán obtenerse mediante una solicitud asíncrona utilizando fetch(), async y await. La aplicación deberá controlar adecuadamente los estados de la solicitud.

| Estado | Comportamiento esperado |
| :---- | :---- |
| Carga | Mostrar un mensaje como “Cargando servicios...” |
| Éxito | Mostrar el catálogo con los datos recibidos |
| Error | Mostrar un mensaje comprensible sin dejar la aplicación en blanco |

Se evaluará el uso de Fetch API, async/await, tratamiento de la respuesta, estado de carga, manejo de errores e integración de los datos con Vue.

git commit \-m "Evaluacion 2 \- Consumo de datos con Fetch"

# **ETAPA 9 – Formulario de contacto**

Implemente una vista de contacto con los campos Nombre, Correo electrónico, Servicio de interés y Mensaje. Utilice v-model y valide los campos principales. Si faltan datos, informe al usuario. Si la información es válida, muestre una confirmación.

Esta etapa será considerada en la revisión integrada del funcionamiento y podrá ser abordada durante la interrogación individual.

git commit \-m "Evaluacion 2 \- Formulario y validaciones"

# **ETAPA 10 – Revisión y entrega**

Antes de finalizar, compruebe:

* La aplicación inicia sin errores.  
* Todas las rutas funcionan.  
* La búsqueda y los filtros funcionan en conjunto.  
* Es posible abrir el detalle de distintos servicios.  
* Los favoritos pueden agregarse y eliminarse.  
* Los favoritos permanecen después de recargar el navegador.  
* El formulario valida los datos.  
* El consumo Fetch funciona y controla errores.  
* La consola no presenta errores que impidan utilizar la aplicación.  
* El repositorio remoto contiene todos los commits solicitados.

git add .  
git commit \-m "Evaluacion 2 \- Version final"  
git push  
git log \--oneline

# **5\. Pauta de corrección del caso práctico**

| Etapa / criterio | Puntos |
| :---- | :---- |
| Estructura y organización del proyecto | 5 |
| Vue Router y navegación | 5 |
| Catálogo, v-for y componentes | 5 |
| v-model, filtros, condicionales y computed | 5 |
| Ruta dinámica y detalle | 5 |
| props, emit e interacción | 5 |
| Persistencia con localStorage | 4 |
| Fetch API, async/await, carga y manejo de errores | 6 |
| TOTAL | 40 |

# 

# **PARTE III – INTERROGACIÓN INDIVIDUAL**

Puntaje: 50 puntos

La interrogación se realizará utilizando como base el código desarrollado por el propio estudiante durante el caso práctico. Cada estudiante deberá responder cinco preguntas, con un valor máximo de 10 puntos cada una.

Las preguntas podrán solicitar:

* Explicar un fragmento de su propio código.  
* Identificar dónde aplicó un determinado contenido.  
* Explicar el flujo de información entre componentes.  
* Justificar una decisión de implementación.  
* Detectar un error o explicar su causa.  
* Predecir el comportamiento de una modificación.  
* Realizar o explicar una modificación sencilla sobre el código desarrollado.

## **6\. Contenidos considerados en la interrogación**

Vue.js  
ref  
v-model  
v-if / v-else / v-show  
v-for  
computed  
componentes  
props  
emit  
Vue Router  
RouterLink  
useRoute  
rutas dinámicas  
localStorage  
JSON  
Fetch API  
async / await  
try / catch  
manejo de errores  
Git y commits

## **7\. Criterio de corrección de cada pregunta**

| Nivel de desempeño | Puntaje |
| :---- | :---- |
| Explica correctamente y relaciona la respuesta con su código | 10 |
| Comprende el concepto, con pequeñas imprecisiones | 7 a 9 |
| Comprensión parcial; requiere apoyo para identificarlo en su código | 4 a 6 |
| Respuesta muy limitada o no logra relacionarla con el código | 1 a 3 |
| No responde o evidencia desconocimiento del contenido | 0 |

# **8\. Resumen de puntaje**

| Componente | Puntaje obtenido | Puntaje máximo |
| :---- | :---- | :---- |
| Parte I – Portafolio de 12 actividades |  | 10 |
| Parte II – Caso práctico presencial |  | 40 |
| Parte III – Interrogación individual |  | 50 |
| TOTAL |  | 100 |

# **9\. Declaración de entrega**

Al entregar la evaluación, el estudiante declara que el repositorio compartido corresponde al trabajo desarrollado durante la instancia evaluativa y que se encuentra en condiciones de explicar técnicamente el código presentado durante la interrogación individual.

**Ingeniería Web · Evaluación N.º 2 · 2026**