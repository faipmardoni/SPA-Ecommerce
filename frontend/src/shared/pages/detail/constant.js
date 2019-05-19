export const initialState = {
  default: {
    product: {
      availableSize: [],
      detail: {
        colors: [],
        description: '',
        isCanTryedAndReturned: false,
        mainIngredient: '',
        saved: 0,
        sizeGuide: '',
      },
      harga: 0,
      image: 'data:image/png;base64,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',
      name: '',
    },
    isGetProductLoading: false,
    isGetProductError: false,
    errorMessageGetProduct: '',
  },
}

export const actionTypes = {
  GET_PRODUCT: 'DETAIL/GET_PRODUCT',
  GET_PRODUCT_LOADING: 'DETAIL/GET_PRODUCT_LOADING',
  GET_PRODUCT_ERROR: 'DETAIL/GET_PRODUCT_ERROR',
}

export const Title = {
  CAN_TRYED: 'Bisa Coba Dulu',
  MAIN_INGREDIENT: 'Bahan Utama',
  AVAILABLE_COLORS: 'Warna yang tersedia',
  AVAILABLE_SIZES: 'Ukuran yang tersedia',
  DETAIL: 'Detail',
  SIZE_GUIDED: 'Panduan Ukuran',
  CAN_TRYED_AND_RETURNED: 'Produk bisa dicoba dan dikembalikan',
}
