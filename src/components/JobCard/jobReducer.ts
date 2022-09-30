import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'

type JobState = {
  favoriteJobs: number[]
}

const initialState: JobState = {
  favoriteJobs: [],
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addFavoriteJob: (state, { payload }: PayloadAction<number>) => {
      state.favoriteJobs.push(payload)
    },
    removeFavoriteJob: (state, { payload }: PayloadAction<number>) => {
      const findFavoriteJobIndex = state.favoriteJobs.findIndex(
        favoriteJob => favoriteJob === payload
      )

      state.favoriteJobs.splice(findFavoriteJobIndex, 1)
    },
  },
})

export const { addFavoriteJob, removeFavoriteJob } = jobsSlice.actions

export const favoriteJobsStore = (state: RootState) => state.jobs.favoriteJobs

export default jobsSlice.reducer
