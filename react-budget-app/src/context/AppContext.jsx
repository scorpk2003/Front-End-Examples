/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 10000,
    expenses: [
        { id: 1, name: "Shopping", cost: 40 },
        { id: 2, name: "Hotel", cost: 60 },
        { id: 3, name: "Lunch", cost: 80 },
        { id: 4, name: "Cafe", cost: 20 },
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}