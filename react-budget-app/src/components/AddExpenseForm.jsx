import React from "react"

const AddExpenseForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        required='required'
                        type="text"
                        className="form-control"
                        id="name"
                    >
                    </input>
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input
                        type="text"
                        required='required'
                        className="form-control"
                        id="cost"
                    />
                </div>
                <div className="col-sm">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm