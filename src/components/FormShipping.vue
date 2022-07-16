<template>
  <div style="display: contents">
      <!-- 表單第二部分 -->
      <div class="form-section" data-section="radio" v-show="currentStep === 2">
        <h3 class="title col-sm-1-13">運送方式</h3>
        <div class="radio-option col-sm-1-13">
          <input
            type="radio"
            name="input-transportation"
            id="input-transportation"
            class="input-radio"
            checked
          />
          <div class="option-title">
            <label for="input-transportation">標準運送</label>
            <p class="transportation-time">約 3~7 個工作天</p>
          </div>
          <span class="transportation-price">免費</span>
        </div>

        <div class="radio-option col-sm-1-13 disabled">
          <input
            type="radio"
            name="input-transportation"
            id="input-transportation"
            class="input-radio"
          />
          <div class="option-title">
            <label for="input-transportation">DHL 貨運</label>
            <p class="transportation-time">48 小時內送達</p>
          </div>
          <span class="transportation-price">$500</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FormShipping',
  data () {
    return {

    }
  }
}
</script>
