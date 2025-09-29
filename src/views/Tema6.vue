<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Trazabilidad y control de calidad en productos agrícolas

    .bloque-texto-g.bg-8.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t6/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 En la industria agroalimentaria moderna, los conceptos de trazabilidad y control de calidad son fundamentales para garantizar productos seguros, consistentes y confiables. Su aplicación en el proceso de recepción del cacao permite no solo verificar la calidad del grano que ingresa a la cadena productiva, sino también rastrear su origen y evolución en todo el proceso agroindustrial.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t2/subt.png', alt='')
        h3.mb-0.px-3.pe-5 Principios de trazabilidad en la agroindustria

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t6/2.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p.mb-0 La trazabilidad se refiere a la capacidad de seguir el rastro de un producto a lo largo de todas las etapas de producción, procesamiento y distribución. En otras palabras, es el registro detallado de toda la historia del producto desde su origen hasta su destino final.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .subt2.p-2.ps-3.pe-4.mb-4
          h4.mb-0 En el contexto del cacao, la trazabilidad incluye:
        ul.lista-ul--color.ico-lista.fa-lista.mb-0
          li 
            img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
            span.mb-0 Identificación del productor o finca.
          li 
            img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
            span.mb-0 Datos del lote: fecha de cosecha, condiciones de fermentación y secado, número de sacos, peso total.
          li 
            img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
            span.mb-0 Historial de transporte y recepción.
          li 
            img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
            span.mb-0 Resultados del análisis de calidad.
          li 
            img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
            span.mb-0 Ubicación en almacén o centro de acopio.
      .col-lg-7(data-aos="fade-left")
        .tarjeta.bg-9
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-7.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t6/3.png', alt='')
            .col-lg-7
              .p-3
                .subt2.p-2.ps-3.pe-4.mb-4
                  h4.mb-0 ¿Por qué es importante?
                ul.lista-ul--color.ico-lista.fa-lista.mb-0
                  li.mb-1 
                    img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                    span.mb-0 Cumple con requisitos legales y comerciales.
                  li.mb-1 
                    img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                    span.mb-0 Permite responder rápidamente ante problemas de calidad o seguridad.
                  li.mb-1 
                    img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                    span.mb-0 Facilita certificaciones (orgánico, comercio justo, etc.).
                  li.mb-0 
                    img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                    span.mb-0 Genera confianza en el consumidor.

    .row.justify-content-center(data-aos="fade")
      .col-lg-10
        .bg-1.p-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-2.col-4.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t6/4.svg', alt='')
            .col-lg-11.col-md-10
              p.mb-0 Ejemplo: si un cliente internacional detecta moho en un lote de cacao, gracias a la trazabilidad es posible identificar el proveedor, la fecha de recepción, las condiciones del lote y los pasos seguidos, lo que permite tomar acciones correctivas inmediatas.              


    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.1 Registro y seguimiento de lotes de cacao

    p.mb-5 Para garantizar una trazabilidad efectiva y un control de calidad confiable, es indispensable mantener registros detallados, claros y organizados de cada lote de cacao recibido.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t2/subt.png', alt='')
        h3.mb-0.px-3.pe-5 Elementos clave en el registro de lotes:

    .row.justify-content-center.tarj-hover.mb-4(data-aos="fade")
      .col-lg-3.col-md-6.mb-3
        .tarjeta.bg-1.p-3.h-100
          .row.justify-content-center.align-items-center.h-100
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t6/tarj1-1.svg', alt='')
            .col-lg-8.col-md-8.col-9
              p.mb-0 Código único de lote.
      .col-lg-3.col-md-6.mb-3  
        .tarjeta.bg-1.p-3.h-100
          .row.justify-content-center.align-items-center.h-100
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t6/tarj1-2.svg', alt='')
            .col-lg-8.col-md-8.col-9
              p.mb-0 Nombre del proveedor y ubicación de origen.
      .col-lg-3.col-md-6.mb-3  
        .tarjeta.bg-1.p-3.h-100
          .row.justify-content-center.align-items-center.h-100
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t6/tarj1-3.svg', alt='')
            .col-lg-8.col-md-8.col-9
              p.mb-0 Fecha y hora de recepción.
      .col-lg-3.col-md-6.mb-3  
        .tarjeta.bg-1.p-3.h-100
          .row.justify-content-center.align-items-center.h-100
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t6/tarj1-4.svg', alt='')
            .col-lg-8.col-md-8.col-9
              p.mb-0 Peso bruto, tara y peso neto.
      .col-lg-3.col-md-6.mb-3  
        .tarjeta.bg-1.p-3.h-100
          .row.justify-content-center.align-items-center.h-100
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t6/tarj1-5.svg', alt='')
            .col-lg-8.col-md-8.col-9
              p.mb-0 Resultados de análisis (humedad, fermentación, defectos, impurezas).
      .col-lg-3.col-md-6.mb-3  
        .tarjeta.bg-1.p-3.h-100
          .row.justify-content-center.align-items-center.h-100
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t6/tarj1-6.svg', alt='')
            .col-lg-8.col-md-8.col-9
              p.mb-0 Estado del lote (aceptado, rechazado o destinado a reprocesamiento).
      .col-lg-3.col-md-6.mb-3  
        .tarjeta.bg-1.p-3.h-100
          .row.justify-content-center.align-items-center.h-100
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t6/tarj1-7.svg', alt='')
            .col-lg-8.col-md-8.col-9
              p.mb-0 Observaciones adicionales relevantes.

    p.mb-4 Estos registros deben estar disponibles para #[b consulta interna, auditorías o verificaciones externas], y conservarse durante el periodo establecido por la normativa vigente.

    .bgi-2.p-4.py-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-8
          .bg-7.p-4
            p.text-center #[b Nota:] un sistema de registro bien estructurado no solo mejora la toma de decisiones, sino que también permite identificar patrones de calidad según la zona de cultivo y, en consecuencia, incrementar el valor comercial del producto.
            p.text-center.mb-0 La trazabilidad y el control de calidad han dejado de ser únicamente exigencias técnicas para convertirse en herramientas estratégicas que fortalecen la competitividad del cacao en mercados globales. Su correcta implementación en la recepción contribuye a construir una cadena productiva más confiable, rentable y sostenible.


</template>

<script>
export default {
  name: 'Tema6',
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
