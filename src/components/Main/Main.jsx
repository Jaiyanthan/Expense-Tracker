import React,{useContext} from 'react';

//mui
import {Card ,CardContent ,CardHeader ,Divider ,Grid ,Typography} from "@material-ui/core";

//stylesheet
import useStyles from "./styles";

//local
import {ExpenseTrackerContext} from '../../context/context';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    
const classes = useStyles();

const {balance} = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography align="center" variant="h6">Total Balance ₹{balance}</Typography>
                {/* <Typography variant="subtitle1" style={{lineWeight:"1.5em", marginTop:'20px'}}>
                    <InfoCard/>
                </Typography> */}

                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                  <Grid container spacing={12}>
                       <Grid item xs={12}>
                          <List/>
                       </Grid>
                  </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
