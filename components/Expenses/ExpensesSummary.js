import { FlatList, View ,Text} from "react-native";

function ExpensesSummary({ periodName, expenses }) {

    const expensesSum = expenses.reduce((sum,expense)=>{
        return sum + expense.amount
    },0)
    return (
        <View>
            
                <Text>
                {periodName}
                </Text>
                <Text>
                    {expensesSum.toKFixed(2)}
                </Text>
             
           

        </View>
    )

} export default ExpensesSummary