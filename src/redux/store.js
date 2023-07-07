import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slice/product'

const store = configureStore({
  reducer : { 
    product: productReducer
  }
})

export default store