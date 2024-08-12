<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Etapa de planificación

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
        )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La etapa de análisis debe brindar todos <strong>los insumos necesarios y de la calidad adecuada</strong>, para que la etapa de planificación arroje los lineamientos que en gran medida, aportarán a la formulación más acertada del proyecto y por tanto al <strong>éxito de la intervención.</strong>

    .row.my-3.align-items-center(data-aos="fade-right")
      .col-lg-8
        .row.my-3.align-items-center 
          .col-lg-6.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(data-aos="fade-up-right",src="@/assets/curso/temas/tema3/img2.svg", alt="", width= "100px", height="100px")
              .col(style="z-index:1")
                .number 01
                p.m-0 Análisis de alternativas.
          .col-lg-6.crd.crd--avatarHorizontal-left-bgr3.py-3.mb-3
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(data-aos="fade-up-right",src="@/assets/curso/temas/tema3/img3.svg", alt="", width= "100px", height="100px")
              .col(style="z-index:1")
                .number 02
                p.m-0 Diseño de los indicadores y medios de verificación.
        .row.my-3.align-items-center 
          .col-lg-6.crd.crd--avatarHorizontal-left-bgr5.py-3.mb-3
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(data-aos="fade-up-right",src="@/assets/curso/temas/tema3/img4.svg", alt="", width= "100px", height="100px")
              .col(style="z-index:1")
                .number 03
                p.m-0 Establecimiento de los supuestos.
          .col-lg-6.crd.crd--avatarHorizontal-left-bgr4.py-3.mb-3
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure
                  img(data-aos="fade-up-right",src="@/assets/curso/temas/tema3/img5.svg", alt="", width= "100px", height="100px")
              .col(style="z-index:1")
                .number 04
                p.m-0 Construcción de la matriz del marco lógico.
      .col-lg-4
        p.p-4(style="background: #DEE4F0; border-radius: 10px;") Además, es muy recomendable, así como en la etapa de análisis, incluir de ser necesario <strong>métodos que faciliten el tránsito entre herramientas</strong>, como puede ser el <strong>análisis de riesgos, la redacción de la estructura analítica</strong> (que se obvia aquí por fines prácticos), <strong>las herramientas de validación de indicadores, medios de verificación y supuestos del proyecto.</strong>
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.1 Análisis de alternativas 
    
    .row.my-3.align-items-center(data-aos="fade-right") 
      .col-lg-7
        div.p-3(style="background: #FFEDE7")
          .row.my-3.align-items-center 
            .col-lg-2
              figure
                img(src="@/assets/curso/temas/tema3/img6.svg", alt="")
            .col-lg-10
              p Las alternativas de solución del problema central pueden ser contempladas desde el nivel de incidencia de los distintos medios (objetivos específicos y más adelante componentes del proyecto) pues todos no tendrán el mismo impacto y dependiendo de este análisis se determinará si todos son necesarios o si algunos serán suficientes para generar el resultado deseado.
        p.m-3 Esto significa que existen varias alternativas de solución que en la gráfica del árbol de objetivos pueden verse como <strong>los caminos que desde las raíces nos llevan a las copas del árbol</strong>; por tanto, <strong>a mayor complejidad del árbol, mayor número de alternativas.</strong> Aquí intervienen las condiciones preestablecidas para la realización del proyecto (tiempos, recursos, alcance, etc.) los resultados del análisis del entorno y de información secundaria (incluso el marco legal pertinente) de la información del diagnóstico, análisis de involucrados y de problemas, y de toda la información recolectada anteriormente. 

      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/img64.png", alt="")

    .row.my-3(data-aos="fade-up")
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-acento-botones.p-4(style='background: #E1EDB5')
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2.col-md-12
              figure
                img(src="@/assets/curso/temas/tema2/img65.svg", alt="", width="150px", height="150px")
            .col-lg-8
              p.text-bold.m-0 El primer paso
              | El planteamiento de las acciones generadoras para <strong>las condiciones que denominamos actividades</strong> (tercer nivel) <strong>de los productos o resultados</strong> (segundo nivel) <strong>y de los medios</strong> (primer nivel, correspondientes a los objetivos específicos y más adelante a los componentes del proyecto).
        .col-md.tarjeta.color-acento-botones.p-4(style='background: #FFF8DA')
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-10.col-md-12
              p.text-bold.m-0 El segundo paso
              | La estructuración de las alternativas. Una alternativa resulta de la <strong>conjunción de varias actividades</strong> El número de alternativas resultantes depende de <strong>qué tan compatibles son los medios</strong> (objetivos específicos) <strong>productos y actividades entre sí.</strong>
            .col-lg-2
              figure
                img(src="@/assets/curso/temas/tema2/img65.svg", alt="", width="150px", height="150px")
    .row.my-3(data-aos="fade-left")
      .col-lg-12
        p Puede suceder que las actividades sean perfectamente compatibles, a esto se les denomina <strong>complementarias o conjuntivas</strong>; pero también puede ser que algunas no lo sean, en este caso formarían otra alternativa y a estas actividades se les denomina excluyentes o disyuntivas. Siguiendo con el ejemplo de referencia, las alternativas se encuentran expresadas como acciones de intervención agrupadas de acuerdo a la compatibilidad entre ellas y por cada uno de los objetivos. Las letras <strong>C</strong> y <strong>E</strong> a la derecha, significan complementarias y excluyentes:
    
    .row.my-3(style="background: #F7FAEA")(data-aos="fade-up")
      .col-lg-10.m-auto.my-3
        p.mt-5.text-center <strong>Figura 11.</strong> Ejemplo de propuesta de acción.
        p.text-center <strong>Aumentar el aprovechamiento de los residuos sólidos domiciliarios <br> de la zona urbana del municipio XXX, del departamento de XXX.</strong>
        .row.my-3.justify-items-center.d-none.d-lg-flex
          .col-lg-4
            p.text-center <strong>Objetivos específicos</strong>
          .col-lg-5
            p.text-center <strong>Acciones de intervención posibles</strong>
          .col-lg-3
            p.text-center <strong>Tipo</strong>
        .row.justify-content-center
          .col-lg-3.p-5.align-content-center(style="background: #FFD947")
            p.text-center.d-block.d-lg-none <strong>Objetivos específicos</strong>
            p.text-center <strong>1.</strong> Mejorar las prácticas de separación de materiales
          .col-lg-8.mx-3
            .row.justify-content-center.p-4.mb-3(style="background: #FFF8DA")
              .col-lg-11.col-md-6
                  p.text-center.d-block.d-lg-none <strong>Acciones de intervención posibles</strong>
                  strong Separación en la fuente:
                  p.mb-0 1. Campañas de sensibilización (puerta a puerta, PRAEs, PROCEDA).
                  p 2. Reglamentación e implementación de incentivos y sanciones.
              .col-lg-1.col-md-6.align-content-center
                  p.text-center.d-block.d-lg-none <strong>Tipo</strong>
                  strong.py-3.text-center C
            .row.justify-content-center.p-4(style="background: #FFF8DA")
              .col-lg-11.col-md-6
                  p.text-center.d-block.d-lg-none <strong>Acciones de intervención posibles</strong>
                  strong Separación recolección:
                  p.mb-0 3. Adecuación de rutas según días definidos por tipo de material.
                  p.mb-0 4. Implementación de rutas selectivas utilizando vehículos recolectores con compartimientos mixtos.
                  p.mb-0 5. Recolección realizada por recuperadores en vehículos de tracción animal.
              .col-lg-1.col-md-6.align-content-center
                p.text-center.d-block.d-lg-none <strong>Tipo</strong>
                strong.py-3.text-center E

        .row.mt-3.justify-content-center
          .col-lg-3.align-content-center.justify-content-center.p-5(style="background: #ADCE32")
            p.text-center.d-block.d-lg-none <strong>Objetivos específicos</strong>
            p.text-center <strong>2.</strong> Implementar espacios eficientes para la valorización de residuos sólidos
          .col-lg-8.mx-3
            .row.justify-content-center.p-4(style="background: #FFF8DA; min-height: 210px")
              .col-lg-11.col-md-6
                  p.text-center.d-block.d-lg-none <strong>Acciones de intervención posibles</strong>
                  strong Infraestructura:
                  p.mb-0 6. Construcción y dotación de estación de aprovechamiento (orgánicos e inorgánicos).
                  p 7. Construcción de planta incineradora (de residuos orgánicos) para generación de energía.
              .col-lg-1.col-md-6.align-content-center
                p.text-center.d-block.d-lg-none <strong>Tipo</strong>
                strong.py-3.text-center E
      figure
        img(src="@/assets/curso/temas/tema3/img25.svg", alt="", width="330px", height="250px")

        p.text-center.mt-4 Tomado de la guía de proyectos del DNP (2016).
    
    p Como tercer paso los autores de la guía del ejemplo del DNP recomiendan realizar un filtro de las actividades, determinando su <strong>viabilidad técnica, financiera o legal.</strong> Luego de seleccionadas las actividades y teniendo en cuenta su compatibilidad se llega a las siguientes conclusiones:

    .row.my-3.align-items-center
      .col-lg-12.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3(data-aos="fade-right")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img67.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 Las actividades 1 y 2 se pueden fusionar.
      .col-lg-12.crd.crd--avatarHorizontal-left-bgr1.py-3.mb-3(data-aos="fade-right")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img68.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0  Las actividades 3 y 5 no son viables financiera y legalmente, en ese orden.
      .col-lg-12.crd.crd--avatarHorizontal-left-bgr5.py-3.mb-3(data-aos="fade-right")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img69.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0  Que se generarían dos alternativas posibles: 
            .row.my-3
              .col-lg-5.px-3
                .p-4.my-3(style="background: white; border-radius: 10px;")
                  p.m-0.text-bold Alternativa 1
                  span Campañas e incentivos para clasificación, implementación de rutas selectivas y construcción y dotación de estación de aprovechamiento para residuos orgánicos e inorgánicos.
              .col-lg-5.px-3
                .p-4.my-3(style="background: white; border-radius: 10px")
                  p.m-0.text-bold Alternativa 2
                  span Campañas e incentivos para clasificación, implementación de rutas selectivas y construcción de planta incineradora de residuos orgánicos para generación de energía.

      .col-lg-12.crd.crd--avatarHorizontal-left-bgr4.py-3.mb-3(data-aos="fade-right")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img70.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 Que asumiendo un resultado negativo de un estudio de prefactibilidad para la planta incineradora y después de configurar las posibles iteraciones (combinaciones posibles) de las actividades viables, se llega a los dos objetivos ya corregidos:
            .row.my-3
              .col-lg-5.px-3.my-3
                .p-4.h-100(style="background: white; border-radius: 10px")
                  p.m-0.text-bold Objetivo 1
                  span Campañas, incentivos e implementación de rutas selectivas.
              .col-lg-5.px-3.my-3
                .p-4(style="background: white; border-radius: 10px")
                  p.m-0.text-bold Objetivo 2
                  span Construcción y dotación de estación de aprovechamiento para residuos orgánicos e inorgánicos con altas tasas de biodegradación.
      .col-lg-12.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3(data-aos="fade-right")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema2/img71.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 Que por todo lo anterior, la alternativa (objetivo general) queda así:
            .row.my-3
              .col-lg-10.px-3
                .p-4(style="background: white; border-radius: 10px")
                  p.m-0.text-bold Alternativa
                  span Implementación del proceso de aprovechamiento de residuos sólidos domiciliarios mediante separación de materiales y construcción de una estación de vaporización.
    
    .row.align-items-center.grad1.p-3.my-5(data-aos="fade-up")
      .col-lg-6
        .text-light.mb-0 Como aclaración, aunque la situación ideal parece que conlleva la atención a todas y cada una de las causas identificadas, esto no es estrictamente necesario (DNP, 2016). También es importante tener en cuenta la forma correcta de redactar objetivos siguiendo la regla general:
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img72.svg', alt='Imagen decorativa' width="64px" height="64px")
    
    .row.align-items-center.p-3.my-5(data-aos='flip-left')
      .mt-4.px-5(style="background:#BDD75B; border-radius: 20px")
        .col-lg-12.m-auto(style='position:relative;top:-50px')
          figure
            img(src='@/assets/curso/temas/tema2/img73.svg', width='100px',height='100px', alt='Imagen decorativa')
        p.position-relative(style="top:-30px") No siempre la selección de alternativas resulta de la manera que se ha descrito, algunas veces es más difícil identificar entre las diferentes opciones, por lo que se recomienda en este caso, la construcción de <strong>una matriz que ayude en esta evaluación</strong>; aunque no hay una forma estándar para esta y podemos encontrar varios modelos que se pueden adaptar a las necesidades del análisis buscando siempre <strong>la alternativa óptima, una selección objetiva y desde criterios múltiples.</strong>

    p.text-bold Un ejemplo de matriz de evaluación o selección, producto de la guía para la formulación de proyectos de la FAO en conjunto con el Ministerio de Desarrollo Agropecuario de Panamá en 2017, es el siguiente:

    p.my-3.text-center <strong>Tabla 8.</strong> Matriz de selección de alternativa óptima. 
    .tabla-b.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr(style="background: #FFA686")
            th(rowspan="2") Criterios <br> (que debe definir el equipo formulador)
            th(rowspan="2") Peso específico asignado al criterio (1-5)
            th(colspan="2") Alternativa 1 <br> Incrementada la productividad y altos estándares de calidad.
            th(colspan="2") Alternativa 2 <br> Ampliado el acceso al mercado.
            th(colspan="2") Alternativa 3 <br> Sistemas productivos menos vulnerables al cambio y variabilidad climáticas.
          tr(style="background: #FFCCB9")
            th Calificación 1-5
            th Puntaje obtenido
            th Calificación 1-5
            th Puntaje obtenido
            th Calificación 1-5
            th Puntaje obtenido
        tbody
          tr
            td Menor tiempo
            td 3
            td 3
            td 9
            td 1
            td 3
            td 2
            td 6
          tr
            td Menor costo
            td 2
            td 3
            td 6
            td 3
            td 6
            td 1
            td 2
          tr
            td Concentración sobre beneficios
            td 5
            td 5
            td 25
            td 4
            td 20
            td 3
            td 15
          tr
            td Impacto de género
            td 4
            td 1
            td 4
            td 5
            td 20
            td 5
            td 20
          tr
            td Impacto ambiental
            td 4
            td 5
            td 20
            td 5
            td 20
            td 1
            td 4
          tr
            td Riesgos socioeconómicos
            td 3
            td 2
            td 6
            td 5
            td 15
            td 3
            td 9
          tr
            td Viabilidad
            td 5
            td 3
            td 15
            td 4
            td 20
            td 3
            td 15
          tr(style="background: #FFCCB9")
            td(colspan='2') Total
            td(colspan='2') 85
            td(colspan='2') 92
            td(colspan='2') 71
    figcaption Tomado de la guía para la formulación de proyectos de inversión del sector agropecuario de la FAO, 2017.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.2 Matriz de marco lógico
    
    .row.align-items-center.p-3.my-5(data-aos="fade-right")
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img74.png", alt="")
      .col-lg-8
        .cajon.color-secundario.p-4(data-aos="slide-down",style="background: #F3F8E0")
          p.mt-0 En este punto ya se tienen todos los insumos para el inicio de la construcción de la matriz de marco lógico (MML). Según la FAO en 2017, el marco lógico es una matriz de doble entrada que posee dos momentos: la relación de causa-efecto, que ayuda a organizar la información de manera lógica y secuencial en sentido vertical y la estructura cuatro por cuatro que completa el esquema agregándole el sentido horizontal.
    
    .row.align-items-center.p-3.my-5(data-aos="fade-up")
      .col-lg-10.m-auto
        p.text-center <strong>Tabla 9.</strong> Relación entre el árbol de problemas, árbol de objetivos y la MML. 
        .tabla-b.color-acento-contenido
          table
            thead
              tr(style="background: #FFA686")
                th Árbol de problemas
                th Árbol de objetivos
                th Matriz de marco lógico
            tbody
              tr
                td Problema central
                td Propósito
                td Objetivo general o "fin" del proyecto
              tr
                td Causas nivel 1
                td Medios
                td Objetivos específicos
              tr
                td Causas nivel 2
                td Productos
                td Componentes
              tr
                td Causas nivel 3
                td Actividades
                td Actividades
        figcaption Tomado de la guía para la formulación de proyectos de inversión del sector agropecuario de la FAO, 2017.

    .row.p-3.my-5(data-aos="fade-right")
      .col-lg-10.m-auto
        .p-3(style="background: #EFF5D6; border-radius: 20px")
          .row.my-3.align-items-center
            .col-lg-2
              figure 
                img(src="@/assets/curso/temas/tema2/img75.svg", alt="", width="150px", height="150px")
            .col-lg-10
              p Cabe recordar que para pasar del árbol de problemas al árbol de objetivos se cambió de <strong>un estado negativo del problema a una situación positiva como propósito</strong> para luego plantearse como el fin del proyecto o la acción que conduce a esa situación deseada del árbol de objetivos. De acuerdo con Ortegón et.al (2005):
    .row.align-items-center
      .col-lg-10.m-auto
        hr(style="background: #FFA686;height: 3px; border: none;")

        .bloque-texto-f.color-secundario.pt-4.px-5(data-aos="fade-up")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            p.bloque-texto-f__texto En la definición de los niveles de objetivos en la MML se debe tener especial cuidado al pasar de la especificación de los componentes al propósito del proyecto. La definición del propósito del proyecto se debe hacer en términos hipotéticos, es algo que debe ocurrir, es un resultado esperado. De acuerdo al enfoque de Marco lógico el propósito es la hipótesis central del proyecto. De este modo, el propósito debe entenderse como un resultado no controlable por el ejecutor. Es, en definitiva, lo que debería ocurrir como resultado directo de utilizar los Componentes
            h3.bloque-texto-f__texto   (p.81)
            i.fas.fa-quote-right
    h5.my-5.text-center Para estructurar la MML, según la guía de formulación de proyectos de inversión del sector agropecuario de la FAO en 2017, se pueden seguir los siguientes pasos:
    
    .row.my-4.justify-content-center(data-aos="fade-right")
      div.col-lg-5.p-4.mx-3(style="background: #FFF2CB; border-radius: 10px")
        p <strong>Primer momento</strong> “La relación causa-efecto entre las diferentes partes de la primera columna (esquema de la MML) corresponde a los cuatro niveles (o filas) de la estructura, de abajo hacia arriba: 1) actividades (o insumos), 2) componentes (o resultados), 3) propósito y 4) meta o fin, estando estos dos últimos definidos por la jerarquía de objetivos del proyecto, o sea, objetivo central y objetivos secundarios” (p.16).
      div.col-lg-5.p-4(style="background: #FFF2CB; border-radius: 10px")
        p <strong>Segundo momento</strong> “El formato cuatro por cuatro, que permite a los equipos de proyecto resaltar gráficamente los objetivos, los resultados y las actividades que se espera generar dentro del ciclo de vida del proyecto. Las 16 celdas que conforman la matriz del marco lógico se encuentran dinámicamente relacionadas por una lógica vertical y horizontal o de causa-efecto; por lo tanto, los cambios que se efectúen en una celda normalmente ocasionarán cambios en el resto de las celdas” (p.17).

    p.text-center <strong>Tabla 10.</strong> Esquema de la matriz de marco lógico. 
    .tabla-b.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr(style="background: #FFA686")
            th Objetivos
            th Indicadores
            th Medios de verificación
            th Supuestos
        tbody
          tr
            td Fin (objetivo general)
            td
            td
            td
          tr  
            td Propósito (objetivo específico)
            td
            td
            td
          tr  
            td Componentes (resultados)
            td
            td
            td
          tr  
            td Actividades (acciones)
            td
            td
            td
    figcaption Tomado de la guía para la formulación de proyectos de inversión del sector agropecuario de la FAO, 2017.
    .row.mt-5.mb-4.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0(data-aos="fade-left") Resumen narrativo del marco lógico
    
    p.p-4(data-aos="fade-right") La primera columna de la MML es <strong>la síntesis del proyecto</strong>, empezando por las actividades, los productos que se entregarán y los resultados a corto, mediano y largo plazo <strong>(Ortegón et.al, 2005)</strong> De ahí su importancia y la forma de realizar su lectura, que es de abajo hacia arriba. Las actividades provenientes del nivel tres no se encuentran normalmente incluidas en la MML, pero resulta muy útil considerarlas para <strong>alimentar la planeación operativa</strong> y los indicadores correspondientes serán objeto de este análisis posterior. El resumen narrativo corresponde a la primera columna de la matriz.


    .row.my-3(data-aos="fade-up")
      p.text-center <strong>Figura 12.</strong> Resumen narrativo del proyecto.
      .tarjeta--container.row.mb-2
        .col-md.tarjeta.color-acento-botones.p-4.my-3(style='background: #E1EDB5')
          p.text-bold.m-0 Fin - Objetivo general
          | Aporte del proyecto en la solución, problema o satisfacción de una necesidad en el mediano o largo plazo.
        .col-md.tarjeta.color-acento-botones.p-4.my-3(style='background: #FFF8DA')
          p.text-bold.m-0 Propósito - Objetivo específico
          | Resultado único esperado al concluir el proyecto.
        .col-md.tarjeta.color-acento-botones.p-4.my-3(style='background: #E1EDB5')
          p.text-bold.m-0 Propósito - Objetivo específico
          | Productos y servicios que genera el proyecto y que se expresan como una realidad mejorada.
        .col-md.tarjeta.color-acento-botones.p-4.my-3(style='background: #FFF8DA')
          p.text-bold.m-0 Actividades
          | Grupo de tareas principales requeridas para la producción de cada resultado o componente.
      p.text-center Tomado de la guía para la formulación de proyectos de inversión del sector agropecuario de la FAO, 2017.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.3 Indicadores y medios de verificación

    .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
      .col-lg-4
        figure 
          img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')
      .col.lg-8
        p Son variables cualitativas o cuantitativas que concretan lo definido en el resumen narrativo del proyecto en cada uno de los niveles y dan cuenta de <strong>las metas a las que hay que llegar</strong> para culminar con éxito, por lo que se convierten en la brújula con la cual se orientan las actividades de gestión, el seguimiento y la evaluación.
        p También dan medida del desempeño y alertan sobre situaciones atípicas. Si los indicadores se encuentran bien formulados, aseguran una <strong>buena gestión del proyecto</strong> y aportan los elementos necesarios para la toma correcta de decisiones gerenciales que seguramente serán necesarias en el transcurso de la ejecución.
        p Un resultado puede ser medido por varios indicadores, pero el principio de eficiencia nos orienta hacia la construcción del mínimo necesario para la <strong>conclusión del logro de los objetivos</strong> (Ortegón et.al 2005).

    .row.align-items-center.p-3.my-5(data-aos="fade-up")
      .col-lg-12
        .cajon.color-acento-botones.p-4(data-aos="slide-down",style="background: #FFD94715")
          p.mt-0 Los indicadores deben poseer ciertas características para que logren <strong>eficacia.</strong> Para empezar, según la guía para la formulación de proyectos de inversión del sector agropecuario (FAO, 2017) deben ser independientes en cada nivel para evitar la duplicidad de datos. Sólo se formulan para el <strong>cumplimiento de objetivos y resultados</strong>; a las actividades se les asigna la ejecución de un presupuesto a manera de indicador. Según Ortegón et.al (2005) los indicadores “inteligentes” poseen cinco características imprescindibles: son específicos, medibles, realizables, pertinentes y deben estar enmarcados en el tiempo. Existen diversos tipos de indicadores pero una clasificación útil es la hecha en la guía de la <strong>FAO</strong> varias veces citada.
    
    .row.align-items-center.p-3.my-5
      .col-lg-10.m-auto
        h4.text-center Los indicadores se pueden clasificar en tres grupos: 

        LineaTiempoD.color-acento-contenido.my-4
          .row(numero="1" titulo="Indicadores de fin y propósito")
            p Son los que miden el cambio atribuible al proyecto y los que permiten tomar decisiones sobre la necesidad de componentes adicionales. También se denominan indicadores de objetivos. Los indicadores de fin o propósito se construyen sobre la base de datos existentes. Un ejemplo de indicador de fin y de propósito sería reducir a menos de 1.000 los coliformes totales por cada 100 ml de agua en una playa específica y para un determinado año. 
          .row(numero="2" titulo="Indicadores de componentes")
            p Son descripciones breves de las obras, servicios, estudios y capacitaciones específicas que ofrece el responsable del proyecto, especificando cantidad, calidad y tiempo. Por ejemplo para un proyecto de educación habría de señalar como indicador 10 escuelas técnicas, ubicadas en diferentes ciudades, cada una con capacidad para 1.000 alumnos por año y con el equipamiento especificado por las normas correspondientes. 
          .row(numero="3" titulo="Indicadores de actividades")
            p Son los que describen la actividad que se realiza para lograr el componente y su presupuesto asignado. Varían de acuerdo con el elemento del componente que se desea medir, por lo que son diferentes para cada tipo de proyecto. Los indicadores también pueden clasificarse en directos e indirectos. 
            p.px-4 a. Indicadores directos: son los que comprenden las variables directamente relacionadas al objetivo a medir. Por ejemplo, si el objetivo es reducir la mortalidad, un indicador apropiado podría ser la tasa de mortalidad infantil en tanto por mil. 
            p.px-4 b. Indicadores indirectos: también llamados indicadores proxy, son formas aproximadas de medir determinados objetivos. En ellos la variable utilizada no tiene una relación directa con el objetivo que se busca medir” (FAO, 2017).
            .row.align-items-center
      .col-lg-10.m-auto
        h5.text-center Así mismo esta valiosa guía nos orienta acerca del procedimiento de selección de indicadores: 
      p Un aspecto a tener en cuenta sobre los indicadores es su <strong>número reducido.</strong> Esto hace necesario definir criterios para decidir si un indicador es adecuado o no y <strong>jerarquizar un conjunto de indicadores.</strong> Para ello se utiliza el esquema desarrollado por la <strong>Oficina de Evaluación del Programa de Desarrollo de Naciones Unidas</strong> (UNDP, por sus siglas en inglés) que consiste en un cuadro en el cual, primero, se transcribe la primera columna de la matriz del marco lógico a la primera columna del cuadro (el resumen narrativo de objetivos) después se transcriben de la misma matriz los <strong>indicadores por objetivo</strong> y por último se definen los <strong>criterios aplicables a los indicadores</strong>, como:
    .row.p-3.my-5
      .col-lg-10.m-auto
        .row.justify-content-center
          .col.mb-5
            .tarjeta--boton.color-primario.p-2.h-100(data-aos='flip-left', style="min-height:230px")
              .col-lg-7.m-auto(style='position:relative;top:-50px')
                figure
                  img(src='@/assets/curso/temas/tema3/img11.svg', width='75px',height='75px', alt='Imagen decorativa')
              .row.justify-content-center.mb-3
                  p El sentido del indicador es claro.
          .col.mb-5
            .tarjeta--boton.color-primario.p-2.h-100(data-aos='flip-left', style="min-height:230px")
              .col-lg-7.m-auto(style='position:relative;top:-50px')
                figure
                  img(src='@/assets/curso/temas/tema3/img12.svg', width='75px',height='75px', alt='Imagen decorativa')
              .row.justify-content-center.mb-3
                  p Existe información disponible o se puede recolectar fácilmente.
          .col.mb-5
            .tarjeta--boton.color-primario.p-2.h-100(data-aos='flip-left', style="min-height:230px")
              .col-lg-7.m-auto(style='position:relative;top:-50px')
                figure
                  img(src='@/assets/curso/temas/tema3/img13.svg', width='75px',height='75px', alt='Imagen decorativa')
              .row.justify-content-center.mb-3
                  p El indicador es tangible y observable.
          .col.mb-5
            .tarjeta--boton.color-primario.p-2.h-100(data-aos='flip-left', style="min-height:230px")
              .col-lg-7.m-auto(style='position:relative;top:-50px')
                figure
                  img(src='@/assets/curso/temas/tema3/img14.svg', width='75px',height='75px', alt='Imagen decorativa')
              .row.justify-content-center.mb-3
                  p La recolección de datos está al alcance de la dirección del proyecto y su análisis no requiere de expertos.
          .col.mb-5
            .tarjeta--boton.color-primario.p-2.h-100(data-aos='flip-left', style="min-height:230px")
              .col-lg-7.m-auto(style='position:relative;top:-50px')
                figure
                  img(src='@/assets/curso/temas/tema3/img15.svg', width='75px',height='75px', alt='Imagen decorativa')
              .row.justify-content-center.mb-3
                  p El indicador es suficientemente representativo para el conjunto de resultados esperados.
    p(data-aos="fade-right") Un criterio adicional a contemplar es que los indicadores sean <strong>independientes</strong>, es decir, que no exista una relación de causa efecto entre el indicador y el objetivo que se evalúa. Los indicadores seleccionados se clasifican en <strong>la tercera columna del cuadro</strong>, asignando un valor 1 a cada uno de los criterios que se cumplan. 

    p(data-aos="fade-right") Así, un indicador que reúna todos los requisitos mencionados anteriormente alcanzaría <strong>cinco puntos</strong> en esta escala de clasificación. Finalmente, en la última columna se seleccionan los indicadores que han obtenido <strong>mayor puntuación</strong>, que serán los que se incluirán en la matriz del marco lógico.

    h4.text-center(data-aos="fade-right") Otra propuesta de Ortegón et.al (2005) para los criterios de selección de indicadores “correctamente especificados” es hecha a partir de los siguientes criterios:

    .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
      .col-lg-4
        figure 
          img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')
      .col.lg-8
        ul.lista-ul.p-4(style="background: #FFF6F3; border-radius: 15px")
          li 
            i.lista-ul__vineta 
            | Los indicadores de propósito no son un resumen de los componentes, sino <strong>una medida del resultado de tener los componentes en operación.</strong>
          li 
            i.lista-ul__vineta 
            | Los indicadores de propósito <strong>miden lo que es importante.</strong>
          li 
            i.lista-ul__vineta 
            | Todos los indicadores están especificados en términos de <strong>cantidad, calidad y tiempo.</strong>
          li 
            i.lista-ul__vineta 
            | Los indicadores para cada nivel de objetivo son diferentes a los indicadores de otros niveles.
          li 
            i.lista-ul__vineta 
            | El presupuesto es <strong>suficiente</strong> para llevar a cabo las actividades identificadas.
        p Los criterios se pueden construir a partir de la <strong>selección y suma de varios de los anteriores</strong>, según se considere pertinente para la evaluación objetiva de los objetivos del proyecto.
    
    p.text-center <strong>Tabla 11.</strong> Herramienta de selección de indicadores.
    .tabla-b.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr(style='background-color: #FF8C69')
            th Nivel
            th Resumen narrativo
            th Indicadores
            th Criterios de valoración de indicadores
            th Puntaje total
            th Selección
        tbody
          tr
            td Fin
            td
            td
            td A B C D E F G H
            td
            td
          tr
            td Propósito
            td
            td
            td
            td
            td
          tr
            td Componentes
            td
            td
            td
            td
            td
          tr
            td Actividades
            td
            td
            td
            td
            td
    figcaption Tomado de la guía de proyectos del DNP (2017).

    p(data-aos="fade-right").pt-4  Para la determinación de los medios de verificación la misma guía nos indica que es necesario <strong>identificar y definir las fuentes de información, las herramientas y los métodos usados</strong> para comprobar el estado de progreso del proyecto, siendo esta columna el fundamento del sistema de monitoreo y evaluación del proyecto.
    p(data-aos="fade-right") Al igual que para los indicadores en la <strong>MML</strong> no se ubican los medios de verificación para las actividades, solo para los <strong>objetivos y resultados</strong> aquí se deben especificar la ubicación de las fuentes de información de ejecución del presupuesto asignado, para efectuar el respectivo monitoreo.
    p(data-aos="fade-right") Por otro lado, cada indicador debe tener al menos <strong>una fuente de verificación</strong> y estas deben ser <strong>pertinentes, fiables y accesibles</strong> Se debe realizar, además, una planeación de la recolección de datos.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.4 Análisis de riesgos y establecimiento de los supuestos del proyecto
    
    .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
      .col.lg-8
        p Los análisis de riesgos, al igual que algunos análisis hechos en esta guía anteriormente, permiten a través de análisis cuantitativos, <strong>medir aspectos cualitativos al asignar valores discrecionales en un rango determinado</strong>; un ejemplo de una escala usada frecuentemente es <strong>1=Muy bajo; 2=bajo; 3=moderado; 4=alto; 5=muy alto</strong> En el caso de los riesgos se hace referencia a la evaluación de situaciones que potencialmente pueden desviar o debilitar los resultados esperados, con el objetivo de prevenir o mitigar sus efectos. Un ejemplo sencillo de análisis de riesgos puede ser el de una matriz que enfrente las amenazas posibles (factores externos que pueden afectar el desarrollo del proyecto en cualquiera de sus fases) con la probabilidad estimada de la ocurrencia de un evento y la severidad (gravedad de las consecuencias) de su ocurrencia. Estas amenazas pueden ser las contempladas en un <strong>análisis FODA.</strong>
      .col-lg-4
        figure 
          img(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen decorativa')

    p.text-center <strong>Tabla 12.</strong> Ejemplos de análisis de riesgos.
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-up")
      table
        thead
          tr(style='background-color: #FF8C69')
            th Tipo (Físico, ergonómico, logístico, biológico, químico, psicosocial, climático, político, legal, logístico, etc.)
            th Riesgo (Descripción)
            th Probabilidad de ocurrencia (Rango de 1 a 5, donde: 1=muy baja; 2=baja; 3=media; 4=alta; 5=muy alta)
            th Gravedad del impacto (Rango de 1 a 5, donde: 1=despreciable; 2=considerable; 3=importante; 4=grave; 5=catatrófica)
            th Valor del Riesgo (Probabilidad x gravedad)
            th Nivel de Riesgo (Ubicar en la matriz de riesgos)
        tbody
          tr
            td Climático
            td Prolongación de las épocas de lluvias más allá de la tercera semana de inicio del ciclo productivo y efecto de las heladas en las primeras cinco semanas.
            td 3
            td 4
            td 20
            td Crítico
    .div.p-2(style="background: #F4F4F4")
      p.text-center <strong>Figura 13.</strong> Modelo de matriz de evaluación de riesgos.
      .row.mt-5.mb-4.align-items-center.text-center(data-aos="fade-up")
        .col-lg-12.m-auto
          .tabla-b.color-acento-contenido(data-aos="fade-up")
            table
              thead
                tr(style="background: #FFA686")
                  th(colspan="8") Matriz de evaluación de riesgo
                tr
                  th(colspan="3") 
                  th(colspan="5") Gravedad del impacto
              tbody
                tr
                  td(colspan="3") 
                  td Despreciable (1)
                  td Considerable (2)
                  td Importante (3)
                  td Grave (4)
                  td Catatrófica (5)
                tr
                  th(rowspan="5") Probabilidad de ocurrencia
                  td Muy alta (81%-100%)
                  td(style="background: #FAFF94") 5
                  td(style="background: #FAFF94") 5
                  td(style="background: #FF9500") 10
                  td(style="background: #FF9500") 15
                  td(style="background: #FF0000") 20
                  td(style="background: #FF0000") 25
                tr
                  td Alta (61%-80%)
                  td(style="background: #FAFF94") 4
                  td(style="background: #FAFF94") 4
                  td(style="background: #FAFF94") 8
                  td(style="background: #FF9500") 12
                  td(style="background: #FF9500") 16
                  td(style="background: #FF0000") 20
                tr
                  td Media (41%-60%)
                  td(style="background: #FAFF94") 3
                  td(style="background: #FAFF94") 3
                  td(style="background: #FAFF94") 6
                  td(style="background: #FF9500") 9
                  td(style="background: #FF9500") 12
                  td(style="background: #FF9500") 15
                tr
                  td Baja (21%-40%)
                  td(style="background: #FFFFFF") 2
                  td(style="background: #FFFFFF") 2
                  td(style="background: #FAFF94") 4
                  td(style="background: #FAFF94") 6
                  td(style="background: #FAFF94") 8
                  td(style="background: #FF9500") 12
                tr
                  td Muy baja (<20%)
                  td(style="background: #FFFFFF") 1
                  td(style="background: #FFFFFF") 1
                  td(style="background: #FFFFFF") 2
                  td(style="background: #FAFF94") 3
                  td(style="background: #FAFF94") 4
                  td(style="background: #FAFF94") 5
          .div
            .row.mt-5 
              .col-lg-5.align-content-end
                .contenedor.d-none.d-lg-flex
                  .caja-1
                .contenedor-s.d-block.d-lg-none
                  p.align-content-center.caja-1s 
              .col-lg-6
                strong Riesgo crítico
                p Requiere medidas preventivas urgentes. No se debe iniciar el proyecto sin la confirmación de su prevención o mitigación hasta niveles aceptables.
            .row.mt-5 
              .col-lg-5.align-content-end
                .contenedor.d-none.d-lg-flex
                  .caja-2
                .contenedor-s.d-block.d-lg-none
                  p.align-content-center.caja-2s 
              .col-lg-6
                strong Riesgo grave
                p Requiere medidas preventivas obligatorias. S e deben controlar fuertemente las variables de riesgo durante el proyecto y deseñar un plan de mitigación.
            .row.mt-5 
              .col-lg-5.align-content-end
                .contenedor.d-none.d-lg-flex
                  .caja-3
                .contenedor-s.d-block.d-lg-none
                  p.align-content-center.caja-3s 
              .col-lg-6
                strong Riesgo apreciable
                p Estudiar y aplicar las posibles las posibles medidas preventivas para reducir el nivel de riesgo. Se debe monitorear y controlar las variables.
            .row.mt-5 
              .col-lg-5.align-content-end
                .contenedor.d-none.d-lg-flex
                  .caja-4
                .contenedor-s.d-block.d-lg-none
                  p.align-content-center.caja-4s   
              .col-lg-6
                strong Riesgo marginal
                p Se vigilará aunque no se requiera medidas preventivas de partida.

          p.mt-5.text-center Adaptación de Bernal (2021).

    .row.mt-5.mb-4.align-items-center(data-aos="fade-right")
      .col-lg-4
        figure 
          img.my-3(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen decorativa')
      .col.lg-8
        p.my-3 El anterior análisis de riesgos contempla lo que <strong>no debe ocurrir</strong> para que el proyecto se desarrolle como se ha planeado. En el caso de los supuestos se establecen las condiciones y requisitos para que se puedan realizar las actividades, lograr los objetivos y cumplir finalmente con el propósito del proyecto. Es por estas razones que este análisis se hace <strong>posteriormente a la definición de los indicadores y el desglose de las actividades.</strong> Es importante tener en cuenta de acuerdo con Ortegón et. al (2005) la forma en que se redactan los supuestos que corresponde a la de un objetivo a alcanzar o mantener por parte de quien fuere necesario a pesar de que estos estén fuera del alcance del ejecutor del proyecto. Ejemplo:
        .cajon.color-acento-contenido.p-4(data-aos="slide-down",style="background: #FFA68625")
          h6.mt-0 “Los precios agrícolas mantienen sus niveles (dentro de una banda de + 10%) en términos reales” (p.89). 
    
    p(data-aos="fade-right") Así mismo, para completar la columna de supuestos de la <strong>MML</strong>, se recomienda seguir los siguientes pasos: <strong>identificar todos los supuestos posibles</strong> para cada riesgo identificado en el análisis respectivo, realizando luego una <strong>selección de los que se consideren verdaderos riesgos a enfrentar</strong> y finalmente de acuerdo a los resultados del análisis de riesgos, <strong>establecer las acciones de prevención, mitigación o control para cada factor seleccionado. </strong>

    .p-4(style="background: #FFFAEB")(data-aos="fade-left")
      .row.align-items-center
        .col-lg-8
          .row.mt-5.mb-4.align-items-center
            .col-auto
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
            .col.px-0
              h3.mb-0(data-aos="fade-left") Comprobación lógica de la MML
          p Finalmente para efectos de la comprobación de la lógica de la <strong>MML</strong>, se debe revisar la coherencia de los vínculos causales de abajo hacia arriba de la matriz (<strong>actividades-componentes-objetivos-fin</strong>) esto es la lógica vertical, con al menos tres criterios que rezan como sigue:
          ol.lista-ol
            li 
              span.text-bold 1. 
              |  Se indican claramente el fin, propósito, componentes y actividades del proyecto.
            li 
              span.text-bold 2. 
              | Si se llevan a cabo las actividades y los supuestos de este nivel se ratifican, se obtendrán los componentes.
            li 
              span.text-bold 3. 
              | Cada componente es necesario para lograr el propósito del proyecto y además no falta ningún componente necesario.
            li 
              span.text-bold 4. 
              | Si se producen los componentes y los supuestos a este nivel se conforman, se logrará el propósito de la intervención
            li 
              span.text-bold 5. 
              | Si se logra el propósito y se conforman los supuestos a este nivel, se habrá contribuido de manera significativa a alcanzar el fin.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img20.png',alt="")
    p.my-4 El conjunto objetivo–indicadores-medios de verificación define lo que se conoce como lógica horizontal en la matriz de marco lógico. Esta puede comprobarse en su lógica a través de los siguientes aspectos:

    .row.align-items-center.my-5
      .col-lg-5.crd.crd--avatarHorizontal-left-bgr1.py-3.mb-3.m-auto(data-aos="fade-right")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema3/img21.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 Los medios de verificación identificados son los necesarios y suficientes para obtener los datos requeridos para el cálculo de los indicadores.
        
      .col-lg-5.crd.crd--avatarHorizontal-left-bgr1.py-3.mb-3.m-auto(data-aos="fade-left")
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema3/img22.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.m-0 Los indicadores definidos permiten hacer un buen seguimiento del proyecto y evaluar adecuadamente el logro de los objetivos. 

    .row.p-3.d-none.d-lg-flex
      .col-lg-10.m-auto 
        p.my-4 La gráfica que sigue nos enseña <strong>la forma de lectura global de la MML</strong>, la relación entre las distintas partes que componen la matriz y cómo en una sola herramienta se logra visualizar de manera general todo un proyecto, sin duda uno de los aspectos positivos de la metodología. 
        .row
          .col-lg-3
            p.grafica-1.fs-4 <strong>Fin</strong>
          .col-lg-2.align-content-center
            figure
              img(src="@/assets/curso/temas/tema3/Trazado 26822.svg", alt="")
          .col-lg-7
            p.grafica-2.fs-4 + Supuestos sobre sostenibilidad
        .row.justify-content-center
          .col-lg-9
            figure
              img(src="@/assets/curso/temas/tema3/Trazado 26825.svg", alt="")
        .row
          .col-lg-3
            p.grafica-1.fs-4 <strong>Propósito</strong>
          .col-lg-2.align-content-center
            figure
              img(src="@/assets/curso/temas/tema3/Trazado 26822.svg", alt="")
          .col-lg-7
            p.grafica-2.fs-4 + Supuestos Propósito - Fin
        .row.justify-content-center
          .col-lg-9
            figure
              img(src="@/assets/curso/temas/tema3/Trazado 26825.svg", alt="")
        figure
        .row
          .col-lg-3
            p.grafica-1.fs-4 <strong>Componentes</strong>
          .col-lg-2.align-content-center
            figure
              img(src="@/assets/curso/temas/tema3/Trazado 26822.svg", alt="")
          .col-lg-7
            p.grafica-2.fs-4 + Supuestos Componentes - Propósito
        .row.justify-content-center
          .col-lg-9
            figure
              img(src="@/assets/curso/temas/tema3/Trazado 26825.svg", alt="")
        .row
          .col-lg-3
            p.grafica-1.fs-4 <strong>Actividades</strong>
          .col-lg-2.align-content-center
            figure
              img(src="@/assets/curso/temas/tema3/Trazado 26822.svg", alt="")
          .col-lg-7
            p.grafica-2.fs-4 + Supuestos Actividades - Componentes

    .row.p-3.d-block.d-lg-none
      .col-lg-10.m-auto 
        p.my-4 La gráfica que sigue nos enseña <strong>la forma de lectura global de la MML</strong>, la relación entre las distintas partes que componen la matriz y cómo en una sola herramienta se logra visualizar de manera general todo un proyecto, sin duda uno de los aspectos positivos de la metodología. 
        .row
          .col-lg-7
            p.grafica-2s.fs-4 + Supuestos sobre sostenibilidad
            .col-lg-9.my-2
            figure
              img.my-2(src="@/assets/curso/temas/tema3/linea2.svg", alt="", height="70px")
          .col-lg-3
            p.grafica-1.fs-4 <strong>Fin</strong>
        .row.justify-content-center
        .col-lg-9.my-2
            figure
              img.my-2(src="@/assets/curso/temas/tema3/linea2.svg", alt="", height="70px")
        .row
          .col-lg-7
            p.grafica-2s.fs-4 + Supuestos Propósito - Fin
            .col-lg-9.my-2
            figure
              img.my-2(src="@/assets/curso/temas/tema3/linea2.svg", alt="", height="70px")
          .col-lg-3
            p.grafica-1.fs-4 <strong>Propósito</strong>
        .row.justify-content-center
        .col-lg-9.my-2
            figure
              img.my-2(src="@/assets/curso/temas/tema3/linea2.svg", alt="", height="70px")
        .row
          .col-lg-7
            p.grafica-2s.fs-4 + Supuestos Componentes - Propósito
          .col-lg-9.my-2
            figure
              img.my-2(src="@/assets/curso/temas/tema3/linea2.svg", alt="", height="70px")
          .col-lg-3
            p.grafica-1.fs-4 <strong>Componentes</strong>
        .row.justify-content-center
          .col-lg-9.my-2
            figure
              img.my-2(src="@/assets/curso/temas/tema3/linea2.svg", alt="", height="70px")
        .row
          .col-lg-7
            p.grafica-2s.fs-4 + Supuestos Actividades - Componentes
            .col-lg-9.my-2
            figure
              img.my-2(src="@/assets/curso/temas/tema3/linea2.svg", alt="", height="70px")
          .col-lg-3
            p.grafica-1.fs-4 <strong>Actividades</strong>


    
    p.text-center <strong>Tabla 13.</strong> Matriz de marco lógico completa con la explicación de cada apartado.
    .tabla-b.color-acento-contenido.text-center.my-3(style="background: white")
      table
        thead 
          tr(style="background: #FFA686")
            th Resumen narrativo de objetivos
            th Indicadores objetivamente verificables
            th Fuentes de verificación
            th Supuestos
        tbody
          tr
            td <strong>Fin (Objetivo general)</strong> <br>El fin es una definición de cómo el proyeco o programa contribuirá a la solución del problema (o problemas) del sector.
            td Miden el impacto general que tendrá el proyecto. Son específicos en términos de cantidad, calidad y tiempo (grupo social y lugar si es relevante).
            td Fuentes de información que se pueden utilizar para verificar si los objetivos se lograron.
            td Indican los acontecimientos, las condiciones importantes necesarias para la sostenibilidad (continuidad en el tiempo) de los beneficios generados por el proyecto.
          tr 
            td <strong> Propósito (Objetivo específico)</strong> <br>El propósito es el impacto directo a ser logrado como resultado de la utilización de los componentes producidos por el proyecto. Es una hipótesis sobre el impacto o beneficio que se desea lograr.
            td Describen el impacto logrdo al final del proyecto. Deben incluir metas que reflejan la situación al finalizar el proyecto. Cada indicador especifica calidad, cantidad y tiempo de los resultados por alcanzar.
            td Fuentes que el ejecutor y el evaluador pueden consultar para ver si los objetivos se están logrando. Pueden indicar si exsite un problema y sugieren la necesidad de cambio en los componentes del proyecto. Pueden incluir material publicado, inspección visual, encuestas por muestreo.
            td Indican los acontecimientos, condiciones o las decisiones que tienen que ocurrir para que el proyecto contribuya efectivamente al logro del fin.
          tr
            td <strong> Componentes (Resultados)</strong> <br>Obras, servicios y capacitación que se requiere que complete el ejecutor del proyecto de acuerdo con el trato. Estos deben expresarse en trabajo terminado (sistemas instalados, gente capacitada).
            td Son descripciones breves pero claras de cada uno de los componentes que tiene que terminarse durante la ejecución. Cada uno debe especificar cantidad, calidad y oportunidad de las obras y servicios que deberán entregarse.
            td Indica dónde puede un evaluador obtener información para verificar que los resultados han sido producidos. Las fuentes pueden incluir inspección en sitios internos, auditorías, etc.
            td Acontecimientos, condiciones o decisiones que tienen que ocurrir para que los componentes del proyecto alcancen el propósito para el cual se llevaron a cabo.
          tr
            td <strong> Actividades (Acciones)</strong> <br>Tareas que el ejecutor debe cumplir para completar cada uno de los componentes del proyecto y que implican costos. Se hace una lista de actividades en orden analógico para cada componente.
            td Presupuesto para cada componente a ser producido para el proyecto.
            td Indica dónde puede un evaluador obtener información para verificar si el presupuesto se gastó como estaba planificado. Normalmente constituye el registro contable de la unidad ejecutable.
            td Acontecimientos, condiciones o decisiones (fuera del control del gerente del proyecto) que tienen que suceder para completar los componentes del proyecto.
    p.text-center.my-3 Tomado de la guía para la formulación de proyectos de inversión del sector agropecuario de la FAO, 2017.
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 3.5 Plan operativo y presupuesto general
    
    .row.align-items-center.p-3.my-5(data-aos="fade-right")
      .col-lg-4
        figure
          img.my-3(src="@/assets/curso/temas/tema3/img24.png", alt="")
      .col-lg-8
        p Una vez <strong>comprobados y validados los resultados</strong> de la aplicación de la metodología del <strong>EML</strong> en el documento final, el siguiente paso para poder dar inicio a la ejecución, consiste en tomar todas las actividades y realizar una <strong>planeación exhaustiva</strong> asignando recursos, materiales, responsables, tiempos de ejecución y demás información necesaria que de manera anticipada sea útil para la correcta ejecución del proyecto; además, <strong>el presupuesto deberá estar detallado,</strong> en otro documento que contendrá toda la información del manejo y seguimiento a la ejecución del mismo.
        .cajon.color-secundario.p-4(data-aos="slide-down",style="background: #DEEBAD")
          p.mt-0 Estos procedimientos se pueden abordar desde documentos y bibliografía específica de los temas de ejecución, administración y dirección de proyectos y por otro lado del control de costos y finanzas aplicado a proyectos.  
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

<style lang="sass">
.crd--avatarHorizontal-left-bgr1::before
  background: #E9F3C7
</style>
