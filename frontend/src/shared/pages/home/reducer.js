import createReducer from 'Redux/initializer'
import { initialState, actionTypes } from './constant'

const {
  GET_PRODUCTS, GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, SET_PRODUCTS,
} = actionTypes

export default createReducer(initialState, {
  [GET_PRODUCTS]: (state, { result }) => ({
    ...state,
    products: result,
    isGetProductError: false,
    isGetProductLoading: false,
  }),
  [GET_PRODUCTS_LOADING]: state => ({
    ...state,
    isGetProductError: false,
    isGetProductLoading: true,
  }),
  [GET_PRODUCTS_ERROR]: state => ({
    ...state,
    isGetProductLoading: false,
    isGetProductError: true,
  }),
  [SET_PRODUCTS]: (state, payload) => ({
    ...state,
    products: payload,
    isGetProductLoading: false,
    isGetProductError: false,
  }),
})
