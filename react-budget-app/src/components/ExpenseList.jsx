import ExpenseItem from "./ExpenseItem"
import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

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