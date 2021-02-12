<template>
  <div>
    <h1>Top Slider</h1>
    <div class="all-slides-container">
      <h2>All Slides</h2>
      <ul style="padding: 20px; list-style: none">
        <hr />
        <li v-for="(slide, i) in slides" :key="slide._id">
          <p>{{ i + 1 }}</p>
          <img
            :src="`/api/uploads${slide.image}`"
            alt=""
            srcset=""
            style="width: 100%"
          />
          <p>{{ slide.link }}</p>
          <vs-button
            relief
            style="margin: 15px 0"
            @click="deleteSlide(slide._id)"
            :loading="deleteLoading"
            >Remove this Slide</vs-button
          >
          <hr />
        </li>
      </ul>
    </div>
    <div class="add-slides-container">
      <h2>Add New Slide</h2>
      <p style="font-size: 0.8rem; padding: 15px 5px">Image</p>
      <div>
        <dropzone
          id="dropzone"
          ref="el"
          :options="options"
          :destroyDropzone="true"
          @vdropzone-complete="uploadSuccess"
        ></dropzone>
      </div>
      <p style="font-size: 0.8rem; padding: 15px 5px">Selected Image</p>
      <img
        v-if="image"
        :src="`/api/uploads${image}`"
        alt=""
        style="width: 100%"
      />
      <vs-input
        v-model="link"
        label="Link"
        placeholder="Link"
        style="margin-top: 25px"
        class="full-input"
        state="dark"
      />
      <vs-button
        relief
        style="margin-top: 25px"
        @click="addSlide"
        :loading="addSlideLoading"
        >+ Add Slide</vs-button
      >
    </div>
  </div>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";

export default {
  components: {
    Dropzone,
  },
  layout: "dashboard",
  data() {
    return {
      options: {
        url: "/api/upload",
        paramName: "image",
        maxFilesize: 0.1,
      },
      image: "",
      addSlideLoading: false,
      link: "",
      slides: [],
      deleteLoading: false,
    };
  },
  mounted() {
    const instance = this.$refs.el.dropzone;
  },
  methods: {
    uploadSuccess(response) {
      if (response.xhr) {
        this.image = response.xhr.response;
      }
    },
    async addSlide() {
      if (this.image && this.link) {
        this.addSlideLoading = true;
        const res = await this.$axios.$post(
          "/api/slides",
          {
            image: this.image,
            link: this.link,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.$router.go();
        this.addSlideLoading = false;
      }
    },
    async deleteSlide(id) {
      this.deleteLoading = true;
      await this.$axios.$delete(`/api/slides/${id}`);
      this.$router.go();
      this.deleteLoading = false;
    },
  },
  created: async function () {
    const loading = this.$vs.loading({
      text: "Loading...",
    });
    const res = await this.$axios.$get("/api/slides/");
    this.slides = res;
    loading.close();
  },
};
</script>

<style>
.all-slides-container,
.add-slides-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 10px;
  margin: 20px 0;
}

.full-input input {
  width: 100%;
}
</style>
