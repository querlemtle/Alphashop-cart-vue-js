<template>
  <div style="display: contents;">
    <h3 class="title title-lg col-12">結帳</h3>
    <div class="progress">
      <div class="stepper-wrapper col-12">
        <div class="step"
        :class="{ active: initialCurrentStep === 1, checked: initialCurrentStep > 1 }">
          <div class="step-circle"></div>
          <span class="step-title">寄送地址</span>
        </div>
        <span class="step-connect"></span>
        <div class="step"
        :class="{ disabled: initialCurrentStep < 2, active: initialCurrentStep === 2, checked: initialCurrentStep > 2 }">
          <div class="step-circle"></div>
          <span class="step-title">運送方式</span>
        </div>
        <span class="step-connect"></span>
        <div class="step"
        :class="{ disabled: initialCurrentStep < 3, active: initialCurrentStep === 3, checked: initialCurrentStep > 3 }">
          <div class="step-circle"></div>
          <span class="step-title">付款資訊</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    // Checkout.vue 接收的 currentStep
    initialCurrentStep: {
      type: Number,
      required: true
    }
  }
}
</script>
