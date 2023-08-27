import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase({ name: "db.db", location: "default" });

export const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        amount REAL,
        type TEXT,
        category TEXT,
        date TEXT
      )`,
      [],
      () => {
        console.log('Table "expenses" created successfully.');
      },
      (error) => {
        console.error("Error creating table:", error);
      }
    );
  });
};

export const fetchExpenses = (setTransactions) => {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM expenses", [], (tx, results) => {
      const len = results.rows.length;
      const cArray = [];
      for (let i = 0; i < len; i++) {
        cArray.push(results.rows.item(i));
      }
      setTransactions(cArray);
    });
  });
};
