import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    start: null,
    end: null,
    guests: 1
  },
  reducers: {
    changeGuests: (state, action) => {
        state.guests = action.payload
    },
    changeStartDate: (state, action) => {
        state.start = action.payload
    },
    changeEndDate: (state, action) => {
        state.end = action.payload
    },
  }
})

export const { changeEndDate, changeStartDate, changeGuests } = appSlice.actions
export default appSlice.reducer