import React, { useState } from "react";

export default function Search({ countries, setCountriesToShow }) {
    const [searchedTerm, setSearchedTerm] = useState("");
    const handleSeachedInput = (e) => {
        setSearchedTerm(e.target.value);
    };
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={searchedTerm}
                    onChange={handleSeachedInput}
                ></input>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
