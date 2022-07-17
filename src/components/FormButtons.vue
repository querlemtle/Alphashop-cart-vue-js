<template>
  <!-- 表單控制按鈕 -->
  <div class="button-container">
    <button
    v-if="currentStep > 1"
    class="btn btn-previous cursor-pointer"
    @click.prevent.stop="changeStep('prev')"
    >
    ← 上一步
    </button>
    <button
    v-if="currentStep < steps"
    class="btn btn-next cursor-pointer"
    @click.prevent.stop="changeStep('next')"
    >
    下一步 →
    </button>
    <button
    v-if="currentStep === steps"
    class="btn btn-next cursor-pointer"
    >
    確認下單
    </button>
  </div>
</template>

<script>
export default {
  name: 'FormButtons',
  props: {
    // Checkout.vue 接收的 currentStep
    initialCurrentStep: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentStep: this.initialCurrentStep,
      steps: 3
    }
  },
  methods: {
    changeStep (dir) {
      // 根據帶入的方向，決定上/下一步
      // 並射出更改後的 currentStep 給 Checkout.vue
      if (dir === 'next') {
        if (this.currentStep < 3) {
          this.currentStep++
        }
        this.$emit('change-step', this.currentStep)
      } else if (dir === 'prev') {
        if (this.currentStep > 1) {
          this.currentStep--
        }
        this.$emit('change-step', this.currentStep)
      }
    }
  }
}
</script>
