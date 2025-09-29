<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Flujos de trabajo en procesos agrícolas y agroindustriales 

    p.mb-5 Un flujo de trabajo bien implementado en la recepción del cacao no solo mejora la productividad, sino que garantiza la calidad final del producto y el cumplimiento normativo, factores clave para competir en mercados exigentes.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t2/subt.png', alt='')
        h3.mb-0.px-3.pe-5 Concepto de flujo de trabajo

    .row.justify-content-center.align-items-center
      .col-lg-7(data-aos="fade-right")
        p Un flujo de trabajo (también conocido como #[em workflow]) es la secuencia lógica, ordenada y estructurada de tareas o actividades que se deben realizar para cumplir un objetivo dentro de un proceso. En el contexto agrícola y agroindustrial, los flujos de trabajo son esenciales para garantizar la eficiencia, la calidad y la trazabilidad en cada etapa de la producción y transformación.
        .bg-1.p-4.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-5.col-9.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t4/1.svg', alt='')
            .col-lg-8.col-md-7
              p Los flujos de trabajo ayudan a:
              ul.lista-ul--color.ico-lista.fa-lista.mb-0
                li 
                  img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                  span.mb-0 Optimizar tiempos y recursos.
                li 
                  img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                  span.mb-0 Reducir errores y retrabajos.
                li 
                  img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                  span.mb-0 Garantizar el cumplimiento de normas técnicas y sanitarias.
                li 
                  img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                  span.mb-0 Facilitar la capacitación del personal.
                li 
                  img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                  span.mb-0 Estandarizar procedimientos para lograr productos homogéneos y de calidad.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/2.png', alt='')


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Diseño y organización del flujo en la recepción del cacao

    p En la recepción del cacao, un flujo de trabajo bien definido permite manejar de forma eficiente los lotes que ingresan, evitando confusiones, pérdidas o contaminación. A continuación, se presenta un ejemplo básico de flujo de trabajo para esta etapa:

    p.mb-4 Flujo de trabajo estándar (recepción del cacao):

    .row.justify-content-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-9(data-aos="fade-left")
        SlyderF.circl-arrow.mb-4(columnas="col-lg-4 col-md-6")
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-1.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 A. Llegada del cacao a la planta o centro de acopio
            p.text-center Verificación de documentos de transporte, origen y condiciones de entrega.
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-2.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 B. Registro del proveedor y del lote
            p.text-center Ingreso de los datos en el sistema de control (manual o digital), garantizando trazabilidad.
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-3.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 C. Pesaje del lote
            p.text-center Determinación del peso bruto, la tara y el peso neto para su registro oficial.
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-4.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 D. Toma de muestra
            p.text-center Extracción representativa de granos de cacao según protocolo establecido, con fines de análisis.
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-5.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 E. Análisis de calidad
            p.text-center Evaluación de parámetros como humedad, grado de fermentación, defectos físicos e impurezas.
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-6.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 F. Clasificación del lote
            p.text-center Determinación de aceptación, rechazo o clasificación del cacao de acuerdo con la calidad identificada.
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-7.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 G. Almacenamiento temporal
            p.text-center Ubicación del lote en espacios adecuados, de acuerdo con el resultado del análisis y las condiciones de conservación requeridas.
          .tarjeta.bg-4.p-4
            .row.justify-content-center.mb-3
              .col-md-8.col-lg-5.col-5
                img(src='@/assets/curso/temas/t4/tarj1-8.svg' alt='')
            .bg-color-acento-contenido.p-2.mb-3
              h4.text-center.text-white.mb-0 H. Documentación y trazabilidad
            p.text-center Registro integral de todo el proceso y asignación de un código único de lote para seguimiento en la cadena productiva.

    p.mb-5 Cada una de estas etapas puede ser apoyada por herramientas tecnológicas ya sea sistemas de gestión, formularios digitales, entre otros, que agilizan el proceso y aseguran la recolección precisa de datos.


    .subt2.p-2.ps-3.pe-4.mb-4(data-aos="fade-right")
      h4.mb-0 Ejemplo de flujo de trabajo eficiente

    p.mb-4 En un centro de acopio regional, el flujo de trabajo para la recepción de cacao puede diseñarse de manera que cada etapa esté claramente organizada y conectada:

    .row.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")        
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Llegada del productor")
            .col-md-11.mb-4.mb-md-0
              p El productor arriba con su carga y un operario verifica su turno de entrega mediante una lista digital.
          .row(numero="2" titulo="Estación de pesaje")
            .col-md-11.mb-4.mb-md-0
              p Se registra automáticamente el peso del lote (peso bruto, tara y peso neto).
          .row(numero="3" titulo="Toma de muestras")
            .col-md-11.mb-4.mb-md-0
              p Un técnico extrae muestras representativas directamente de los sacos, utilizando una sonda.
          .row(numero="4" titulo="Análisis de laboratorio")
            .col-md-11.mb-4.mb-md-0
              p Se evalúan parámetros clave como humedad, defectos y nivel de fermentación en un laboratorio básico del centro de acopio.
          .row(numero="5" titulo="Calificación del lote")
            .col-md-11.mb-4.mb-md-0
              p El sistema emite la clasificación de calidad y genera un comprobante con el precio estimado según los resultados.
          .row(numero="6" titulo="Almacenamiento o devolución")
            .col-md-11.mb-4.mb-md-0
              p El cacao aceptado se guarda en un área con condiciones controladas; el rechazado se devuelve al productor o se deriva a reprocesamiento.
          .row(numero="7" titulo="Registro en plataforma")
            .col-md-11.mb-4.mb-md-0
              p Toda la información se digitaliza en un sistema que garantiza trazabilidad hasta el nivel del productor.
      .col-lg-5.col-md-9.col-10(data-aos="fade-left")   
        img(src='@/assets/curso/temas/t4/4.png', alt='')

    p Este tipo de flujo permite manejar gran volumen de cacao de forma ordenada, minimiza el riesgo de errores humanos y fortalece la relación con los proveedores gracias a la transparencia del proceso.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
