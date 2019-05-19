import { connect } from 'react-redux'

import ProductCard from './units'
// import { getProducts } from './function'

const mapStateToProps = (state, props) => {
  const product = state.home.products[props.index]

  return {
    product,
  }
}

export default connect(mapStateToProps, null)(ProductCard)
