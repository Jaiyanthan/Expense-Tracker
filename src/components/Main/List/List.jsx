import React ,{useContext} from 'react';

//mui
import {List as MUIList  ,ListItem ,ListItemAvatar ,ListItemText  ,Avatar ,ListItemSecondaryAction ,IconButton ,Slide} from "@material-ui/core"
import DeleteIcon from '@mui/icons-material/Delete';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

//local
import {ExpenseTrackerContext} from '../../../context/context';

//stylesheet
import useStyles from './styles.js';

const List = () => {

const {deleteTransaction ,transactions} = useContext(ExpenseTrackerContext);

const classes = useStyles();

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <AttachMoneyIcon/>
                            </Avatar>
                        </ListItemAvatar>
                     <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Slide>
            ))}
            
        </MUIList>
    )
}

export default List
