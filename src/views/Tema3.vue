<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Recursos utilizados en la recepción del cacao

    .bloque-texto-g.bg-8.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La recepción del cacao requiere una combinación adecuada de recursos físicos, tecnológicos y humanos para garantizar que el proceso se realice de forma eficiente, higiénica y conforme a los estándares de calidad. Estos recursos deben estar bien organizados y en buenas condiciones para asegurar un flujo de trabajo óptimo y minimizar riesgos de contaminación, pérdidas o deterioro del grano.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Infraestructura necesaria 

    p.mb-4 La infraestructura juega un papel fundamental en la eficiencia y seguridad del proceso de recepción, se tiene en cuenta áreas de descarga, almacenamiento, ventilación, entre otros.

    .row.justify-content-center
      .col-lg-5.mb-4.mb-lg-0(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Ejemplo diseño distribución de espacios  en infraestructura
        img(src='@/assets/curso/temas/t3/fig1.svg', alt='La distribución propuesta contempla el área de descarga en la parte frontal, lo que facilita el acceso de los vehículos y el manejo del producto. Junto a esta se ubica el área de inspección, permitiendo una evaluación rápida y eficiente de los granos. El área de almacenamiento temporal se dispone en un espacio protegido y separado, con el fin de preservar la calidad del cacao. Finalmente, las oficinas y las instalaciones sanitarias se sitúan en zonas estratégicamente accesibles para el personal, garantizando comodidad y funcionalidad en las operaciones diarias.')
      .col-lg-7(data-aos='fade-left')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-1")
          .row(titulo="Área de descarga")
            .col-md-11
              p.mb-0 Espacio techado, ventilado y de fácil acceso para camiones u otros medios de transporte. Debe contar con pisos firmes, resistentes y de fácil limpieza, que faciliten la manipulación segura de la carga.
          .row(titulo="Zonas de inspección y muestreo")
            .col-md-11
              p.mb-0 Áreas destinadas a la toma y análisis de muestras del grano, debidamente protegidas de la exposición solar directa y de la humedad.
          .row(titulo="Área de almacenamiento temporal")
            .col-md-11
              p.mb-0 Espacios secos, limpios y bien ventilados, donde el cacao puede permanecer antes de su procesamiento o traslado. Es fundamental evitar condiciones que favorezcan la proliferación de hongos, plagas o contaminantes.
          .row(titulo="Oficinas o puntos de control documental")
            .col-md-11
              p.mb-0 Lugares destinados al registro de datos, control de trazabilidad y elaboración de actas de recepción o rechazo del producto.
          .row(titulo="Instalaciones sanitarias")
            .col-md-11
              p.mb-0 Servicios higiénicos adecuados y accesibles para el personal, que garanticen condiciones de higiene y bienestar.
            

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Herramientas y equipos 

    p.mb-4 El empleo de herramientas y equipos adecuados resulta esencial para llevar a cabo el proceso con precisión, eficiencia y seguridad, garantizando tanto la calidad del producto como la protección del personal involucrado. 

    .row.justify-content-center
      .col-lg-9(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.bg-1.bgi-3.p-4(titulo="Básculas o balanzas")
            h4 Básculas o balanzas
            .row.justify-content-center
              .col-lg-9
                p Para el pesaje preciso del cacao recibido. Pueden ser digitales o mecánicas, pero deben estar calibradas.                
              .col-lg-3.col-md-7                
                img(src='@/assets/curso/temas/t3/tab1-1.png', alt='')
          .tarjeta.bg-1.bgi-3.p-4(titulo="Sondas de muestreo")
            h4 Sondas de muestreo
            .row.justify-content-center
              .col-lg-9
                p Se utilizan para extraer muestras representativas de los sacos sin comprometer la integridad del lote.        
              .col-lg-3.col-md-7                
                img(src='@/assets/curso/temas/t3/tab1-2.png', alt='')
          .tarjeta.bg-1.bgi-3.p-4(titulo="Medidores de humedad")
            h4 Medidores de humedad
            .row.justify-content-center
              .col-lg-9
                p Instrumentos que determinan el porcentaje de humedad del grano, un dato clave para su aceptación o rechazo.                
              .col-lg-3.col-md-7                
                img(src='@/assets/curso/temas/t3/tab1-3.png', alt='')
          .tarjeta.bg-1.bgi-3.p-4(titulo="Tamices o cribas")
            h4 Tamices o cribas
            .row.justify-content-center
              .col-lg-9
                p Para evaluar la presencia de impurezas o cuerpos extraños en el cacao.                
              .col-lg-3.col-md-7                
                img(src='@/assets/curso/temas/t3/tab1-4.png', alt='')
          .tarjeta.bg-1.bgi-3.p-4(titulo="Termómetros y termohigrómetros")
            h4 Termómetros y termohigrómetros
            .row.justify-content-center
              .col-lg-9
                p Para medir la temperatura y la humedad relativa del ambiente en las áreas de almacenamiento.                
              .col-lg-3.col-md-7                
                img(src='@/assets/curso/temas/t3/tab1-5.png', alt='')
          .tarjeta.bg-1.bgi-3.p-4(titulo="Equipos de protección personal (EPP)")
            h4 Equipos de protección personal (EPP)
            p.mb-4 Guantes, mascarillas, botas, gafas de seguridad y delantales, para proteger al personal y evitar la contaminación del grano.
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span  Equipos de protección personal
            img(src='@/assets/curso/temas/t3/fig2.svg', alt='Trabajador con elementos de protección personal (EPP). Se destacan, mediante íconos y etiquetas, las diferentes áreas que deben protegerse: cabeza (casco), ojos (gafas de seguridad), oídos (protección auditiva), vías respiratorias (mascarilla), manos (guantes), cuerpo (chaleco o ropa de protección) y pies (botas de seguridad).')
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/2.png', alt='')


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Personal: funciones, perfil y capacitación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        img.d-none.d-lg-block.mb-3.w-90(src='@/assets/curso/temas/t3/4.svg', alt='')
        p El recurso humano constituye uno de los pilares más importantes en el proceso de recepción del cacao, ya que su desempeño, nivel de capacitación, experiencia y compromiso inciden directamente en la calidad del producto que ingresa a la cadena agroindustrial. La correcta selección y formación del personal permite asegurar eficiencia en las operaciones, cumplimiento normativo y confianza en los resultados obtenidos.

    TabsB.mb-5(data-aos="fade-down")
      .bg-1.py-4.py-md-5(titulo="Funciones del personal" :icono="require('@/assets/curso/temas/t3/tab2-ico1.svg')")
        .row.justify-content-center
          .col-md-6.col-lg-3.col-9.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/tab2-1.png', alt='')
          .col-md-6.col-lg-8.col-10
            h4 Funciones del personal
            ul.lista-ul--color.ico-lista.fa-lista
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Descargar y trasladar el cacao de manera segura, utilizando técnicas adecuadas de manipulación de carga.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Realizar la inspección visual inicial del producto, identificando impurezas, daños o signos de contaminación.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Tomar y analizar muestras siguiendo los protocolos establecidos, garantizando representatividad y fiabilidad en los resultados.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Registrar la información del lote en los formatos o sistemas de control, asegurando trazabilidad.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Aplicar los criterios de aceptación o rechazo del producto, conforme a normas técnicas y de calidad vigentes.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Mantener el orden y la limpieza en las áreas de trabajo, cumpliendo con las medidas de seguridad industrial.
      .bg-1.py-4.py-md-5(titulo="Perfil del personal" :icono="require('@/assets/curso/temas/t3/tab2-ico2.svg')")
        .row.justify-content-center
          .col-md-6.col-lg-3.col-9.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/tab2-2.png', alt='')
          .col-md-6.col-lg-8.col-10
            h4 Perfil del personal
            ul.lista-ul--color.ico-lista.fa-lista
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Conocimientos básicos en procesos agrícolas y agroindustriales, preferiblemente en cacao o cultivos similares.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Capacidad para identificar defectos físicos en los granos y reconocer parámetros de calidad.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Compromiso con la aplicación de normas de higiene, bioseguridad y prevención de riesgos laborales.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Responsabilidad, atención al detalle y actitud proactiva en el cumplimiento de las tareas asignadas.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Habilidad para trabajar en equipo y comunicarse de forma efectiva con supervisores y compañeros.
      .bg-1.py-4.py-md-5(titulo="Capacitación necesaria" :icono="require('@/assets/curso/temas/t3/tab2-ico3.svg')")
        .row.justify-content-center
          .col-md-6.col-lg-3.col-9.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/tab2-3.png', alt='')
          .col-md-6.col-lg-8.col-10
            h4 Capacitación necesaria
            ul.lista-ul--color.ico-lista.fa-lista
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Procedimientos técnicos de recepción, inspección y muestreo de cacao.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Manejo de instrumentos de medición (balanzas, higrómetros, termómetros, entre otros).
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Normas nacionales (ICONTEC, ICA, INVIMA) e internacionales (ISO, #[em Codex alimentarius], UE, FDA) relacionadas con calidad e inocuidad del cacao.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Protocolos de higiene, seguridad industrial y control de riesgos en las áreas de trabajo.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Procesos de trazabilidad, documentación y manejo de registros para asegurar transparencia y control en la cadena de valor.
              li 
                img(src='@/assets/curso/temas/t1/lista.svg' alt='')
                span.mb-0 Sensibilización en sostenibilidad y buenas prácticas ambientales aplicadas al manejo del producto.

    .bgi-2.p-4.py-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-8
          .bg-7.p-4
            p.text-center.mb-0 #[b Nota:] una adecuada combinación de infraestructura, herramientas y talento humano permite establecer un proceso de recepción ordenado, seguro y alineado con los estándares de calidad exigidos por la industria cacaotera moderna.


</template>

<script>
export default {
  name: 'Tema3',
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
