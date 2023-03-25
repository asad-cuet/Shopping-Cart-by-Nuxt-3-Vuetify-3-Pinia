<template>

    <div>
    Cart
    </div>
</template>

<script setup>
import {useCart} from '@/stores/cart.js'
const cartStore=useCart()

console.log(cartStore.formattedCart)

</script>