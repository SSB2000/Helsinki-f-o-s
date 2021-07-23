import React, { useState } from "react";
import PersonInfo from "./Components/PersonInfo";
import PersonForm from "./Components/PersonForm";

// import Search from "./Components/Search";
const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
        { name: "shubh", number: 1234 },
    ]);

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const addPerson = (event) => {
        event.preventDefault();
        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} already added to phonebook. Try another name.`);
            return;
        }
        const newPersonObject = {
            name: newName,
            number: newNumber,
        };

        setPersons(persons.concat(newPersonObject));
        setNewName("");
        setNewNumber("");
    };

    const handleNameAddition = (event) => {
        const name = event.target.value;
        console.log(`name`, name);
        setNewName(name);
    };

    const handleNumberAddition = (event) => {
        setNewNumber(event.target.value);
    };
    return (
        <div>
            <h2>Phonebook</h2>
            {/* <Search persons={persons} /> */}
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameAddition={handleNameAddition}
                newNumber={newNumber}
                handleNumberAddition={handleNumberAddition}
            />
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => (
                    <PersonInfo person={person} />
                ))}
            </ul>
        </div>
    );
};

export default App;
