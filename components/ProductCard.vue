<template>

    <v-card class="mx-auto pb-2">

        <v-img :src="product.image" height="200px" cover>
            <template v-slot="placeholder">
                <v-row align="center" class="fill-height ma-0" justify="center">
                    <v-progres-circular class="grey lighten-5" indeterminate>
                    
                    </v-progres-circular>
                </v-row>
            </template>
        </v-img>

        <v-card-title class="text-capitalize">
            {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
            ${{ product.price }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="primary">Read More</v-btn>

            <v-spacer></v-spacer>
            
            <v-btn class="bg-primary" @click="cartStore.addToCart(product.id)">
                Add to Cart
            </v-btn>

        </v-card-actions>

</v-card>

</template>

<script setup>
import {useCart} from '@/stores/cart.js'
const {product}=defineProps(['product'])
const cartStore=useCart()

</script>