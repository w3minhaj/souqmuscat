<template>
  <div class="center examplex">
    <vs-navbar
      padding-scroll
      center-collapsed
      fixed
      shadow-scroll
      square
      v-model="active"
    >
      <template #left>
        <h2>SouqMuscat.com</h2>
      </template>

      <template #right>
        <div class="center">
          <vs-select placeholder="Select" v-model="language">
            <vs-option label="Vuesax" value="1"> English </vs-option>
            <vs-option label="Vue" value="2"> عربى </vs-option>
          </vs-select>
        </div>
        <vs-avatar
          color="rgb(255,255,255)"
          style="margin: 0 5px; transform: scale(0.8)"
        >
          <svg
            width="80%"
            height="80%"
            viewBox="0 0 208.955 208.955"
            style="enable-background: new 0 0 208.955 208.955"
            xml:space="preserve"
            fill="rgba(44, 62, 80, 1)"
          >
            <path
              d="M190.85,200.227L178.135,58.626c-0.347-3.867-3.588-6.829-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971
	C82.437,0,64.509,17.931,64.509,39.971v11.826H38.27c-3.882,0-7.123,2.962-7.47,6.829L18.035,200.784
	c-0.188,2.098,0.514,4.177,1.935,5.731s3.43,2.439,5.535,2.439h157.926c0.006,0,0.014,0,0.02,0c4.143,0,7.5-3.358,7.5-7.5
	C190.95,201.037,190.916,200.626,190.85,200.227z M79.509,39.971c0-13.769,11.2-24.971,24.967-24.971
	c13.768,0,24.969,11.202,24.969,24.971v11.826H79.509V39.971z M33.709,193.955L45.127,66.797h19.382v13.412
	c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V66.797h49.936v13.412c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5
	V66.797h19.364l11.418,127.158H33.709z"
            />
          </svg>
          <template #badge> 28 </template>
        </vs-avatar>
      </template>
      <div class="search-box">
        <div class="con-input">
          <input
            aria-label="Search"
            autocomplete="off"
            spellcheck="false"
            class=""
            placeholder="Search products.."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
            ></path>
          </svg>
        </div>
      </div>
    </vs-navbar>
    <div class="square">
      <div class="child">child 1</div>
      <div class="child">child 2</div>
      <div class="child">child 3</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "guide",
    search: "",
    language: "",
  }),
};
</script>

<style scoped>
.child {
  min-height: 100vh;
}

.search-box {
  display: inline-block;
  margin-right: 0;
  position: relative;
}

.search-box .con-input {
  display: flex;
  align-items: center;
  position: relative;
}

.search-box input {
  cursor: text;
  width: 15rem;
  color: var(--vs-theme-color);
  display: inline-block;
  border-radius: 2rem;
  font-size: 0.85rem;
  line-height: 1.8rem;
  outline: none;
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.05);
  background-size: 1rem;
  display: block;
  border-radius: 0;
  border: 0;
  padding: 4px 4px 4px 20px;
  opacity: 1;
  border-radius: 14px 14px 14px 14px;
  margin: 5px 0;
}

.search-box input:focus {
  width: 20rem;
}

.search-box svg {
  position: absolute;
  right: 10px;
  width: 20px;
  pointer-events: none;
  transition: all 0.2s ease;
  fill: var(--vs-theme-color);
}
</style>