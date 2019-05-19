import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    minHeight: '100vh',
  },
})

const Layout = ({
  children, classes,
}) => (
  <Paper className={classes.paper}>
    {children}
  </Paper>
)

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Layout)
