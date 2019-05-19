import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = () => ({
  banner: {
    marginBottom: '1rem',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    borderRadius: '4px',
    padding: '1rem .25rem',
    textAlign: 'center',
    background: 'lightblue',
  },
})

const Banner = ({ classes }) => (
  <Grid container spacing={8} className={classes.banner}>
    <Grid item xs>
      COBA DULU
      <br />
      BARU BAYAR
    </Grid>
    <Grid item xs>
      COD
      <br />
      SE-INDONESIA
    </Grid>
    <Grid item xs>
      GARANSI
      <br />
      30 HARI
    </Grid>
  </Grid>
)

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Banner)
