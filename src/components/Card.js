import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sedan from '../images/sedan.jpg'
import ertiga from '../images/ertiga.jpg'
import CustomBtn from './CustomBtn'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const data = {
    name: [
      { title: "Pune <> Mumbai", content: "Pune to Mumbai pack Sedan only 2499", image:sedan },
      { title: "Mumbai Airport <> Kalyan/Dombivali/Ambernath", content: "1500 all including Mumbai airport to Kalyan dombivali ambarnath 1500 all including", image:ertiga},
      { title: "Mumbai <> Pune", content: "Mumbai to Pune Sedan 2499 all including suv 2999 all including Mumbai airport to Kalyan dombivali amarnath suv  1899 all including", image:ertiga },
      { title: "Thane <> Outstation", content: "Kalyan dombivali amarnath Thane to out station package  4+1 Sedan 12 rupees per km 300 par days package call parking extra", image:sedan },
      { title: "by KM", content: "6+1 SUV 15 rupees per kilometre toll parking extra", image:sedan },
      { title: "Pune <> Nashik", content: "Pune Nashik to out station package  4+1 Sedan 12 rupees per km 300 par days package call parking extra and 6+1 SUV 15 rupees per kilometre toll parking extra", image:sedan },
    ],
    id: [1, 2, 3, 4]
  };

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>


    <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >


{data.name.map((elem) => (
    <Grid item xs={3} key={data.name.indexOf(elem)}>
        <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${elem.image}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {` ${elem.title}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {` ${elem.content}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
      <CustomBtn  txt="Book"/>
        
      </CardActions>
    </Card>
    </Grid>
          ))}
    </Grid>
    </>
  );
}
