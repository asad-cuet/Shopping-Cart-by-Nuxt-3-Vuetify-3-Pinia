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
                    <v-col cols="12" lg="4" sm="6">  

                        <v-card class="mx-auto pb-2">

                            <v-img src="" height="200px" cover>
                                <template v-slot="placeholder">
                                    <v-row align="center" class="fill-height ma-0" justify="center">
                                        <v-progres-circular class="grey lighten-5" indeterminate>
                                        
                                        </v-progres-circular>
                                    </v-row>
                                </template>
                            </v-img>

                            <v-card-title class="text-capitalize">
                                Product Name
                            </v-card-title>

                            <v-card-subtitle>
                                $120
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn color="primary">Read More</v-btn>

                                <v-spacer></v-spacer>
                                
                                <v-btn class="bg-primary">
                                    Add to Cart
                                </v-btn>

                            </v-card-actions>

                        </v-card>

                    </v-col>
                    
                </v-row>
            </v-col>
        </v-row>
    </div>
  </template>
  
  <script setup>
  const products=ref()
  const grid=ref(true)
  </script>
  
  <style lang="scss">
  
  </style>