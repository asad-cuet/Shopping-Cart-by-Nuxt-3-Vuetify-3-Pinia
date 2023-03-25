<template>
    <div>
        <v-row class="my-5">
            <v-col cols="12">
                <v-btn @click="grid=!grid" :class="{'bg-primary':grid}">
                    <v-icon>mdi-view-list</v-icon>
                </v-btn>
                <v-btn @click="grid=!grid" :class="{'bg-primary':!grid}" class="ml-3">
                    <v-icon>mdi-apps</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="my-5">
            <v-col cols="12">
                <v-row v-show="grid">
                    <!--Loop from here  -->
                    <v-col v-for="product in products" :key="product.id" cols="12" lg="4" sm="6">  

                        <ProductCard :product="product"/>

                    </v-col>
                    
                </v-row>
            </v-col>
        </v-row>
    </div>
  </template>
  
<script setup>
    const {data:products}=await useFetch('https://fakestoreapi.com/products')

    useHead({
        title:"Products"
    })
    const grid=ref(true)
</script>
  
<style lang="scss">

</style>