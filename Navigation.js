import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "./screens/Dashboard";
import TransactionListScreen from "./screens/TransactionItem";
import AddTransactionScreen from "./screens/Add";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="TransactionList"
          component={TransactionListScreen}
        />
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
