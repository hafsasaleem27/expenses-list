import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Tissue Paper",
      amount: 28.98,
      date: new Date(2020, 10, 20),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 9, 5),
    },
    {
      id: "e3",
      title: "Bell",
      amount: 100,
      date: new Date(2022, 3, 11, 20, 55, 33, 999),
    },
    {
      id: "e4",
      title: "New Desk (wooden)",
      amount: 450,
      date: new Date(2022, 1, 9),
    },
  ];

  const addExpenseHandler = expense => console.log(expense);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
