<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Recepción del cacao en procesos agroindustriales
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La recepción del cacao constituye una etapa fundamental dentro de los procesos agroindustriales, ya que es el punto de partida para asegurar la calidad final del producto. Una recepción rigurosa y bien estructurada no solo permite identificar a tiempo posibles irregularidades en el grano, sino también garantizar que únicamente el cacao en condiciones óptimas ingrese a la cadena productiva. Este procedimiento, además de preservar los estándares de calidad e inocuidad exigidos por los mercados más competitivos, contribuye a optimizar los recursos, reducir pérdidas y fortalecer la confianza entre productores, transformadores y consumidores.

    .row.bgcolor-1.tarjeta.align-items-center.p-2.p-md-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Video: Planificación para la recepción del cacao
                  p.mb-0 Se invita a explorar el siguiente video para profundizar sobre la historia del cacao y su estado actual.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=yUuBW8YCt9E')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-video


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Postcosecha del cacao

    p.mb-4 Es una etapa muy importante en la producción de cacao, ya que influye directamente en la calidad del grano y, por tanto, en el sabor y aroma del chocolate. Involucra una serie de procesos que comienzan justo después de la recolección de las mazorcas (como es conocido el fruto del cacao) y continúan hasta que el grano está listo para ser almacenado o comercializado (donde inicia el proceso de recepción del grano).

    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            PasosB.color-acento-botones
              .row.justify-content-center.align-items-center(titulo="Etapa 1")
                .col-lg-5.col-md-6.mb-4.mb-md-0
                  h4 Cosecha
                  ul.lista-ul--color.ico-lista.fa-lista
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se seleccionan las mazorcas maduras, que suelen tener un color característico (amarillo, naranja o rojo, dependiendo de la variedad).
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se cortan cuidadosamente para evitar dañar las flores y ramas.
                .col-lg-5.col-md-6
                  img(src='@/assets/curso/temas/t1/paso1-1.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Etapa 2")
                .col-lg-5.col-md-6.mb-4.mb-md-0
                  h4 Partido o desgranado
                  p Las mazorcas se abren (a mano o con herramientas) para extraer los granos de cacao recubiertos de pulpa.
                .col-lg-5.col-md-6
                  img(src='@/assets/curso/temas/t1/paso1-2.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Etapa 3")
                .col-lg-5.col-md-6.mb-4.mb-md-0
                  h4 Fermentación
                  ul.lista-ul--color.ico-lista.fa-lista
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 El tiempo de fermentación es de 5 a 7 días, dependiendo de la variedad y el clima.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se realiza en cajas de madera, canastas, hojas de plátano o sacos de yute.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Su objetivo es eliminar la pulpa, desarrollar precursores del sabor y matar el embrión de la semilla para que no germine.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Un buen proceso de fermentación mejora el sabor, aroma y reduce la astringencia y amargor.
                .col-lg-5.col-md-6
                  img(src='@/assets/curso/temas/t1/paso1-3.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Etapa 4")
                .col-lg-5.col-md-6.mb-4.mb-md-0
                  h4 Secado
                  ul.lista-ul--color.ico-lista.fa-lista
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 El tiempo de secado oscila entre 5 y 10 días, dependiendo del clima.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se seca al sol (en patios, bandejas o secadores solares) o con sistemas artificiales (secadores mecánicos).
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se reduce la humedad del grano del 60 % al 6 – 7 % para evitar hongos y asegurar buena conservación.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se remueven constantemente los granos para un secado uniforme.
                .col-lg-5.col-md-6
                  img(src='@/assets/curso/temas/t1/paso1-4.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Etapa 5")
                .col-lg-5.col-md-6.mb-4.mb-md-0
                  h4 Limpieza y selección
                  ul.lista-ul--color.ico-lista.fa-lista
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se eliminan impurezas, granos dañados, mohosos o planos.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Se seleccionan los granos de mejor calidad.
                .col-lg-5.col-md-6
                  img(src='@/assets/curso/temas/t1/paso1-5.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Etapa 6")
                .col-lg-5.col-md-6.mb-4.mb-md-0
                  h4 Almacenamiento
                  ul.lista-ul--color.ico-lista.fa-lista
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 En sacos de yute o polipropileno ventilado.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 En lugares frescos, secos y ventilados, alejados de olores fuertes (el cacao absorbe olores fácilmente).
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Evitar la exposición a la humedad y a plagas.
                .col-lg-5.col-md-6
                  img(src='@/assets/curso/temas/t1/paso1-6.png', alt='')
              .row.justify-content-center.align-items-center(titulo="Etapa 7")
                .col-lg-5.col-md-6.mb-4.mb-md-0
                  h4 Importancia de la postcosecha
                  ul.lista-ul--color.ico-lista.fa-lista
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Mejora la calidad organoléptica del grano (sabor, aroma, textura).
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Es crucial para cumplir con los estándares internacionales de calidad.
                    li 
                      img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                      span.mb-0 Aumenta el valor comercial del producto.
                .col-lg-5.col-md-6
                  img(src='@/assets/curso/temas/t1/paso1-7.png', alt='')


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Concepto y finalidad de la recepción del cacao

    p.mb-4 La recepción del cacao es el proceso mediante el cual se recibe y verifica la materia prima en las instalaciones agroindustriales o centros de acopio. Su objetivo principal es garantizar que los granos cumplan con las condiciones de calidad, higiene y características físicas previamente establecidas, antes de proceder a su almacenamiento o transformación.

    .row.justify-content-center.align-items-center
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg-1.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 Este proceso comprende diversas actividades clave, entre ellas la inspección visual, el pesaje, la toma de muestras, el análisis de calidad y el registro documental del ingreso. Asimismo, contempla la verificación de la trazabilidad del lote, incluyendo su procedencia, la fecha de cosecha y el cumplimiento de prácticas agrícolas sostenibles, aspectos fundamentales para garantizar transparencia y confianza en la cadena productiva.
        p Una correcta recepción del cacao resulta esencial para mantener la integridad del grano, prevenir riesgos de contaminación y asegurar la eficiencia de los procesos posteriores como la fermentación, el secado, el almacenamiento y la transformación industrial. De igual manera, permite clasificar el producto de acuerdo con parámetros técnicos y comerciales, optimizar el uso de los recursos disponibles y responder a las exigencias de los mercados nacionales e internacionales, donde la calidad y la inocuidad representan factores determinantes para la competitividad.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Etapas del proceso de recepción

    p.mb-4 Aunque pueden variar según la empresa o el tipo de instalación, las etapas más comunes del proceso de recepción del cacao son:
    
    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")        
        LineaTiempoD.color-acento-botones
          .row(numero="A" titulo="Recepción física del lote")
            .col-md-6.mb-4.mb-md-0
              p Se descarga el cacao del transporte (sacos, contenedores, bultos) y se verifica que no haya daño visible en los empaques.
            .col-md-6
              img(src='@/assets/curso/temas/t1/paso2-1.png', alt='')
          .row(numero="B" titulo="Identificación y trazabilidad del proveedor")
            .col-md-12.mb-4.mb-md-0
              p Se registra la información del productor o proveedor, el lote entregado, la ubicación de origen, y las condiciones de transporte.
          .row(numero="C" titulo="Pesaje del cacao")
            .col-md-6.mb-4.mb-md-0
              p Se realiza el pesaje bruto y neto del cacao recibido para registrar la cantidad total ingresada.
            .col-md-6
              img(src='@/assets/curso/temas/t1/paso2-3.png', alt='')
          .row(numero="D" titulo="Inspección visual")
            .col-md-6.mb-4.mb-md-0
              p Se verifica el estado general del grano: color, humedad aparente, presencia de impurezas, hongos, o insectos.
            .col-md-6
              img(src='@/assets/curso/temas/t1/paso2-4.png', alt='')
          .row(numero="E" titulo="Toma de muestras y análisis de calidad")
            .col-md-6.mb-4.mb-md-0
              pSe extraen muestras representativas del lote para análisis físico - químico y sensorial, como humedad, índice de fermentación, presencia de granos defectuosos, etc.
            .col-md-6
              img(src='@/assets/curso/temas/t1/paso2-5.png', alt='')
          .row(numero="F" titulo="Clasificación y aceptación del lote")
            .col-md-6.mb-4.mb-md-0
              p Con base en los resultados del análisis, el lote es aceptado, rechazado o clasificado por calidad. También se determina si requiere reprocesamiento.
            .col-md-6
              img(src='@/assets/curso/temas/t1/paso2-6.png', alt='')
          .row(numero="G" titulo="Registro y documentación")
            .col-md-12.mb-4.mb-md-0
              p Todos los datos se registran en formatos físicos o digitales, y se asigna un código de trazabilidad para seguimiento interno.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/5.png', alt='')
          

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Factores que afectan la calidad del cacao recibido

    p.mb-4 Durante la recepción del cacao es fundamental considerar diversos factores que pueden comprometer la calidad del grano:

    SlyderF(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg-1.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-6
            img(src='@/assets/curso/temas/t1/tarj1-1.svg' alt='')
        h4.text-center Humedad excesiva
        p.text-center Favorece la proliferación de hongos y acelera el deterioro del grano.
      .tarjeta.bg-1.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-6
            img(src='@/assets/curso/temas/t1/tarj1-2.svg' alt='')
        h4.text-center Fermentación deficiente
        p.text-center Afecta directamente el desarrollo del sabor y aroma característicos del cacao, disminuyendo su valor comercial.
      .tarjeta.bg-1.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-6
            img(src='@/assets/curso/temas/t1/tarj1-3.svg' alt='')
        h4.text-center Contaminación física o biológica
        p.text-center Presencia de piedras, insectos, excretas u otros materiales extraños que ponen en riesgo la inocuidad.
      .tarjeta.bg-1.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-6
            img(src='@/assets/curso/temas/t1/tarj1-4.svg' alt='')
        h4.text-center Manejo inadecuado en el transporte
        p.text-center Exposición a la lluvia, temperaturas elevadas o deficiente ventilación que deterioran la materia prima.
      .tarjeta.bg-1.bgi-1.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-6
            img(src='@/assets/curso/temas/t1/tarj1-5.svg' alt='')
        h4.text-center Mezcla de calidades
        p.text-center Ocurre cuando se combinan lotes de diferente origen, grado de fermentación o calidad sin un control adecuado.

  </template>

<script>
export default {
  name: 'Tema1',
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
