import createReducer from 'Redux/initializer'
import { initialState, actionTypes } from './constant'

const { GET_PRODUCT, GET_PRODUCT_LOADING, GET_PRODUCT_ERROR } = actionTypes

export default createReducer(initialState, {
  [GET_PRODUCT]: (state, { id, result }) => ({
    ...state,
    [id]: {
      product: result.item,
      isGetProductError: false,
      isGetProductLoading: false,
    },
  }),
  [GET_PRODUCT_LOADING]: (state, { id }) => ({
    ...state,
    [id]: {
      product: { ...initialState.default.product },
      isGetProductError: false,
      isGetProductLoading: true,
    },
  }),
  [GET_PRODUCT_ERROR]: (state, { id }) => ({
    ...state,
    [id]: {
      product: { ...initialState.default.product },
      isGetProductLoading: false,
      isGetProductError: false,
    },
  }),
})
