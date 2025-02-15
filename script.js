let expenses = [];

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name === "" || isNaN(amount)) {
        alert("Please enter valid expense details.");
        return;
    }

    expenses.push({ name: name, amount: amount });

    document.getElementById('expense-name').value = "";
    document.getElementById('expense-amount').value = "";

    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    const totalExpensesElement = document.getElementById('total-expenses');

    expenseList.innerHTML = "";

    let totalExpenses = 0;

    expenses.forEach((expense) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${expense.name}: Rs ${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);

        totalExpenses += expense.amount;
    });

    totalExpensesElement.textContent = totalExpenses.toFixed(2);
}