import { configureStore } from '@reduxjs/toolkit'
import newsSlice from '../features/newsSlice.js'
import boardSlice from '../features/boardSlice.js'
import coinSlice from '../features/coinSlice.js'
import userSlice from '../features/userSlice.js'
import adminSlice from '../features/adminSlice.js'
import authSlice from '../features/authSlice.js'

const store = configureStore({
   reducer: {
      news: newsSlice,
      coin: coinSlice,
      board: boardSlice,
      user: userSlice,
      admin: adminSlice,
      auth: authSlice,
   },
})

export default store
