<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-right")
        p.mb-0 La cadena de producción del cacao involucra una serie de etapas fundamentales para garantizar un producto de alta calidad que cumpla con los estándares del mercado nacional e internacional. Una de las fases más críticas es la recepción del cacao, ya que representa el primer punto de control en el ingreso del producto a los procesos agroindustriales.

    .row.justify-content-end.position-relative.mb-4(data-aos="fade")
      .col-lg-9
        .bg-1.py-3.p-4.mb-4
          p.mb-0 En esta etapa, se verifica que el cacao cumpla con los requisitos mínimos de calidad, sanidad y trazabilidad, lo que permite mantener la integridad del producto a lo largo del resto de la cadena productiva. Una recepción adecuada no solo asegura la calidad del cacao, sino que también previene pérdidas económicas, contaminaciones cruzadas y problemas legales derivados del incumplimiento normativo.
        .row.justify-content-center.mb-4
          .col-lg-3.col-md-3.col-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/intro/3.svg', alt='')
          .col-lg-9.col-md-9
            p El desarrollo agroindustrial actual demanda una gestión eficiente, profesional y técnica de todos los procesos. Por eso, la caracterización del proceso de recepción no se limita a la simple descarga de materia prima, sino que implica el conocimiento y aplicación de normativas técnicas y sanitarias, el uso de recursos adecuados (infraestructura, herramientas, personal calificado), y la organización mediante flujos de trabajo estandarizados.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
      .col-lg-10.txt-1
        p.ps-lg-4 Este componente formativo ofrece a los participantes las herramientas conceptuales necesarias para comprender y aplicar correctamente los procedimientos de recepción del cacao. Además, busca fomentar una visión integral del proceso, resaltando la importancia de la trazabilidad, el control de calidad y la estandarización, como pilares fundamentales para una agroindustria sostenible y competitiva.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Jr4DzFOYMbM?si=ZPNXJid7DxBjA4kt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Cacao y principios de recepción - introducción


</template>

<script>
export default {
  name: 'Introduccion',
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
