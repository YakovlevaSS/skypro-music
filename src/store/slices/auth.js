/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit'

const AUTH_INFO = 'auth'

function getAuthFromLocalStorage () {
  try {
    return JSON.parse(localStorage.getItem(AUTH_INFO ))
  } catch (error) {
    console.error(error)
    return null
  }
  
}
const initialState = {
  access: '',
  refresh: '',
  user: '',
}

export const authTokenSlice = createSlice({
  name: 'auth',
  initialState: getAuthFromLocalStorage() ?? initialState,

  reducers: {
    setAuth: (state, action) => {
      const { access, refresh, user } = action.payload ?? initialState
      state.access = access
      state.refresh = refresh
      state.user = user

      localStorage.setItem(AUTH_INFO, JSON.stringify(state))
    },
  },
})

export const { setAuth } = authTokenSlice.actions

export default authTokenSlice.reducer