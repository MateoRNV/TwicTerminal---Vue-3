<template>
  <b-card-code>

    <b-carousel
      id="carousel-example-generic"
      controls
      indicators
    >
      <b-carousel-slide :img-src="require('@/assets/images/slider/bmw-2.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/bmw-1.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/images/slider/bmw-3.jpg')" />
    </b-carousel>

  </b-card-code>
</template>

<script>
import { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'

export default {
  components: {
    BCardCode,
    BCarousel,
    BCarouselSlide,
    BCardText,
  },
  data() {
    return {
      codeCarouselBasic,
    }
  },
}
</script>


<style>
.modal-content .card-header{
  display: none !important;
}
.modal-content .card-body{
  padding: 0;
}
</style>
