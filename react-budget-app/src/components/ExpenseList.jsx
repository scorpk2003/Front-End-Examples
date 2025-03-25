import ExpenseItem from "./ExpenseItem"
import React from "react"

const ExpenseList = () => {
    const expenses = [
        {
            id: 1,
            name: "shopping",
            cost: 200,
        },
        {
            id: 2,
            name: "Holliday",
            cost: 250,
        },
        {
            id: 3,
            name: "Weekend",
            cost: 100,
        },
        {
            id: 4,
            name: "Car",
            cost: 500,
        },
    ]

    return (
        <ul className="list-group">
            {expenses.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            )}
        </ul>
    )

}

export default ExpenseList