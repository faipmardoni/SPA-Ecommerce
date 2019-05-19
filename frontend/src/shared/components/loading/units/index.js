import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = {
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
  },
}

const Loading = ({
  classes,
}) => (
  <div className={classes.root}>
    <LinearProgress />
  </div>
)

Loading.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Loading)
