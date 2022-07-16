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
      <p class="info-text">免費</p>
    </div>
    <div class="info-panel">
      <p class="info-title">小計</p>
      <p class="info-text">{{ getTotalPrice | formatPrice }}</p>
    </div>
  </section>
</template>

<script>
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
  data () {
    return {
      cartsItem: []
    }
  },
  created () {
    this.cartsItem = dummyProducts
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
  filters: {
    // 將每項商品價格開頭加上[$]，從末尾往前數第三格之前加上[,]
    formatPrice (price) {
      if (!price) return
      price = price.toString()
      const formattedPrice = '$' + price.slice(0, price.length - 3) + ',' + price.slice(-3)
      return formattedPrice
    },
    formatShippingFee (price) {
      return price === 0 ? '免費' : price
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
