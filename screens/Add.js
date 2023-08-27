import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import TransactionContext from "../context/Context";
import SelectDropdown from "../components/DropDown";
import { format } from "date-fns";
const AddTransactionScreen = () => {
  const { data, setData, transactions, setTransactions } =
    useContext(TransactionContext);
  const handleAddTransaction = () => {
    setTransactions([
      ...transactions,
      {
        ...data,
        date: format(new Date(), "dd-MM-yyyy"),
        id: transactions[transactions.length - 1].id + 1,
      },
    ]);
  };
  const handleCategoryChange = (selectedCategory) => {
    setData({ ...data, category: selectedCategory });
  };

  const handleTypeChange = (selectedType) => {
    setData({ ...data, type: selectedType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Transaction</Text>
      <Text style={styles.text}>Description</Text>

      <TextInput
        style={styles.input}
        value={data.title}
        placeholder="Title"
        onChangeText={(newTitle) => setData({ ...data, title: newTitle })}
      />
      <Text style={styles.text}>Amount of transaction</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Amount"
        value={data.amount}
        onChangeText={(newAmount) =>
          setData({ ...data, amount: parseFloat(newAmount) })
        }
      />

      <View style={styles.container2}>
        <Text style={styles.text}>Category</Text>
        <SelectDropdown
          data={["Food", "Electronic", "Salary", "Bonus", "Books"]}
          defaultButtonText={"select"}
          onSelect={handleCategoryChange}
        />
        <Text style={styles.text}>Type of transaction</Text>
        <SelectDropdown
          data={["expense", "income"]}
          defaultButtonText={"select"}
          onSelect={handleTypeChange}
        />
      </View>
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  container2: {
    margin: 2,
  },

  buttonText: {
    fontSize: 16,
  },
});

export default AddTransactionScreen;
