import React from "react";

export default function PersonInfo({ person, handleDelete }) {
    return (
        <li>
            {person.name}: {person.number}
            <button 
                type="submit"
                onClick={() => handleDelete(person.id)}
            >
            Delete
            </button>
        </li>
    );
}
