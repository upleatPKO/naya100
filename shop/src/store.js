import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    changeCart(state){
      return state + 1
    },
    addCart(state, action){
      let itemNo = state.findIndex((e) => { return e.id === action.payload })
      state[itemNo].count++
    },
    addItem(state, action){
      state.push(action.payload)
    },
  }
})

export let { changeCart, addCart, addItem } = cart.actions

export default configureStore({
  reducer: { 
    user: user.reducer,
    cart: cart.reducer
  }
}) 