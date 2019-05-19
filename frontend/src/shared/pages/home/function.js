import { actionTypes } from './constant'

const {
  GET_PRODUCTS, GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, SET_PRODUCTS,
} = actionTypes

export const getProducts = () => dispatch => {
  dispatch({
    type: [GET_PRODUCTS_LOADING, GET_PRODUCTS, GET_PRODUCTS_ERROR],
    shuttle: {
      path: 'app/products',
      method: 'GET',
    },
  })
}

export const getMoreProducts = cb => dispatch => {
  dispatch({
    type: [GET_PRODUCTS_LOADING, '', GET_PRODUCTS_ERROR],
    shuttle: {
      path: 'app/products',
      method: 'GET',
    },
    nextAction: (res, err) => {
      cb(res, err)
    },
  })
}

export const setProducts = items => (dispatch, getState) => {
  const { products } = getState().home
  dispatch({
    type: SET_PRODUCTS,
    payload: [...products, ...items],
  })
}
