import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Chip from '@material-ui/core/Chip'

import { convertToRupiah } from 'Helper'

import Layout from 'Component/layouts'
import Loading from 'Component/loading'
import Navbar from 'Component/navbar'
import Banner from './banner'

import { Title } from '../constant'

const {
  AVAILABLE_COLORS, AVAILABLE_SIZES, CAN_TRYED, CAN_TRYED_AND_RETURNED, DETAIL, MAIN_INGREDIENT, SIZE_GUIDED,
} = Title

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    display: 'flex',
    margin: '1rem auto',
  },
  icon: {
    marginRight: '.25rem',
  },
  divider: {
    marginBottom: '1rem',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
})

const Detail = ({
  getProductDetail,
  product: {
    name, image, harga, detail: {
      colors,
      mainIngredient,
      description,
      sizeGuide,
      isCanTryedAndReturned,
    },
    availableSize,
  },
  classes,
  isGetProductLoading,
}) => {
  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <>
      {isGetProductLoading && <Loading />}
      <Navbar />
      <Layout>
        <Banner />
        <img src={image} alt={name} title={name} className={classes.image} />
        <Typography gutterBottom variant="h5" color="textSecondary">
          {name}
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              {convertToRupiah(harga)}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant="h6" align="right">
              <CheckCircle className={classes.icon} />
              {CAN_TRYED}
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h6">
          {MAIN_INGREDIENT}
          <br />
          {mainIngredient}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h6">
          {AVAILABLE_COLORS}
        </Typography>
        {colors.map(data => (
          <Chip
            key={data}
            label={data.toUpperCase()}
            className={classes.chip}
          />
        ))}
        <Divider className={classes.divider} />
        <Typography variant="h6">
          {AVAILABLE_SIZES}
        </Typography>
        {availableSize.map(data => (
          <Chip
            key={data}
            label={data.toUpperCase()}
            className={classes.chip}
          />
        ))}
        <Divider className={classes.divider} />
        <Typography variant="h6">
          {DETAIL}
        </Typography>
        {description}
        <Divider className={classes.divider} />
        <Typography variant="h6">
          {SIZE_GUIDED}
        </Typography>
        {sizeGuide}
        <Divider className={classes.divider} />
        <Typography variant="h6">
          {CAN_TRYED_AND_RETURNED}
        </Typography>
        {isCanTryedAndReturned ? 'YA' : 'TIDAK'}
      </Layout>
    </>
  )
}

Detail.propTypes = {
  getProductDetail: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  isGetProductLoading: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Detail)
