<template>
  <div
    class="swiper"
    v-swiper:myDirectiveSwiper="swiperOptions"
    style="margin-top: 90px"
  >
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="slide in slides"
        :key="slide._id"
        :style="{
          backgroundImage: `url(/api/uploads${slide.image})`,
        }"
        @click="goTo(`${slide.link}`)"
      ></div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slides: []
    };
  },
  async fetch() {
    this.slides = (
      await this.$axios.$get(
        `/api/slides/`
      )
    );
  },
  methods: {
    goTo(link){
      if(link.startsWith("http")) {
        window.location.href = link;
      } else {
        window.location.href = "http://" + link;
      }
    }
  }
};
</script>

<style scoped>
.swiper {
  height: 20vw;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

@media only screen and (max-width: 1200px) {
  .swiper {
    height: 25vw;
  }
}

@media only screen and (max-width: 900px) {
  .swiper {
    height: 35vw;
  }
}

@media only screen and (max-width: 600px) {
  .swiper {
    height: 40vw;
  }
}
@media only screen and (max-width: 400px) {
  .swiper {
    height: 50vw;
  }
}
</style>