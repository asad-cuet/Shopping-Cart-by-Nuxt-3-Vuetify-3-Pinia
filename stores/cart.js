import { defineStore } from 'pinia'


export const useCart = defineStore('cart', {

    state: () => ({
       cartContent: {},
       products:{}
    }),

    getters: {
        formattedCart(state)
        {
            return Object.keys(state.cartContent).map(product_id => {
                const product=state.cartContent[product_id]
                const {data:_products}=useFetch('https://fakestoreapi.com/products')

                return {
                  id: product.product_id,
                  name:_products.find((p)=>{ return p.id === product.product_id}).title,
                  image:_products.find((p)=>{  return p.id === product.product_id}).image,
                  price:_products.find((p)=>{ return p.id === product.product_id}).price,
                  quantity: product.quantity,
                  cost:
                      product.quantity * _products.find((p)=>{ return p.id === product.product_id}).price
                }
            })
        }
    },

    actions: {
      addToCart(product_id) {
        if(this.cartContent.hasOwnProperty(product_id))
        {
            this.cartContent[product_id]=
            {
                product_id,
                quantity: this.cartContent[product_id].quantity+1
            }
        }
        else
        {
          this.cartContent[product_id]=
            {
                product_id,
                quantity: 1
            }
        }
      },
      async loadProducts()
      {
        if(!this.products.length)
        {
          const {data:_products}=await useFetch('https://fakestoreapi.com/products')
          this.products=_products
        }
      }
    },
    persist: true,

  })
  