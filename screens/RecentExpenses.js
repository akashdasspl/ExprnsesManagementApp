import { View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

function RecentExpenses() {
    return (
        <View>
<ExpensesOutput expensesPeriod='last 7 days' />
        </View>
    )

} export default RecentExpenses
const styles = StyleSheet.create({

})