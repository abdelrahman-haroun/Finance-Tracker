import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TransactionContext from "../context/Context";

const DashboardScreen = ({ navigation }) => {
  const { total, fetchExpenses } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Finance Tracker</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>{total}</Text>
      </View>
      <Button
        title="Go to Transaction List"
        onPress={() => navigation.navigate("TransactionList")}
      />

      {/* Additional components for other financial data */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  balanceContainer: {
    backgroundColor: "#e0e0e0",
    padding: 20,
    borderRadius: 10,
  },
  balanceLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
