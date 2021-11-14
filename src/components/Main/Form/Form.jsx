import React,{useState ,useContext} from 'react';
import {v4 as uuidv4} from 'uuid';

//mui
import {Select ,Grid ,Typography ,FormControl,MenuItem ,TextField ,Button ,InputLabel} from "@material-ui/core";

//local
import {ExpenseTrackerContext} from '../../../context/context';
import {incomeCategories ,expenseCategories} from '../../../constants/constants';


//stylesheet
import useStyles from './styles';

const Form = () => {

const classes = useStyles();

const {addTransaction} = useContext(ExpenseTrackerContext)
const initialState = { 
     amount:'',
     type:'',
     category:'',
     date: new Date(),
}    

const [formData, setFormData] = useState(initialState)

const createTransaction = () => {

   const transaction = {...formData ,amount:Number(formData.amount) ,id: uuidv4()}

   addTransaction(transaction);
   setFormData(initialState)
}

const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle1" align="center"></Typography>
            </Grid>
            <Grid item xs={6}>
                 <FormControl fullWidth>
                     <InputLabel>Type</InputLabel>
                     <Select value={formData.type} onChange={(e) => setFormData({...formData ,type : e.target.value})}>
                         <MenuItem value="Income">Income</MenuItem>
                         <MenuItem value="Expense">Expense</MenuItem>
                     </Select>
                 </FormControl>
            </Grid>
            <Grid item xs={6}>
               <FormControl fullWidth>
                   <InputLabel>Category</InputLabel>
                   <Select value={formData.category} onChange={(e) => setFormData({...formData ,category : e.target.value})}>
                      {selectedCategories.map((c) => (
                        <MenuItem value={c.type}>{c.type}</MenuItem>
                      ))}
                    </Select>  
               </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({...formData ,amount : e.target.value})}/>
            </Grid>

            <Grid item xs={6}>
                <TextField fullWidth type="date" label="Date" value={formData.date} onChange={(e) => setFormData({...formData ,date:e.target.value})}/>
            </Grid>
            <Button className={classes.button} color="primary" variant="outlined" fullWidth onClick={()=>createTransaction()}>Create</Button>
        </Grid>
    )
}

export default Form
