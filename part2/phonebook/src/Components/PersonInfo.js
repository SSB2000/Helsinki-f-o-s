import React from "react";

export default function PersonInfo({ person }) {
    return (
        <li>
            {person.name}: {person.number}
        </li>
    );
}
