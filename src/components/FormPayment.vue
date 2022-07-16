<template>
  <div style="display: contents">
      <!-- 表單第三部分 -->
      <div class="form-section" v-show="currentStep === 3">
        <h3 class="title col-sm-1-13">付款資訊</h3>
        <div class="col-sm-1-9">
          <label for="input-cardname">持卡人姓名</label>
          <input
            type="text"
            name="input-cardname"
            id="input-cardname"
            placeholder="John Doe"
          />
        </div>
        <div class="col-sm-1-9">
          <label for="input-cardnumber">卡號</label>
          <input
            type="tel"
            name="input-cardnumber"
            id="input-cardnumber"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div class="col-sm-1-7">
          <label for="input-cardvalid">有限期限</label>
          <input
            type="tel"
            name="input-cardvalid"
            id="input-cardvalid"
            placeholder="MM/YY"
          />
        </div>
        <div class="col-sm-7-13">
          <label for="input-cardverification">CVC / CCV</label>
          <input
            type="tel"
            name="input-cardverification"
            id="input-cardverification"
            placeholder="123"
          />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentStep: 1
    }
  }
}
</script>
