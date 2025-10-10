export default {
  global: {
    Name: 'Cacao y principios de recepción',
    Description:
      'Este componente formativo tiene como propósito identificar y describir el proceso de recepción del cacao, en concordancia con la normativa vigente, los recursos disponibles y los flujos de trabajo establecidos. Su enfoque está orientado a garantizar la calidad del producto desde su ingreso, mediante la aplicación de procedimientos técnicos, controles y criterios de aceptación que aseguren el cumplimiento de los estándares exigidos en la cadena de valor del cacao.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recepción del cacao en procesos agroindustriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Postcosecha del cacao',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto y finalidad de la recepción del cacao',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Etapas del proceso de recepción',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Factores que afectan la calidad del cacao recibido',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normativas técnicas y sanitarias aplicables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Buenas Prácticas Agrícolas (BPA) y Buenas Prácticas de Manufactura (BPM)',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Recursos utilizados en la recepción del cacao',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Infraestructura necesaria',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas y equipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Personal: funciones, perfil y capacitación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Flujos de trabajo en procesos agrícolas y agroindustriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diseño y organización del flujo en la recepción del cacao',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estandarización del proceso de recepción del cacao',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ventajas de la estandarización',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aplicación en el contexto de la recepción del cacao',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Trazabilidad y control de calidad en productos agrícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Registro y seguimiento de lotes de cacao',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Trazabilidad y control de calidad',
      referencia:
        'PROAmazonía. (2021). Manual Proceso de centro de acopio de cacao.',
      tipo: 'Pdf',
      link:
        'https://www.proamazonia.org/wp-content/uploads/2021/05/Manual_cacao_2021.pdf',
    },
    {
      tema: 'Recepción de cacao en procesos industriales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). La producción del cacao en grano.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=ertzWvG-I2Q',
    },
    {
      tema:
        'Buenas Prácticas Agrícolas (BPA) y Buenas Prácticas de Manufactura (BPM)',
      referencia: 'Escuela Elia (2022). ¿Qué es la Norma GLOBAL G.A.P.?',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=XYkAYCDeRhk',
    },
  ],
  glosario: [
    {
      termino: 'Acopio',
      significado: 'Recolección y almacenamiento temporal del cacao.',
    },
    {
      termino: 'Almacenamiento',
      significado: 'Conservación del cacao en condiciones controladas.',
    },
    {
      termino: 'Análisis físico',
      significado: 'Evaluación visual o instrumental del grano.',
    },
    {
      termino: 'Bodega',
      significado: 'Área de almacenamiento del cacao.',
    },
    {
      termino: 'Cacao en grano',
      significado: 'Semilla seca y fermentada del cacao.',
    },
    {
      termino: 'Clasificación',
      significado: 'Agrupación por niveles de calidad.',
    },
    {
      termino: 'Contaminación',
      significado: 'Presencia de impurezas físicas o biológicas.',
    },
    {
      termino: 'Control de calidad',
      significado: 'Verificación del cumplimiento de estándares.',
    },
    {
      termino: 'Defectos',
      significado: 'Alteraciones que reducen la calidad del cacao.',
    },
    {
      termino: 'Entrega',
      significado: 'Recepción formal del cacao por parte del comprador.',
    },
    {
      termino: 'Fermentación',
      significado: 'Proceso biológico que desarrolla aroma y sabor.',
    },
    {
      termino: 'Grado de humedad',
      significado: 'Porcentaje de agua presente en el grano.',
    },
    {
      termino: 'Grano partido',
      significado: 'Semilla rota, considerada defecto.',
    },
    {
      termino: 'Grano plano',
      significado: 'Grano sin contenido interno suficiente.',
    },
    {
      termino: 'Grano violeta',
      significado: 'Indica fermentación incompleta.',
    },
    {
      termino: 'Grano mohoso',
      significado: 'Afectado por hongos, debido a humedad excesiva.',
    },
    {
      termino: 'Homogeneidad',
      significado: 'Uniformidad del lote.',
    },
    {
      termino: 'Impurezas',
      significado: 'Material no propio del grano (ramas, tierra).',
    },
    {
      termino: 'Mermas',
      significado: 'Pérdidas de peso o volumen por defectos o residuos.',
    },
    {
      termino: 'Recepción',
      significado: 'Ingreso del cacao al sistema agroindustrial.',
    },
    {
      termino: 'Rechazo',
      significado: 'No aceptación del lote por incumplimiento.',
    },
    {
      termino: 'Secado',
      significado: 'Reducción de humedad para conservación del grano.',
    },
    {
      termino: 'Sonda',
      significado: 'Herramienta para extraer muestras de cacao.',
    },
    {
      termino: 'Tara',
      significado: 'Peso del empaque vacío.',
    },
  ],
  referencias: [
    {
      referencia:
        'Federación Nacional de Cacaderos. FEDECACAO. Documentos técnicos - ConCacao Proyecto de Trazabilidad.',
      link: 'https://www.fedecacao.com.co/documentos-tecnicos',
    },
    {
      referencia:
        'Mundo Cacao. (2020). Norma técnica colombiana del ICNTEC. NTC 1252. Compras y fomento agrícola.',
    },
    {
      referencia:
        'PROAmazonía. (2021). Manual Proceso de centro de acopio de cacao.',
      link:
        'https://www.proamazonia.org/wp-content/uploads/2021/05/Manual_cacao_2021.pdf',
    },
    {
      referencia: 'Unipaz. (2021). Etapas del procesamiento de cacao.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
