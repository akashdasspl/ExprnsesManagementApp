import { View ,StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

function AllExpenses() {
    return(
        <View>
<ExpensesOutput expensesPeriod='Total'/>
        </View>
    )
    
}export default AllExpenses
const styles=StyleSheet.create({
    
})