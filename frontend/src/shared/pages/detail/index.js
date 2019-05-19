import { connect } from 'react-redux'

import Detail from './units'
import { getProductDetail } from './function'

const mapStateToProps = ({ detail }, { match: { params: { id } } }) => {
  const { product, isGetProductLoading } = detail[id] || detail.default

  return ({
    product,
    isGetProductLoading,
  })
}

const mapDispatchToProps = (dispatch, { match: { params: { id } } }) => ({
  getProductDetail: () => dispatch(getProductDetail(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
