import React, { useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import TransactionContext from "../context/Context";

const TransactionItem = ({ transaction }) => (
  <View style={styles.transactionItem}>
    <Text>{transaction.date}</Text>
    <Text>{transaction.category}</Text>
    <Text
      style={transaction.type === "expense" ? styles.expense : styles.income}
    >
      {transaction.type === "expense" ? "-" : "+"}${transaction.amount}
    </Text>
  </View>
);

const TransactionListScreen = ({ navigation }) => {
  const { transactions, setTotal } = useContext(TransactionContext);
  const transactionExpense = transactions.filter((item) => {
    return item.type === "expense";
  });
  const transactionIncome = transactions.filter((item) => {
    return item.type === "income";
  });
  setTotal(
    transactionIncome.reduce((acc, current) => acc + current.amount, 0) -
      transactionExpense.reduce((acc, current) => acc + current.amount, 0)
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
      <Button
        title="Go to Add Transaction"
        onPress={() => navigation.navigate("AddTransaction")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  expense: {
    color: "red",
  },
  income: {
    color: "green",
  },
});

export default TransactionListScreen;
