<template>
  <div class="center grid" style="margin-top: 90px">
    <vs-row style="padding: 50px">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="9"
        style="padding-right: 25px"
      >
        <Nuxt-link to="/">
          <p
            style="
              font-weight: bold;
              display: flex;
              align-items: center;
              cursor: pointer;
              margin-bottom: 20px;
              color: #195bff;
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              style="fill: #195bff; transform: ; -ms-filter: "
            >
              <path
                d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"
              ></path></svg
            >Continue Shopping
          </p>
        </Nuxt-link>
        <hr />
        <h1>{{ $t("shopping_cart") }}</h1>
        <p style="color: #65727f; margin-bottom: 35px">
          You have 4 items in your cart
        </p>
        <div class="product_container">
          <div class="cart_product">
            <div class="flex_center">
              <img
                src="https://source.unsplash.com/random/400x300"
                alt=""
                srcset=""
                height="100px"
                style="object-fit: cover"
              />
            </div>
            <div class="flex_center">Product name</div>
            <div class="flex_center">
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
            </div>
            <div class="flex_center">Price</div>
            <div class="flex_center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="-ms-filter: "
                class="remove-icon"
              >
                <path
                  fill="none"
                  d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                ></path>
                <path
                  d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
                ></path>
                <path
                  d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="cart_product">
            <div class="flex_center">
              <img
                src="https://source.unsplash.com/random/400x300"
                alt=""
                srcset=""
                height="100px"
                style="object-fit: cover"
              />
            </div>
            <div class="flex_center">Product name</div>
            <div class="flex_center">
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
            </div>
            <div class="flex_center">Price</div>
            <div class="flex_center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="-ms-filter: "
                class="remove-icon"
              >
                <path
                  fill="none"
                  d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                ></path>
                <path
                  d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
                ></path>
                <path
                  d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="cart_product">
            <div class="flex_center">
              <img
                src="https://source.unsplash.com/random/400x300"
                alt=""
                srcset=""
                height="100px"
                style="object-fit: cover"
              />
            </div>
            <div class="flex_center">Product name</div>
            <div class="flex_center">
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
            </div>
            <div class="flex_center">Price</div>
            <div class="flex_center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="-ms-filter: "
                class="remove-icon"
              >
                <path
                  fill="none"
                  d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                ></path>
                <path
                  d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
                ></path>
                <path
                  d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="3"
        style="padding-left: 25px"
      >
        <div class="order-summary">
          <h2>Order Summary</h2>
          <hr />
          <p
            style="
              display: flex;
              justify-content: space-between;
              margin-top: 30px;
            "
          >
            <span>Subtotal: </span><span>250 OMR</span>
          </p>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 15px;
            "
          >
            <div>
              <p>Deliver to:</p>
            </div>
            <vs-select placeholder="Shipping Address" v-model="shipping">
              <vs-option label="Area 1" value="Area 1"> Area 1 </vs-option>
              <vs-option label="Area 2" value="Area 2"> Area 2 </vs-option>
              <vs-option label="Area 3" value="Area 3"> Area 3 </vs-option>
              <vs-option label="Area 4" value="Area 4"> Area 4 </vs-option>
              <vs-option label="Area 5" value="Area 5"> Area 5 </vs-option>
            </vs-select>
          </div>
          <p
            style="
              display: flex;
              justify-content: space-between;
              font-weight: bold;
              margin-top: 15px;
            "
          >
            <span>Total: </span><span>300 OMR</span>
          </p>
          <p style="margin-top: 15px; font-size: 0.89rem">
            Mobile Number(WhatsApp)
          </p>
          <vs-input
            type="text"
            v-model="mobileNo"
            placeholder="whatsApp number"
            class="square block"
          />
          <p style="margin-top: 15px; font-size: 0.89rem">
            Secondary Mobile Number(Optional)
          </p>
          <vs-input
            type="text"
            v-model="mobileNo2"
            placeholder="secondary mobile number"
            class="square block"
          />
          <p style="margin-top: 15px; font-size: 0.89rem">
            Email Address(Optional)
          </p>
          <vs-input
            type="text"
            v-model="email"
            placeholder="email address"
            class="square block"
          />
          <vs-button
            dark
            block
            style="margin: 0; margin-top: 25px"
            size="large"
          >
            Place Order
          </vs-button>
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
      shipping: "",
      mobileNo: "",
      mobileNo2: "",
      email: "",
    };
  },
  created(){
  }
};
</script>

<style scoped>
.product_container {
  display: grid;
  grid-template-rows: auto;
  gap: 10px 10px;
}

.cart_product {
  display: grid;
  grid-template-columns: min-content 1fr 1fr 1fr 0.5fr;
  gap: 0px 0px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  min-height: 100px;
  place-content: center;
  overflow: hidden;
}

.flex_center {
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 9rem;
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

.remove-icon {
  fill: #2c3e50;
  transition: all 0.5s;
}

.remove-icon:hover {
  fill: red;
  cursor: pointer;
}

.order-summary {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 15px;
}
</style>