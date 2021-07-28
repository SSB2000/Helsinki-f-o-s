import React, { useState, useEffect } from "react";
import PersonInfo from "./Components/PersonInfo";
import PersonForm from "./Components/PersonForm";
import personService from "./services/person";
import axios from "axios";
import person from "./services/person";
// import Search from "./Components/Search";
const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const hook = () => {
        personService
            .getAll()
            .then(initialPersons => setPersons(initialPersons));
    }

    useEffect(hook, [])

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

        personService
            .create(newPersonObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
            });

        // setPersons(persons.concat(newPersonObject));
        setNewName("");
        setNewNumber("");
    };

    const handleNameAddition = (event) => {
        const name = event.target.value;
        setNewName(name);
    };

    const handleNumberAddition = (event) => {
        setNewNumber(event.target.value);
    };

    const handleDelete = (id) => {
        const toDelete = persons.find(person => person.id === id);
        if (window.confirm(`Delete ${toDelete.name} ?`)) {
            personService
            .deletePerson(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
            });
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            {/* <Search persons={persons} /> */}
            <PersonForm
                newName={newName}
                handleNameAddition={handleNameAddition}
                newNumber={newNumber}
                handleNumberAddition={handleNumberAddition}
                addPerson={addPerson}
            />
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => (
                    <PersonInfo 
                        key={person.id} 
                        person={person}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;
