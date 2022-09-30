import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from '@/components/JobCard/jobReducer'

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
