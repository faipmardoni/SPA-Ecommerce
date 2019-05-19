import { combineReducers } from 'redux'

import HomeReducer from 'Home/reducer'
import DetailReducer from 'Detail/reducer'

const actionTypes = {
  setIsAuthenticated: 'SET_IS_AUTHENTICATED',
}

const initialState = {
  isAuthenticated: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setIsAuthenticated:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth,
  home: HomeReducer,
  detail: DetailReducer,
})

export default rootReducer
