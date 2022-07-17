export const priceFilter = {
  filters: {
    formatPrice (price) {
      if (price === 0) {
        return '免費'
      } else {
        price = price.toString()
        if (price.length > 3) {
          // 如果超過3位數，將每項商品價格開頭加上[$]，從末尾往前數第三格之前加上[,]
          const formattedPrice = '$' + price.slice(0, price.length - 3) + ',' + price.slice(-3)
          return formattedPrice
        } else {
          // 小於3位數者，只需在價格開頭加上[$]
          const formattedPrice = '$' + price
          return formattedPrice
        }
      }
    }
  }
}
