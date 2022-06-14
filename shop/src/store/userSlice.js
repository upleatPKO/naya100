import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: {name: 'kim', age: 20},
  reducers: {
    changeName(state){
      //return {name: 'park', age: 20}
      state.name = 'park'
    },
    increase(state, action){ //action은 파라미터
      state.age += action.payload
    }
  }
})

export let { changeName, increase } = user.actions

export default user;