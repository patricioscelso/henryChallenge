// import React from 'react'

// export default function Producto ({item}){

//     console.log(item)
// return(
//     <div>
//         <p>
//            {item.title} 
//         </p>
//         <p>
//            {item.price} 
//         </p>
//         <p>
//            {item.condition} 
//         </p>
//         <p>
//            {item.available_quantity} 
//         </p>
//         <img src={item.thumbnail}></img>
//     </div>
// )


// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Producto ({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.thumbnail}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {item.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {item.condition}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {item.available_quantity}
          </Typography>
        
        
        
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}