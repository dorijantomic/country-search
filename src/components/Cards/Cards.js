import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    maxWidth: 345,
    maxHeight: '100%'
  },
  paper: {
      background: theme.palette.primary.main
  },
  cardsContainer: {
      display: 'flex',
      maxWidth: '100%',
      flexFlow: 'row wrap',
      justifyContent: 'center'
  }
});
const Cards = (props) => {


  const {classes} = props

  return (
      <div className={classes.cardsContainer}>

  
    <Card className={classes.card} classes={{root: classes.paper}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" color='textPrimary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="textPrimary">
          Share
        </Button>
        <Button size="small" color="default">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card} classes={{root: classes.paper}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" color='textPrimary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="textPrimary">
          Share
        </Button>
        <Button size="small" color="default">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card} classes={{root: classes.paper}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" color='textPrimary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="textPrimary">
          Share
        </Button>
        <Button size="small" color="default">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card} classes={{root: classes.paper}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color='textPrimary'>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" color='textPrimary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="textPrimary">
          Share
        </Button>
        <Button size="small" color="default">
          Learn More
        </Button>
      </CardActions>
    </Card>
     </div>
  );
}

export default withStyles(styles)(Cards)