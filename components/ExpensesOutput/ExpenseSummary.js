import { View,Text, FlatList } from "react-native";





function ExpenseSummary({periodNaame,expenses}){
    const expensesSum = expenses.reduce((sum,expense) =>{
        return sum + expense.amount
    },0);

    return (
        <View>
            <Text>{periodNaame}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpenseSummary;