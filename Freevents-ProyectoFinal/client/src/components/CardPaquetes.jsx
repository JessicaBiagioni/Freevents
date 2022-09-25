import React from "react";
import { Link}  from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { addToFavs } from "../actions";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 345,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 140,
    },
  });

const CardPaquetes = ({name, price, galery_image, events, services, id, }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  const dispatch = useDispatch()

  

const product = {name, price, events, services, id, galery_image}


  const handleAddToFavs = () => {
    console.log(product, "PRODUCTARDO")
    dispatch(addToFavs(product))
  }


    return (
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          
          className={classes.media}
          image={galery_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          
        <Typography variant="h5" component="h2">
            {/* <Link style={{textDecoration:"none"}} to= '/proveedores'> */}
            <h3>{name}</h3>
            {/* </Link> */}
        </Typography>
        <Typography variant="body2" component="p">
            Servicios que incluye: {services}
            <br/>
            Precio: {price}
            <br/>
            Eventos: {events}
        </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleAddToFavs} >🧡 Añadir a favoritos</Button>
        <Link to="/detailPaquete/:id">
        <Button size="small"> + Info </Button>
        </Link>
      </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default CardPaquetes;