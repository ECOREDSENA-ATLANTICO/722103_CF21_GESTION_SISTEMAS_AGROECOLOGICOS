<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    p.mb-3 En el contexto del final de la Segunda Guerra Mundial en 1945, se crea la más grande organización internacional, la Organización de las Naciones Unidas (ONU), en respuesta a la preocupación por la paz, estabilidad y desarrollo de los países miembros y del mundo. Producto del primer período de asambleas en 1947, surge la iniciativa de conformar una comisión encargada de los temas relacionados con el desarrollo de América Latina y el Caribe.

    figure(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ii4D0D4xQUk?si=lzCYuNR39KwcXzTu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.align-items-center.p-3.my-5.justify-content-center
      .col-auto
        figure
          img(src='@/assets/curso/temas/intro/img1.svg', alt='Imagen decorativa')

      .col-lg-8
        .cajon.color-acento-botones.p-4.my-3(style="background:#FFD94715")
          p.mt-0 <strong>La Comisión Económica para América Latina (CEPAL)</strong> empieza a funcionar en <strong>1948</strong>, desde su creación, la organización ha hecho aportes importantes desde las teorías y visiones socioeconómicas. Actualmente, como parte de las estrategias de apoyo a los países miembros, <strong>la comisión trabaja en torno a políticas públicas pero también a mecanismos para la gestión del desarrollo</strong> en el marco de los objetivos del desarrollo sostenible de las Naciones Unidas (estructurados como la “Agenda 2030 de las Naciones Unidas”). A principios de los años 60, la <strong>CEPAL</strong> crea el <strong>Instituto Latinoamericano y del Caribe de Planificación Económica y Social (ILPES)</strong>, “con el fin de apoyar a los Gobiernos de la región en el campo de la planificación y gestión pública, mediante la prestación de servicios de capacitación, asesoría e investigación” (CEPAL, 2021). El ILPES, en sus distintas publicaciones acerca de la metodología de marco lógico, enuncia que en la gestión de proyectos se puede presentar la ausencia de direccionamiento estratégico enfocado al desarrollo integral de las regiones o de las instituciones, evidente en la falta de claridad en los objetivos y metas mayores, lo que conlleva a varios problemas, como la asignación caprichosa y descoordinada de recursos ante la incapacidad de los evaluadores de argumentar las fallas.
    
    .row.my-4.align-items-center
      .col-lg-8.mb-3(data-aos="fade-left")
        p.my-2 El uso de la <strong>MML (Matriz de Marco Lógico)</strong> tiene su origen en el desarrollo de técnicas de “gerencia por objetivos” (MBO), propuesto por <strong>Peter Drucker en 1954</strong>. El Enfoque de Marco Lógico (EML), facilita la integración de los componentes de un proyecto, dándole coherencia a todas sus partes y proporcionando eficacia “técnico-funcional” indistintamente del nivel en el que se planteen. <strong>El enfoque sistémico que permite la coherencia del proyecto también ofrece la articulación global de distintos estamentos</strong>, un orden tanto vertical como horizontal entre los niveles estratégicos, tácticos y operacionales estableciendo una lectura secuencial y lógica en el tiempo, compatible con el concepto de “ciclo del proyecto” también llamado comúnmente “ciclo de vida” (preinversión-inversión-operación), dado el desarrollo de todo un paquete de herramientas complementarias que ayudan a organizar la información y a aplicar los conceptos de la metodología (Ortegón et al. 2005). 
        p.my-2 En el año de 1979 que la <strong>Agencia para el Desarrollo Internacional de los Estados Unidos (USAID)</strong> divulga oficialmente el enfoque de marco lógico a través de la publicación <strong>“The Logical Framework”</strong>, como una herramienta eficaz para la gestión de la información requerida en la formulación de proyectos, respondiendo a tres necesidades identificadas y explícitas en la publicación de la metodología en ese entonces: una planeación demasiado “vaga”, la falta de claridad en las responsabilidades y la dificultad del proceso de evaluación.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/intro/img2.svg', alt='Imagen decorativa')
    
      p.my-3  El enfoque de marco lógico (The Logical Framework Approach) responde específicamente a estas necesidades, propendiendo desde el inicio de la formulación a:

    .row.my-3
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-acento-botones.p-4(style='background: #E1EDB5')
          figure
            img(data-aos="zoom-in",src='@/assets/curso/temas/intro/img3.svg', alt ="Muestra las necesidades a las cuales da respuesta el Enfoque de Marco Lógico: Una descripción clara, explícita y medible de lo que sucederá si el proyecto es exitoso. El esclarecimiento de la responsabilidad de la gerencia del proyecto y el porqué de esto. La visualización de los elementos clave de diseño del proyecto y sus relaciones entre sí de manera que facilita el análisis. Cambiando el enfoque de búsqueda de culpables a un enfoque de búsqueda del plan más realista para el logro de los objetivos según la evidencia disponible en el momento (PCI, 1979).", width="150px", height="150px")
          p.my-2 <strong>Una descripción clara, explícita y medible</strong> de lo que sucederá si el proyecto es exitoso.
      
        .col-md.tarjeta.color-acento-botones.p-4(style='background: #FFF8DA')
          figure
            img(data-aos="zoom-in",src='@/assets/curso/temas/intro/img4.svg', alt='Imagen decorativa', width="150px", height="150px")
          p.my-2 El esclarecimiento de <strong>la responsabilidad de la gerencia del proyecto</strong> y el porqué de esto.
        .col-md.tarjeta.color-acento-botones.p-4(style='background: #E1EDB5')
          figure
            img(data-aos="zoom-in",src='@/assets/curso/temas/intro/img5.svg', alt='Imagen decorativa', width="150px", height="150px")
          p.my-2 <strong>La visualización de los elementos clave de diseño del proyecto</strong> y sus relaciones entre sí de manera que facilita el análisis.
        .col-md.tarjeta.color-acento-botones.p-4(style='background: #FFF8DA')
          figure
            img(data-aos="zoom-in",src='@/assets/curso/temas/intro/img6.svg', alt='Imagen decorativa', width="150px", height="150px")
          p.my-2 Cambiando el enfoque de búsqueda de culpables a un enfoque de <strong>búsqueda del plan más realista</strong> para el logro de los objetivos según la evidencia disponible en el momento (PCI, 1979).

    .row.my-3.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/intro/img7.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        p.my-2 Ya en el año 1983 la <strong>Agencia para la Cooperación Técnica Alemana (GTZ)</strong> plantea una variante metodológica denominada <strong>ZOPP (planificación de proyectos orientada a objetivos)</strong> con la finalidad de: 

        ul.lista-ul
          li 
            i.lista-ul__vineta(style="color: black") 
            | Lograr una definición realista y clara de los objetivos en una perspectiva a largo plazo.
          li
            i.lista-ul__vineta(style="color: black") 
            |  Mejorar la comunicación y cooperación entre las partes implicadas a través de una planificación conjunta, utilizando documentos precisos y definiciones claras.
          li 
            i.lista-ul__vineta(style="color: black") 
            |   Definir el área de responsabilidad del equipo del proyecto.
          li
            i.lista-ul__vineta(style="color: black") 
            |  Establecer indicadores para el seguimiento y la evaluación.
        .cajon.color-secundario.p-4.my-3(data-aos="fade-left")
          p.mt-0 Esta adaptación ofrece modificaciones muy útiles, porque ha tenido un destacable éxito en su aplicación y una gran aceptación en todos los entornos que la han adoptado.
        
    .row.align-items-center.my-3(data-aos="fade-up")
      .col-lg-10.m-auto
        .bloque-texto-f.color-secundario.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.bloque-texto-f__texto Organismos de crédito tales como el Banco Interamericano de Desarrollo –BID, el Asian Development Bank– ADB o el Banco Mundial; agencias cooperantes tales como la Deutsche Gesellschaft für Technische Zusammenarbeit – GTZ (Empresa alemana de cooperación internacional para el desarrollo sostenible), la Australian Agency for International Development - AusAid (Agencia australiana para el desarrollo internacional) o la Canadian International Development Agency – CIDA (Agencia Canadiense de Desarrollo Internacional) han impulsado el uso de la <strong>Matriz de Marco Lógico - MML como parte de sus metodologías de preparación y evaluación de proyectos.</strong>
          h3.bloque-texto-f__texto (Aldunate, E., 2004).
          i.fas.fa-quote-right

    .row.my-5
      .col-lg-6
        p.mb-0(data-aos="fade-left") En general, el EML viene teniendo cada vez más aceptación en muchos ámbitos, instituciones y países debido al <strong>significativo aporte que ofrece la metodología a la gerencia y la gestión de proyectos y programas fomentando el liderazgo, el direccionamiento estratégico, la conducción de procesos complejos y la construcción de entornos favorables</strong> (involucrando actores importantes), facilitando la toma de decisiones y la calidad de las propuestas, aplicando criterios de eficiencia en la planeación y operación, la capacidad de adaptación a circunstancias cambiantes y la implicación sin mayores traumatismos de variables difíciles de cuantificar como las de impacto social. 
      .col-lg-6
        p.mb-0(data-aos="fade-left") Finalmente el enfoque metodológico de marco lógico es un medio, por lo que <strong>no podrá per se subsanar fallas en las políticas macroeconómicas o de planes maestros como los gubernamentales</strong>; además, los análisis iniciales deberán estar bien planteados para el logro de los resultados esperados con la aplicación del enfoque y esto estará condicionado por la calidad de la información y de los insumos que se disponga. En este documento se abordan <strong> los pasos iniciales para la aplicación de la metodología</strong> iniciando con las distintas herramientas complementarias que siguen un orden secuencial, hasta la construcción de la <strong>Matriz de Marco Lógico (MML)</strong>, el producto final y que resume el enfoque. 

    .row.my-5
      .col-lg-10.crd.crd--avatarHorizontal-left-bgr1.py-3.mb-3.m-auto
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/intro/img8.svg", alt="", width= "100px", height="100px")
          .col(style="z-index:1")
            p.mb-0 A continuación se abordarán <strong>paso a paso las herramientas estándar orientadas por el enfoque de marco lógico y también algunas adicionales que pueden facilitar el tránsito de una herramienta a otra</strong>, o producir insumos para el arranque de la metodología. Si bien es una descripción somera con fines prácticos, siempre se podrá acudir a la bibliografía y las fuentes de información aquí referenciadas cuando se desee profundizar o comprender el método de manera más amplia.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.crd--avatarHorizontal-left-bgr1::before
  background: #EAF2CA
</style>
