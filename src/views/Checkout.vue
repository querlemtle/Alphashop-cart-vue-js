<template>
  <main class="main">
    <!-- 步驟 -->
    <Stepper
    :initialCurrentStep="currentStep"
    />
    <form>
      <!-- 表單第一部分 -->
      <FormAddress v-if="currentStep === 1"/>
      <!-- 表單第二部分 -->
      <FormShipping v-if="currentStep === 2"
      @select-shipping-fee="selectShippingFee"
      />
      <!-- 表單第三部分 -->
      <FormPayment
      v-if="currentStep === 3"/>
      <!-- 表單步驟按鈕 -->
      <FormButtons
      :initialCurrentStep="currentStep"
      @change-step="changeStep"
      />
    </form>
    <!-- 購物車 -->
    <Cart
    :initialShippingFee="FormShippingFee"
    />
  </main>
</template>

<script>
import Stepper from '../components/Stepper'
import Cart from '../components/Cart'
import FormAddress from '../components/FormAddress'
import FormShipping from '../components/FormShipping'
import FormPayment from '../components/FormPayment'
import FormButtons from '../components/FormButtons'

export default {
  name: 'Checkout',
  data () {
    return {
      currentStep: 1,
      FormShippingFee: 0
    }
  },
  components: {
    Stepper,
    Cart,
    FormAddress,
    FormShipping,
    FormPayment,
    FormButtons
  },
  methods: {
    changeStep (step) {
      // 接收來自 FormButtons.vue 的 currentStep
      this.currentStep = step
    },
    selectShippingFee (price) {
      // 接收來自 FormShipping.vue的 price
      this.FormShippingFee = price
    }
  }
}

</script>
