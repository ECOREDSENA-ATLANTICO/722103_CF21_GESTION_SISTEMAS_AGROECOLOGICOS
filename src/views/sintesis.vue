<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non odio mauris. Fusce blandit elit id consequat congue. Nullam commodo et libero et congue. Integer et magna in massa cursus vestibulum. Maecenas mauris libero, volutpat vitae pretium ac, cursus sed mi. Sed scelerisque, metus eget laoreet efficitur, est nunc egestas lorem, vel tincidunt libero turpis et tortor. Vestibulum commodo enim sapien, quis feugiat arcu maximus in. Sed molestie malesuada neque nec eleifend. Aliquam vestibulum lorem in vestibulum mollis. Nulla elementum pellentesque purus, id maximus sem suscipit et. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
