import React from "react";

export default function PersonForm(props) {
    return (
        <div>
            <form onSubmit={props.addPerson}>
                <h2>Add new</h2>
                <div>
                    name:{" "}
                    <input
                        type="text"
                        placeholder="Enter your name.."
                        value={props.newName}
                        onChange={props.handleNameAddition}
                    />
                    <br />
                    number:{" "}
                    <input
                        type="tel"
                        placeholder="Enter your number.."
                        value={props.newNumber}
                        onChange={props.handleNumberAddition}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
}
