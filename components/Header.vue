<template>
    <div>
        <v-app-bar>
            <v-toolbar-title @click="$router.push('/')">
                Shopping Websie
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn @click="$router.push('/cart')" clsss="text-none" stacked>
                <v-badge :content="9" color="error">
                    <v-icon>mdi-cart-outline</v-icon>
                </v-badge>
            </v-btn>

            <!-- <v-btn :prepend-icon="theme==='light'?'mdi-weather-sunny':'mdi-weather-night'">
                Toggle Theme
            </v-btn> -->
            <v-btn prepend-icon="mdi-weather-sunny">
                Toggle Theme
            </v-btn>
            
        </v-app-bar>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss">
  
  </style>