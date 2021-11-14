import React from 'react';

//local components
import Details from './components/Details/Details';
import Main from './components/Main/Main';


//mui
import {Grid} from "@material-ui/core";

//stylessheet
import useStyles from "./styles.js";

function App() {

 const classes = useStyles();

  return (
    <Grid  className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{height:"100vh"}}>
       <Grid item xs={12} sm={4}>
          <Details title="Income"/>
       </Grid>

       <Grid item xs={12} sm={3}>
          <Main/>
       </Grid>

       <Grid item xs={12} sm={4}>
          <Details title="Expense"/>
       </Grid>

    </Grid>
  )
}

export default App
