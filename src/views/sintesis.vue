<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p El proceso de recepción del cacao constituye una fase fundamental dentro de la cadena agroindustrial, pues determina la calidad de la materia prima que ingresa para su posterior transformación y comercialización.
    p El cacao es un cultivo de gran valor económico y social, especialmente en regiones tropicales, cuya producción exige cuidados desde la cosecha, la fermentación y el secado, hasta su entrega en centros de acopio o plantas procesadoras.
    p Los principios de recepción comprenden el conjunto de normas y procedimientos aplicados en el momento en que el cacao llega al centro de acopio. Su finalidad es garantizar la trazabilidad, el cumplimiento de requisitos técnicos y la clasificación del grano con base en parámetros de calidad. Entre los aspectos evaluados destacan la humedad, el grado de fermentación, la presencia de impurezas, los daños ocasionados por insectos y la homogeneidad del lote. Para ello se emplean herramientas como el muestreo representativo, los análisis físicos y organolépticos, y la documentación técnica correspondiente . Esta etapa es decisiva para tomar decisiones sobre la aceptación, rechazo o clasificación del lote, y asegurar la eficiencia en el manejo postcosecha.
    p La aplicación rigurosa de estos principios no solo contribuye a elevar la calidad del cacao comercializado, sino que también permite cumplir con estándares nacionales e internacionales (NTC, ISO), fortaleciendo la sostenibilidad y competitividad del sector cacaotero.    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se organizan en seis bloques que abarcan el proceso de recepción y manejo del cacao en la agroindustria. El primero aborda el concepto, finalidad, etapas y factores que afectan la calidad del grano; el segundo, las normas técnicas y sanitarias nacionales e internacionales; el tercero, la estandarización del proceso y sus ventajas; el cuarto, los recursos necesarios como herramientas, equipos, infraestructura y personal; el quinto, la trazabilidad y el control de calidad con sus registros clave; y el sexto, el diseño y organización del flujo de trabajo. En conjunto, ofrece una visión integral que combina aspectos técnicos, normativos, operativos y de gestión para asegurar eficiencia y calidad en la cadena productiva del cacao.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
