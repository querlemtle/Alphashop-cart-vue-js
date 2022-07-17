<template>
  <section class="card">
    <h3 class="title card-title">購物籃</h3>
    <div v-for="product in cartsItem" :key="product.id" class="item-panel" :data-id="product.id">
      <img :src="product.image" :alt="product.name" class="card-img" />
      <div class="item-detail-wrapper" :data-id="product.id">
        <p class="card-item">{{ product.name }}</p>
        <div class="card-buttons" :data-id="product.id">
          <button class="btn-minus cursor-pointer" @click.prevent.stop="decreaseAmount(product)">-</button>
          <span class="amount">{{ product.amount }}</span>
          <button class="btn-plus cursor-pointer" @click.prevent.stop="increaseAmount(product)">+</button>
        </div>
        <p class="price">{{ product.price * product.amount | formatPrice }}</p>
      </div>
    </div>

    <div class="info-panel">
      <p class="info-title">運費</p>
      <p class="info-text">{{ initialShippingFee | formatPrice }}</p>
    </div>
    <div class="info-panel">
      <p class="info-title">小計</p>
      <p class="info-text">{{ getTotalPrice | formatPrice }}</p>
    </div>
  </section>
</template>

<script>
import { priceFilter } from '../utils/priceFilter'

const dummyProducts = [
  {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    price: 3999,
    image: require('./../assets/product_1@2x.png'),
    amount: 1
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    price: 1299,
    image: require('./../assets/product_2@2x.png'),
    amount: 1
  }
]

export default {
  name: 'Cart',
  props: {
    // 從 Checkout.vue 接收的 FormShippingFee
    initialShippingFee: {
      type: Number,
      required: true
    }
  },
  mixins: [priceFilter],
  data () {
    return {
      cartsItem: [],
      shippingFee: 0
    }
  },
  created () {
    this.cartsItem = dummyProducts
    this.shippingFee = this.initialShippingFee
  },
  methods: {
    increaseAmount (product) {
      product.amount++
    },
    decreaseAmount (product) {
      if (product.amount <= 1) return
      product.amount--
    }
  },
  computed: {
    getTotalPrice: function () {
      let total = 0
      for (const item of this.cartsItem) {
        total = total + item.price * item.amount
      }
      return total
    }
  }
}
</script>
