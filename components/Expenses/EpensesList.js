import { FlatList, View } from "react-native";

function renderExpenseItem(itemData) {
    return(
        <View>
        <Text>
            {itemData.item}
        </Text>

        </View>
    )
    
}

function ExpensesList({expenses}) {
    return (
        <View>
            
            <FlatList data={expenses}
            renderItem={renderExpenseItem} />

        </View>
    )

} export default ExpensesList