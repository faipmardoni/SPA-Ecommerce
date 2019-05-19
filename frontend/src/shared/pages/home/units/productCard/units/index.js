import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'

import { convertToRupiah } from 'Helper'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  card: {
    width: '100%',
  },
  media: {
    objectFit: 'cover',
  },
  fab: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
})

function ProductCard({
  classes,
  product: {
    id, item: {
      name, image, harga, availableSize,
    },
  },
  linkTo,
}) {
  const goToDetail = () => {
    linkTo(`/product/${id}`)
  }

  return (
    <Card className={classes.card} id={id}>
      <CardActionArea onClick={goToDetail}>
        <CardMedia
          component="img"
          alt={name}
          className={classes.media}
          height="auto"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Paper className={classes.root}>
            {availableSize.map(data => (
              <Chip
                key={data}
                label={data.toUpperCase()}
                className={classes.chip}
              />
            ))}
          </Paper>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography gutterBottom variant="h6">
          {convertToRupiah(harga)}
        </Typography>
        <Fab
          color="secondary"
          variant="extended"
          aria-label="Detail"
          className={classes.fab}
          onClick={goToDetail}
        >
          More Detail
        </Fab>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  linkTo: PropTypes.func.isRequired,
}

export default withStyles(styles)(ProductCard)
