import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
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
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid icon={<img src={require('./images/sedan.jpg').default} alt="Trulli" width="155" height="125"/>}  title="Pune to Mumbai pacek Sedan onwe 2499 all include Kalyan to Mumbai airport " btnTitle="Book Now"/>
        <Grid icon={<img src={require('./images/sedan.jpg').default} alt="Trulli" width="155" height="125"/>}  title="1500 all including Mumbai airport to Kalyan dombivali amarnath 1500 all including" btnTitle="Book Now"/>
        <Grid icon={<img src={require('./images/sedan.jpg').default} alt="Trulli" width="155" height="125"/>}  title="Mumbai to Pune Sedan 2499 all including suv 2999 all including Mumbai airport to Kalyan dombivali amarnath suv  1899 all including" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
        <Grid icon={<img src={require('./images/ertiga.jpg').default} alt="Trulli" width="155" height="125"/>}  title="Kalyan dombivali amarnath Thane to out station package  4+1 Sedan 12 rupees per km 300 par days package call parking extra" btnTitle="Book Now"/>
        <Grid icon={<img src={require('./images/ertiga.jpg').default} alt="Trulli" width="155" height="125"/>}  title=" and 6+1 SUV 15 rupees per kilometre toll parking extra" btnTitle="Book Now"/>
        <Grid icon={<img src={require('./images/ertiga.jpg').default} alt="Trulli" width="155" height="125"/>}  title="Pune Nashik to out station package  4+1 Sedan 12 rupees per km 300 par days package call parking extra and 6+1 SUV 15 rupees per kilometre toll parking extra" btnTitle="Book Now"/>
         </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
