/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access: '',
  refresh: '',
  user: '',
}

export const authTokenSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      const { access, refresh, user } = action.payload ?? initialState
      state.access = access
      state.refresh = refresh
      state.user = user
    },
  },
})

export const { setAuth } = authTokenSlice.actions

export default authTokenSlice.reducer