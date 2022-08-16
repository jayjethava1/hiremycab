import { createMuiTheme, createStyles,ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Card from './components/Card'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);




function App() {
  const classes = useStyles(); 

  return (
    <div className="App">
        <NavBar></NavBar>
        <Container>
        <img src={require('./intro-bg.jpg').default} alt="Trulli" width="600" height="320"/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At Hiremycab.com we are passionate about serving cab service to customers in Mumbai and Pune
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Clean Car
Sanitised Post-Ride    Professionally Cleaned    Odour-Free

Transparent Billing
Simple pricing    No Night Charges    No Driver Charges

Reliable Service
Immediate Driver details    On Time    Thousands of Cabs
   </Typography>
        </div>
        <p></p>

        <Card></Card>
        </Container>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
