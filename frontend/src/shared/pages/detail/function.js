import { actionTypes } from './constant'

const { GET_PRODUCT, GET_PRODUCT_LOADING, GET_PRODUCT_ERROR } = actionTypes

export const getProductDetail = id => dispatch => {
  dispatch({
    type: [GET_PRODUCT_LOADING, GET_PRODUCT, GET_PRODUCT_ERROR],
    shuttle: {
      path: `app/products/${id}`,
      method: 'GET',
    },
    id,
  })
}
