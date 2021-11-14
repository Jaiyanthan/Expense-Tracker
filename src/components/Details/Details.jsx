import React from 'react';
import { Doughnut } from 'react-chartjs-2'; 

//mui
import {Card ,CardContent ,CardHeader ,Typography} from '@material-ui/core';

//styleSheet
import useStyles from './styles';

//local
import useTransactions from '../../folder/useTransactions.js';

function Details({title}) {

//styles
 const classes = useStyles();

 //context
 const {total ,chartData} = useTransactions(title)


    return (
        <Card className={title === "Income" ? classes.income : classes.expense}>
           <CardHeader title={title}/>
           <CardContent variant="h5">₹{total}</CardContent>
           <Doughnut data={chartData}/>
        </Card>
    )
}

export default Details
