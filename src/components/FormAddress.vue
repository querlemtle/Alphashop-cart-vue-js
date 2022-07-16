<template>
  <div style="display: contents">
      <!-- 表單第一部分 -->
      <div class="form-section">
        <h3 class="title col-sm-1-13">寄送地址</h3>
        <div class="col-sm-1-6 col-lg-1-5">
          <label for="select-title">稱謂</label>
          <select name="input-name" id="select-title">
            <option value="先生">先生</option>
            <option value="小姐">小姐</option>
          </select>
        </div>
        <div class="col-sm-7-13 col-lg-5-13">
          <label for="input-name">姓名</label>
          <input
            type="text"
            name="input-name"
            id="input-name"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="col-sm-1-13 col-lg-1-7">
          <label for="input-phone">電話</label>
          <input
            type="tel"
            name="input-phone"
            id="input-phone"
            placeholder="請輸入行動電話"
          />
        </div>
        <div class="col-sm-1-13 col-lg-7-13">
          <label for="input-email">Email</label>
          <input
            type="email"
            name="input-email"
            id="input-email"
            placeholder="請輸入電子郵件"
          />
        </div>
        <div class="col-sm-1-13 col-lg-1-5">
          <label for="input-city">縣市</label>
          <select name="input-city" id="input-city">
            <option value="null" selected disabled hidden>請選擇縣市</option>
            <option v-for="city in cities" :key="city.id" :value="city.name">
              {{ city.name }}
            </option>
          </select>
        </div>
        <div class="col-sm-1-13 col-lg-5-13">
          <label for="input-address">地址</label>
          <input
            type="text"
            name="input-address"
            id="input-address"
            placeholder="請輸入地址"
          />
        </div>
      </div>
  </div>
</template>

<script>
const dummyCities = [
  {
    id: 1,
    name: '台北市'
  },
  {
    id: 2,
    name: '新北市'
  },
  {
    id: 3,
    name: '台中市'
  },
  {
    id: 4,
    name: '台南市'
  },
  {
    id: 5,
    name: '高雄市'
  }
]

export default {
  name: 'FormAddress',
  data () {
    return {
      cities: []
    }
  },
  created () {
    this.cities = dummyCities
  }
}
</script>
