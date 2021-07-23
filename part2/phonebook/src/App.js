import React, { useState } from "react";
import PersonInfo from "./Components/PersonInfo";
import PersonForm from "./Components/PersonForm";
import axios from 'axios'
// import Search from "./Components/Search";
const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const hook = () => {
        axios.get('http://localhost:3001/persons').then(response => {
            setPersons(response.data);
        });
    }

    useState(hook, []);

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
