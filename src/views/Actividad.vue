<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cacao y su recepción',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar etapas del proceso de recepción de cacao y su relación con la calidad del mismo. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La postcosecha involucra una serie de procesos que comienzan justo después de la recolección de las mazorcas y continúan hasta que el grano está listo para ser almacenado o comercializado.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 2,
          texto:
            'El pesaje del grano es una de las etapas del proceso de recepción del cacao. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 3,
          texto:
            'La humedad elevada y la fermentación inadecuada, son factores que afectan la calidad del cacao recibido.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 4,
          texto:
            'Además de las normas obligatorias, existen buenas prácticas reconocidas internacionalmente que mejoran la calidad del cacao desde su origen hasta su transformación, como la BPA y la BPM. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 5,
          texto:
            'La infraestructura juega un papel fundamental en la eficiencia y seguridad del proceso de recepción de cacao, se tiene en cuenta áreas de descarga, almacenamiento y ventilación, la cual debe ser controlada. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 6,
          texto:
            'El personal que trabaja en el proceso de recepción debe capacitarse en manejo de instrumentos de medición, normas de calidad y requisitos sanitarios. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 7,
          texto:
            'Una infraestructura bien definida permite manejar de forma eficiente los lotes que ingresan, evitando confusiones, pérdidas o contaminación. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 8,
          texto:
            'La estandarización en el proceso de recepción asegura el cumplimiento normativo y mejora la trazabilidad. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 9,
          texto:
            'La trazabilidad se refiere a la capacidad de seguir el rastro de un producto a lo largo de todas las etapas de producción, procesamiento y distribución. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
        {
          id: 10,
          texto:
            'Para asegurar un buen flujo de trabajo, es indispensable mantener registros detallados y organizados de cada lote recibido.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica etapas del proceso de recepción del cacao. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.  ',
        },
      ],
      mensaje_final_aprobado:
        'Ha identificado con claridad las etapas del proceso de recepción de cacao y su relación con la calidad del grano.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
