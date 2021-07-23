import React, { useState, useEffect } from "react";

export default function Search({ persons }) {
    const [searchName, setSearchName] = useState("");
    const [result, setResult] = useState([]);

    const handleSearchName = (event) => {
        const name = event.target.value;
        setSearchName(name);
        setResult(persons);
    };

    setResult(persons.filter((person) => person.name === searchName));

    useEffect(() => {
        setResult(persons.filter((person) => person.name === searchName));
    }, [persons]);

    console.log(`result`, result);

    return (
        <div>
            <label for="name">Seach name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name.."
                autoComplete="off"
                value={searchName}
                onChange={handleSearchName}
            />
        </div>
    );
}
