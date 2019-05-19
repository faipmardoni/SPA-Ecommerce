export const initialState = {
  products: [],
  isGetProductLoading: false,
  isGetProductError: false,
  errorMessageGetProduct: '',
}

export const actionTypes = {
  GET_PRODUCTS: 'HOME/GET_PRODUCTS',
  GET_PRODUCTS_LOADING: 'HOME/GET_PRODUCTS_LOADING',
  GET_PRODUCTS_ERROR: 'HOME/GET_PRODUCTS_ERROR',
  SET_PRODUCTS: 'HOME/SET_PRODUCTS',
}
