<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normativas técnicas y sanitarias aplicables

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El conocimiento y la correcta aplicación de las normativas técnicas y sanitarias constituyen un pilar fundamental para que los actores de la cadena cacaotera aseguren un producto competitivo, seguro y de alta calidad, tanto en el mercado interno como en el internacional. Estas regulaciones establecen los criterios que orientan la producción, recepción, almacenamiento, procesamiento y comercialización del cacao, con el fin de garantizar la inocuidad alimentaria, la sostenibilidad de la actividad agrícola y la confianza del consumidor.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t2/subt.png', alt='')
        h3.mb-0.px-3.pe-5 Normativas nacionales relevantes 

    p.mb-4 En cada país productor de cacao existen organismos reguladores que emiten lineamientos y requisitos técnicos para garantizar la inocuidad, calidad y trazabilidad del producto. Estas son las entidades más relevantes en Colombia: 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Entidades y funciones relacionadas con la regulación del cacao en Colombia
        .tabla-a.color-acento-contenido.text-start.mb-5
          table(alt="En Colombia, varias entidades regulan la producción y calidad del cacao. El ICA se encarga de la sanidad agropecuaria y el cumplimiento de las Buenas Prácticas Agrícolas; el INVIMA supervisa las condiciones higiénico-sanitarias en los procesos agroindustriales; el Ministerio de Agricultura y Desarrollo Rural impulsa políticas para estandarizar la producción y comercialización; y el ICONTEC define normas técnicas, como la NTC 1252, que establecen las especificaciones de calidad del grano.")
            thead
              tr.bg-color-acento-contenido.text-white
                th Entidad
                th Funciones 
            tbody
              tr
                td.fw-bold Instituto Colombiano Agropecuario (ICA)
                td Regula la sanidad agropecuaria, el uso de insumos agrícolas y el cumplimiento de Buenas Prácticas Agrícolas (BPA).
              tr.bg-4
                td.fw-bold Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA)
                td Vigila el cumplimiento de las condiciones higiénico-sanitarias en los procesos agroindustriales.
              tr
                td.fw-bold Ministerio de Agricultura y Desarrollo Rural
                td Promueve políticas para la estandarización de la producción y comercialización del cacao.
              tr.bg-4
                td.fw-bold Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC)
                td Establece normas técnicas como la NTC 1252 (especificaciones para el grano de cacao) y otras que regulan las características físicas y de calidad del producto.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t2/subt.png', alt='')
        h3.mb-0.px-3.pe-5 Normativas internacionales 

    p.mb-4 El comercio internacional de cacao está regido por estándares internacionales que buscan asegurar la calidad y seguridad del producto para el consumidor final. Algunas de las principales normativas aplicables son:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Normativas internacionales aplicables al cacao
        .tabla-a.color-acento-contenido.text-start
          table(alt="A nivel internacional, el Codex Alimentarius (FAO/OMS) establece criterios generales de inocuidad para alimentos, como límites de contaminantes, residuos de pesticidas y métodos de muestreo. De manera complementaria, la ISO 2451:2017 regula los métodos de muestreo y análisis físico del cacao, mientras que las normas ISO 2292 e ISO 2291 definen las condiciones para evaluar el contenido de humedad. Por su parte, la Unión Europea aplica reglamentos estrictos sobre micotoxinas, metales pesados y pesticidas, y la FDA en Estados Unidos supervisa la inocuidad del cacao importado, estableciendo límites para contaminantes microbiológicos y químicos.")
            thead
              tr.bg-color-acento-contenido.text-white
                th Norma / entidad
                th Alcance / responsabilidad 
            tbody
              tr.bg-4
                td.fw-bold #[em Codex alimentarius] (FAO/OMS)
                td Establece criterios generales para alimentos, incluyendo límites de contaminantes, residuos de pesticidas y métodos de muestreo.
              tr
                td.fw-bold ISO 2451:2017 – Cacao en grano
                td Define los métodos de muestreo y análisis físico del cacao.
              tr.bg-4
                td.fw-bold ISO 2292 e ISO 2291
                td Especifican las condiciones para el muestreo y análisis del contenido de humedad en el cacao.
              tr
                td.fw-bold Reglamentos de la Unión Europea (UE)
                td Imponen límites estrictos sobre la presencia de micotoxinas, metales pesados y pesticidas en el cacao y sus derivados.
              tr.bg-4
                td.fw-bold FDA (Food and Drug Administration – Estados Unidos)
                td Supervisa la inocuidad del cacao importado, incluyendo límites sobre contaminantes microbiológicos y requisitos de seguridad alimentaria.

    p Cumplir con estas regulaciones es indispensable para que el cacao pueda acceder a mercados de alto valor, como el europeo, norteamericano o asiático.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Buenas Prácticas Agrícolas (BPA) y Buenas Prácticas de Manufactura (BPM)

    p.mb-4 Además de las normas obligatorias, existen buenas prácticas reconocidas internacionalmente que mejoran la calidad del cacao desde su origen hasta su transformación.

    .row.justify-content-center.mb-4(data-aos='fade-down')
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-5.p-5.px-4
            .row.justify-content-center.mb-4
              .col-6.col-lg-5
                img(src='@/assets/curso/temas/t2/tarj1-1.svg', alt='')
            h3.text-center.text-white.mb-4 Buenas Prácticas Agrícolas (BPA)
            ul.lista-ul--color.ico-lista.fa-lista.text-white.mb-4
              li 
                img(src='@/assets/curso/temas/t2/lista_am.svg' alt='')
                span.mb-0 Uso responsable de agroquímicos.
              li 
                img(src='@/assets/curso/temas/t2/lista_am.svg' alt='')
                span.mb-0 Protección del medio ambiente.
              li 
                img(src='@/assets/curso/temas/t2/lista_am.svg' alt='')
                span.mb-0 Salud y seguridad del trabajador rural.
              li 
                img(src='@/assets/curso/temas/t2/lista_am.svg' alt='')
                span.mb-0 Manejo postcosecha adecuado (fermentación, secado, almacenamiento).
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=IJfFm2dJC_k" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/t2/video.svg")
              .anexo__texto
                p.mb-0 #[strong Video: Taller BPA. BPA en cacao.] Se habla de las buenas prácticas agrícolas del cultivo de cacao.
          .col-md.tarjeta.bg-6.p-5.px-4
            .row.justify-content-center.mb-4
              .col-6.col-lg-5
                img(src='@/assets/curso/temas/t2/tarj1-2.svg', alt='')
            h3.text-center.text-white.mb-4 Buenas Prácticas de Manufactura (BPM)
            ul.lista-ul--color.ico-lista.fa-lista.text-white.mb-4
              li 
                img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                span.mb-0 Condiciones higiénicas en el centro de acopio o planta.
              li 
                img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                span.mb-0 Capacitación del personal.
              li 
                img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                span.mb-0 Procedimientos estandarizados de limpieza y control de plagas.
              li 
                img(src='@/assets/curso/temas/t2/lista_caf.svg' alt='')
                span.mb-0 Documentación y registros de trazabilidad.
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=kktStLNE41I" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/t2/video.svg")
              .anexo__texto
                p.mb-0 #[strong Video: BUENAS PRACTICAS DE MANUFACTURA EN LA INDUSTRIA ALIMENTARIA.] Se invita a explorar el siguiente video para profundizar sobre las BPM.

    .bgi-2.p-4.py-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-8
          .bg-7.p-4
            p.text-center.mb-0 #[b Nota:] la implementación de estas prácticas no solo garantiza el cumplimiento de la normativa vigente, sino que también fortalece la reputación del producto, incrementa su competitividad en el mercado y genera mayor confianza en el consumidor final.




</template>

<script>
export default {
  name: 'Tema2',
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
