<template>
  <!-- 表單第二部分 -->
  <div class="form-section" data-section="radio">
    <h3 class="title col-sm-1-13">運送方式</h3>
    <div
      class="radio-option col-sm-1-13"
      v-for="option in options"
      :key="option.id"
    >
      <input
        type="radio"
        name="input-transportation"
        id="input-transportation"
        class="input-radio"
        :value="option.value"
        v-model="checkedOption"
        @change="handleRadioChanged(option.price)"
      />
      <div class="option-title">
        <label for="input-transportation">{{ option.name }}</label>
        <p class="transportation-time">{{ option.duration }}</p>
      </div>
      <span class="transportation-price">{{ option.price | formatPrice }}</span>
    </div>
  </div>
</template>

<script>
import { priceFilter } from '../utils/priceFilter'

const dummyOptions = [
  {
    name: '標準運送',
    value: 'free',
    id: 1,
    duration: '約 3~7 個工作天',
    price: 0,
    checked: true
  },
  {
    name: 'DHL 貨運',
    value: '500',
    id: 2,
    duration: '48 小時內送達',
    price: 500,
    checked: false
  }
]

export default {
  name: 'FormShipping',
  mixins: [priceFilter],
  data () {
    return {
      options: [],
      checkedOption: 'free'
    }
  },
  created () {
    this.options = dummyOptions
  },
  methods: {
    handleRadioChanged (price) {
      // 將option.price射出給 Checkout.vue
      this.$emit('select-shipping-fee', price)
    }
  }
}
</script>
