import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./screens/AllExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from "./constants/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack=createNativeStackNavigator()
const BottomTabs=createBottomTabNavigator()

function ExpensesOverview() {
  return(
    
      <BottomTabs.Navigator screenOptions={ {
        headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
        headerTintColor:'white',
        tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
        tabBarActiveTintColor:GlobalStyles.colors.accent500

      }}>
        <BottomTabs.Screen 
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title:'RecentExpenses',
          tabBarLabel:'Recent',
          tabBarIcon: ({ color, size }) => (<Icon name="clock-o" color={color} size={size} />)
     
        }} />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
           
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (<Icon name="th-large" color={color} size={size} />)

         
        }} />
      </BottomTabs.Navigator>
 
  )
  
}


 function app() {
  return(
    <>
      <StatusBar barStyle={"default"}/>
      <NavigationContainer  >
        <Stack.Navigator initialRouteName="ExpensesOverview">
          <Stack.Screen name="Home" component={AllExpenses} />
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} 
            options={{
              headerShown:false
            }}
          />

        </Stack.Navigator>
         
      </NavigationContainer>
      
    </>
  )
  
} export default app