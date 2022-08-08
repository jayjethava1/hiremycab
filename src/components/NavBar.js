import React from 'react'
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (

            
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   

<img src={require('../images/logo.png').default} alt="Trulli" width="230" height="155"/>
<h2><p>Book Cab Now <a href="tel:9975291212">9975 291 212</a>.</p></h2>
            
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Trial Our Product"/>
            </Toolbar>
    )
}

export default NavBar
