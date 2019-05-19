import { connect } from 'react-redux'

import Home from './units'
import { getProducts, getMoreProducts, setProducts } from './function'

const mapStateToProps = ({ home: { products, isGetProductLoading } }) => ({
  products,
  isGetProductLoading,
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  handleMoreProduct: () => dispatch(getMoreProducts(res => {
    dispatch(setProducts(res))
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
