<template>
  <div style="margin-top: 90px; padding: 50px">
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
        style="padding-right: 45px"
      >
        <client-only>
          <div class="thumb-example">
            <!-- swiper1 -->
            <swiper
              class="swiper gallery-top"
              :options="swiperOptionTop"
              ref="swiperTop"
            >
              <swiper-slide
                class="slide"
                v-for="image in product.images"
                :key="image"
                :style="{
                  backgroundImage: `url(/api/uploads/${image})`,
                }"
              ></swiper-slide>
              <div
                class="swiper-button-next swiper-button-white"
                slot="button-next"
              ></div>
              <div
                class="swiper-button-prev swiper-button-white"
                slot="button-prev"
              ></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper
              class="swiper gallery-thumbs"
              :options="swiperOptionThumbs"
              ref="swiperThumbs"
            >
              <swiper-slide
                class="slide-1"
                v-for="image in product.images"
                :key="image"
                :style="{
                  backgroundImage: `url(/api/uploads/${image})`,
                }"
              ></swiper-slide>
            </swiper>
          </div>
        </client-only>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
        style="padding-left: 45px"
      >
        <div style="padding: 20px" class="product-info">
          <h1>{{ product.name }}</h1>
          <h4 style="color: #65727f">
            {{ product.category && product.category.name }}
          </h4>
          <p style="margin-top: 30px">
            {{ product.description }}
          </p>
          <div
            style="
              display: flex;
              justify-content: start;
              align-items: center;
              margin-top: 20px;
            "
          >
            <h4>Price:</h4>
            <h1 style="margin-left: 5px">{{ product.price }}</h1>
            <h4 style="margin-left: 5px">OMR</h4>
          </div>
          <hr />
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <div class="counter quantity-container">
              <input
                id="quantity"
                type="number"
                min="0"
                step="1"
                class="quantity-amount"
                name=""
                value="1"
                maxlength="2"
              />
              <label for="quantity">Quantity</label>
              <button class="gdown decrease" type="button">-</button>
              <button class="gup increase" type="button ">+</button>

              <span></span>
            </div>
            <vs-button dark block relief> Buy Now </vs-button>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  layout: "shop",
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      product: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  async fetch(){
    const id = this.$route.params.id
    this.product = await this.$axios.$get(`/api/products/${id}`)
  }
};
</script>

<style scoped>
.thumb-example {
  height: 480px;
  background-color: #fdfdfd;
}

.swiper .swiper-slide {
  background-size: cover;
  background-position: center;
}

.swiper.gallery-top {
  height: 80%;
  width: 100%;
}

.swiper.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.swiper.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.swiper.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.swiper-container {
  border-radius: 15px;
}

.swiper-slide {
  border-radius: 15px;
}

.product-info {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.gup,
.gdown {
  top: 0.75rem;
  user-select: none;
  display: block;
  width: 2em;
  height: 2em;
  text-align: center;
  line-height: 2em;
  color: #abc;
  font-weight: 600;
  transform: scale(0.9);
  transition: all 0.3s ease;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0.1rem;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
}
.gup:hover,
.gup:focus,
.gdown:hover,
.gdown:focus {
  transform: scale(1.1);
  background-color: #2c3e50;
  color: white;
  box-shadow: inset 0 0 0 0.1rem #2c3e50;
}

.counter {
  display: inline-block;
  vertical-align: top;
  margin: 0 0.5rem;
  min-width: 9rem;
  min-height: 4rem;
  position: relative;
}

.counter input {
  background-color: transparent;
  color: currentcolor;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  height: 3rem;
  margin: 0;
  line-height: 3rem;
  appearance: none;
  border: 0;
  outline: 0;
  padding-top: 0.75rem;
  text-align: center;
}

.counter input:valid ~ label {
  color: currentcolor;
}

.counter input:focus + label,
.counter input:valid + label,
input[type="text"]:focus + label,
input[type="text"]:valid + label {
  width: 100%;
  transition: transform 0.15s ease;
  color: #2c3e50;
  transform: scale(0.75) translate(0, -0.5em);
}

.counter input + label {
  transform-origin: 50% 0%;
  transition: transform 0.2s ease;
  font-size: 1rem;
  white-space: nowrap;
  display: block;
  height: 3rem;
  line-height: 3rem;
  margin-top: -3rem;
  line-height: 4rem;
}

.counter input:focus ~ label {
  color: #2c3e50;
}

.counter input:focus ~ .gup,
.counter input:focus ~ .gdown {
  background-color: transparent;
  color: #2c3e50;
  transform: scale(1);
  box-shadow: none;
}
.counter label {
  transform-origin: 50% 0;
  width: 100%;
  transform: scale(0.75);
  text-align: center;
  display: block;
  position: absolute;
  top: 2rem;
  transition: all 0.5s;
}
.counter button {
  position: absolute;
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 0;
  outline: 0;
  border-radius: 50%;
  line-height: 1.8rem;
  padding: 0;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
}

.counter input ~ span {
  width: 0;
  height: 0.15rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 0%;
  margin: 0 auto;
  transition: all 0.5s cubic-bezier(0.7, 0, 0, 0.9);
  display: block;
  margin-top: -0.15rem;
  position: relative;
  z-index: 9;
}

.counter input:focus ~ span {
  width: 2.5rem;
  background-color: #2c3e50;
}

.counter .gup {
  left: auto;
  right: 1.5rem;
}

.counter .gdown {
  right: auto;
  left: 1.5rem;
}

.quantity-container {
  margin-top: 15px;
}

hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
}
</style>