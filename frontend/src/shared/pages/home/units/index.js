import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Navbar from 'Component/navbar'
import Layout from 'Component/layouts'
import Loading from 'Component/loading'
import ProductCard from './productCard'

const Home = ({
  getProducts, products, history, isGetProductLoading, handleMoreProduct,
}) => {
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
    !isGetProductLoading && handleMoreProduct()
  }

  useEffect(() => {
    getProducts()
    typeof window !== 'undefined' && window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isGetProductLoading && <Loading />}
      <Navbar />
      <Layout>
        {products.map((product, index) => (
          <ProductCard key={product.id + Math.random()} index={index} linkTo={history.push} />
        ))}
      </Layout>
    </>
  )
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isGetProductLoading: PropTypes.bool.isRequired,
  handleMoreProduct: PropTypes.func.isRequired,
}

export default Home
