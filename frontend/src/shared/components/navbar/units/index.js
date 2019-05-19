import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { routes } from 'Config/constants'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  brand: {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  title: {
    margin: 'auto',
  },
}

function Navbar(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to={routes.root} className={classes.brand}>Salestock</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Navbar)
