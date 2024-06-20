export default {
  global: {
    componenteFormativo:
      'Formulación de proyectos agroecológicos bajo el enfoque de marco lógico',
    descripcionCurso:
      'El enfoque metodológico del marco lógico es una herramienta potente, en el que se realizan una serie  de acciones para conocer los diferentes factores que inciden en una problemática y vislumbrar la posible solución.  Facilita el desarrollo de procesos de participación para generar estrategias y prácticas en la consecución de los  objetivos productivos y comerciales del plan de manejo agroecológico',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Generalidades del enfoque de marco lógico',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Etapa de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Análisis del contexto en torno a la problemática de la ruralidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de información secundaria',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis de actores involucrados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Diagnóstico de la situación problémica',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Identificación de problemas a partir de información primaria',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Priorización de problemas a través de la herramienta “Matriz de Vester”',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              '2.7 Análisis causa-efecto a través de la "metodología de árboles"',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Etapa de planificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de alternativas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Matriz de marco lógico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indicadores y medios de verificación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Análisis de riesgos y establecimiento de los supuestos del proyecto',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Plan operativo y presupuesto general',
            hash: '5',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Generalidades del enfoque de marco lógico',
      referencia:
        'Tecnnova SENA. (s.f.). Formulación de proyectos bajo la metodología Marco Lógico.',
      tipo: 'Libro',
      link:
        'https://ecored-sena.github.io/TECNICO_AGROPECUARIO_CF2/public/media/documentos/CEPAL-2011.pdf',
    },
    {
      tema: 'Análisis del contexto en torno a la problemática de la ruralidad',
      referencia:
        'Friedrich Eberto Stiftung (FES). (s.f.). Esto no da para más hacia la transformación social-ecológica en  América Latina.México.',
      tipo: 'Libro',
      link: 'https://library.fes.de/pdf-files/bueros/mexiko/16321.pdf',
    },
    {
      tema: 'Análisis del contexto en torno a la problemática de la ruralidad',
      referencia:
        'Foro Nacional Ambiental. (6 de mayo de 2021). Cátedra TSE Sesión 9. Transformación agricultura y ganadería  para enfrentar tragedia socio- ambiental.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1uMo9sJlXYI&t=3s&ab_channel=ForoNacionalAmbiental',
    },
    {
      tema: 'Análisis del contexto en torno a la problemática de la ruralidad',
      referencia:
        'Foro Nacional Ambiental. (12 de mayo de 2021). Cátedra TSE Sesión 10. ¿Cómo superar la insostenibilidad de  la ganadería y agricultura en Colombia ? ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DvjpEDrTISU&ab_channel=ForoNacionalAmbiental',
    },
    {
      tema:
        'Priorización de problemas a través de la herramienta “matriz vester”',
      referencia:
        'Castro Maldonado, J. J. (7 de julio de 2020). Matriz Vester. Obtenido de  https://www.youtube.com/watch?v=IPV3xyXb7x8',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IPV3xyXb7x8',
    },
    {
      tema: 'Análisis causa-efecto a través de la “metodología de árboles”',
      referencia:
        'Universidad de Antioquia. (29 de julio de 2021). Árbol de problemas. Obtenido de  https://www.youtube.com/watch?v=SwxlOk7PcQU&ab_channel=Udearroba',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SwxlOk7PcQU&ab_channel=Udearroba',
    },
  ],
  glosario: [
    {
      termino: 'Formulación',
      significado:
        'Fase de la preinversión en la cual se identifican las situaciones actual y esperada y las alternativas de  solución para la problemática que se está analizando, que luego pasarán a preparación, para iniciar el levantamiento de  la información relacionada con los insumos, actividades, costos, tiempos y demás elementos necesarios para obtener el o  los productos que las contienen(Ortegón et.al, 2005).',
    },
    {
      termino: 'Identificación',
      significado:
        'Fase de la formulación del proyecto en la cual se identifica la situación actual (árbol del problema,  análisis de participaciones, población y zona afectada), la situación esperada(árbol de objetivos, población y zona  objetivo) y las alternativas de solución a través del análisis de objetivos(Ortegón et al., 2005).',
    },
    {
      termino: 'Impacto',
      significado:
        'Se refiere al cambio logrado en las condiciones económicas o sociales de la población como resultado de  los productos y resultados obtenidos con el proyecto o programa.Se trata del nivel más elevado de resultados o de la  finalidad última de los proyectos, cuando se genera la totalidad de los beneficios previstos en su operación(Ortegón et  al., 2005).',
    },
    {
      termino: 'Planeación',
      significado:
        'En términos públicos, es la orientación adecuada de los recursos procurando el cumplimiento de objetivos  de desarrollo económico y social(Ortegón et al., 2005).',
    },
    {
      termino: 'Problema',
      significado:
        'Se define como una situación no deseada, es decir, una situación negativa que padece la comunidad en un  momento determinado.Un problema no es la ausencia de su solución, sino un estado existente negativo. (Ortegón et al., 2005).',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldunate, E., Córdoba, J. (2015). Formulación de programas con la metodología de marco lógico. Naciones  Unidas, Santiago de Chile.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5607/S057518_es.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2016). Documento Guía del módulo de capacitación virtual en Teoría de  Proyectos.Dirección de Inversiones y Finanzas Públicas(DIFP) Subdirección de Proyectos e Información para la Inversión  Pública.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Inversiones%20y%20finanzas%20pblicas/MGA_WEB/Documento%20Base%20Modulo%20Teoria%20de%20Proyectos.pdf',
    },
    {
      referencia:
        'Expósito, M. (2003). Diagnóstico Rural Participativo, Una guía práctica. Centro Cultural Poveda.',
      link:
        'http://biblioteca.clacso.edu.ar/Republica_Dominicana/ccp/20120731033315/diagrural.pdf',
    },
    {
      referencia:
        'Geilfus, F. (2002). 80 herramientas para el desarrollo participativo. Diagnóstico, planificación, monitoreo  y evaluación.Instituto Interamericano de Cooperación para la Agricultura(IICA)',
      link:
        'http://ejoventut.gencat.cat/permalink/aac2bb0c-2a0c-11e4-bcfe-005056924a59',
    },
    {
      referencia:
        'Instituto de Formación Permanente INSFOP. (2008). Diagnóstico rural participativo y planificación  comunitaria.FAO - INSFOP - AECID',
      link: 'http://www.fao.org/3/at795s/at795s.pdf',
    },
    {
      referencia:
        'Ministerio de desarrollo agropecuario de Panamá. (2017). Guía para la formulación de proyectos de inversión  del sector agropecuario bajo el enfoque de planificación estratégica y gestión por resultados.MIDA - FAO',
      link: 'http://www.fao.org/3/i8097es/I8097ES.pdf',
    },
    {
      referencia:
        'Ortegón, E., Pacheco, J.F. y Prieto, A. (2005). Metodología del marco lógico para la planificación, el  seguimiento y la evaluación de proyectos y programas.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5607/S057518_es.pdf',
    },
    {
      referencia:
        'Pacto Mundial Red Española. (2019). Empresas y derechos humanos: acciones y casos de éxito en el marco de  la Agenda 2030. Madrid: Red Española de Pacto Mundial.Recuperado el 5 de marzo de 2022.',
      link: '',
    },
    {
      referencia:
        'Practical Concepts Incorporated (PCI) (1979). The logical framework, a manager’s guide to a scientific  approach to design & evaluation.PCI',
      link:
        'https://www.usaid.gov/sites/default/files/documents/1865/The-Logical-Framework-A-Managers-Guide.pdf',
    },
    {
      referencia:
        'SENA. (2020). Cartilla resumen marco lógico para formulación de proyectos. SENA.',
      link:
        'https://www.tecnnova.org/wp-content/uploads/2017/03/Cartilla-Resumen-Marco-L%C3%B3gico-para-Formulaci%C3%B3n-de-Proyectos-CEPAL-2011.pdf',
    },
    {
      referencia:
        'Silva, I. y Sandoval, C. (2012). Metodología para la elaboración de estrategias de desarrollo local.  ILPES.',
      link:
        'https://www.cepal.org/es/publicaciones/5518-metodologia-la-elaboracion-estrategias-desarrollo-local',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },

        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Pérez Meriño',
          cargo: 'Desarrollo Fullstack ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Eulices Orduz Amézquita',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a  href = "https://www.shutterstock.com/" target = "_blank" > www.shutterstock.com</a >, <a href="https://unsplash.com/"    target="_blank">unsplash.com </a>y < a href = "https://www.flaticon.com/" target = "_blank" > www.flaticon.com</a > ',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/"  target = "_blank" > ver licencia</a > ',
  },
}
