<template>
  <main class="main">
    <Stepper />
    <form>
      <FormAddress />
      <FormShipping />
      <FormPayment />
      <FormButtons />
    </form>
    <Cart />
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
  components: {
    Stepper,
    Cart,
    FormAddress,
    FormShipping,
    FormPayment,
    FormButtons
  }
}

</script>
