import { FlatList, View } from "react-native";
import ExpensesList from "./EpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES=[{
    id:'e1',
    description:'A pair of shoes',
    amount:2000,
    date:new Date('2022-12-19')
},
    {
        id: 'e2',
        description: 'A pair of shoes',
        amount: 2000,
        date: new Date('2022-12-16')
    },
{
        id: 'e3',
        description: 'A pair of shoes',
        amount: 2000,
        date: new Date('2022-12-17')
    },
 {
        id: 'e4',
        description: 'A pair of shoes',
        amount: 2000,
        date: new Date('2022-12-2')
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        amount: 2000,
        date: new Date('2022-12-1')
    }]

function ExpensesOutput({expenses,expensesPeriod}) {
    return(
        <View>
       <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
       <ExpensesList expenses={DUMMY_EXPENSES}
        
       />

        </View>
    )
    
}export default ExpensesOutput