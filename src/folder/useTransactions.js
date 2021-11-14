import {useContext} from "react"

import {ExpenseTrackerContext} from "../context/context";

import {incomeCategories ,expenseCategories ,resetCategories} from '../constants/constants';

const useTransactions = (title) => {

  resetCategories();
  const {transactions} = useContext(ExpenseTrackerContext)
   
  const transactionsPerType = transactions.filter((t) => t.type === title);

  const total = transactionsPerType.reduce((acc ,currVal) => acc += currVal.amount ,0);

  const categories = title === "Income" ? incomeCategories : expenseCategories ;

  console.log({ transactionsPerType ,total ,categories });

//finding the category which is equal to the category given by user and incrementing the respected amount to it.
  transactionsPerType.forEach((t) => {
      const category = categories.find((c) => c.type === t.category)

      if(category) category.amount += t.amount;
  })

//filtering the categories with zero amount as it's neither income nor expense

  const filteredCategories = categories.filter((c) => c.amount > 1);

  //data that is required in for the chart
  const chartData = {
      datasets: [{
          data : filteredCategories.map((c) => c.amount),
          backgroundColor : filteredCategories.map((c) => c.color)
      }],
      labels : filteredCategories.map((c) => c.type)
  }

  return {filteredCategories ,total ,chartData}
}

export default useTransactions