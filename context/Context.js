import { createContext, useState, useEffect } from "react";
import { fetchExpenses, setupDatabase } from "../db/sqlLite";
const TransactionContext = createContext();
export default TransactionContext;
export function TransactionProvider({ children }) {
  const [data, setData] = useState({
    amount: "",
    category: "",
    title: "",
    type: "",
  });

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      amount: 100,
      category: "Food",
      title: "asd",
      type: "expense",
      date: "22/8/2023",
    },
    {
      id: 2,
      amount: 100,
      category: "Books",
      title: "asd",
      type: "expense",
      date: "22/8/2023",
    },
    {
      id: 3,
      amount: 100,
      category: "Bonus",
      title: "asd",
      type: "income",
      date: "22/8/2023",
    },
    {
      id: 4,
      amount: 600,
      category: "Salary",
      title: "asd",
      type: "income",
      date: "22/8/2023",
    },
  ]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
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
  }, []);

  const value = {
    fetchExpenses,
    total,
    setTotal,
    data,
    setData,
    transactions,
    setTransactions,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}
