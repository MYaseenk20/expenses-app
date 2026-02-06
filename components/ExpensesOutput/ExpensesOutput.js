import { View,Text, FlatList } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "r1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "r2",
    description: "Groceries",
    amount: 89.45,
    date: new Date("2022-01-05"),
  },
  {
    id: "r3",
    description: "Monthly internet bill",
    amount: 39.99,
    date: new Date("2022-02-01"),
  },
  {
    id: "r4",
    description: "Coffee with friends",
    amount: 12.5,
    date: new Date("2022-02-12"),
  },
  {
    id: "r5",
    description: "New headphones",
    amount: 129.99,
    date: new Date("2022-03-03"),
  },
];

function ExpensesOutput({DUMMY_EXPENSES,expensesPeriod}){
    return (
    <View>
        <ExpenseSummary periodNaame={expensesPeriod} expenses = {expenses}/>
        <ExpensesList />
    </View>
    );
}

export default ExpensesOutput;