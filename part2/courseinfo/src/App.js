import React, { useState, useEffect } from "react";
import Note from "./Components/Note"; // For exercise 2.6 - 2.10
// import { date } from 'check-types';
// import Course from './Components/Course' // For exercise 2.1 - 2.5
// import axios from "axios";
import noteServices from "./services/notes";
import "./index.css";
import Notification from "./Components/Notification";
// Exercise 2.6 - 2.10
const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [error, setErrorMessage] = useState(null);
    const hook = () => {
        noteServices
            .getAll()
            .then((initialNotes) => {
                setNotes(initialNotes);
            })
            .catch((err) => {
                setErrorMessage(`Notes not found!`);
                setTimeout(() => {
                    setErrorMessage(null);
                }, 4000);
                setNotes([]);
            });
    };
    useEffect(hook, []);

    const toggleImportance = (id) => {
        const note = notes.find((n) => n.id === id);
        const changedNote = { ...note, important: !note.important };
        noteServices
            .update(id, changedNote)
            .then((returnedNote) => {
                setNotes(
                    notes.map((note) => (note.id !== id ? note : returnedNote))
                );
            })
            .catch((err) => {
                setErrorMessage(
                    `Note '${note.content}' was already removed from server`
                );
                setTimeout(() => {
                    setErrorMessage(null);
                }, 3000);
                setNotes(notes.filter((note) => note.id !== id));
            });
    };

    const notesToShow = showAll
        ? notes
        : notes.filter((note) => note.important);

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random > 0.5,
        };

        noteServices.create(noteObject).then((returnedNote) => {
            setNotes(notes.concat(returnedNote));
            setNewNote("");
        });
    };

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={error} />
            <form onSubmit={addNote}>
                <input
                    placeholder="Enter your note here..."
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">Save</button>
            </form>
            <br />
            <br />
            <div>
                <button type="button" onClick={() => setShowAll(!showAll)}>
                    show {showAll ? "important" : "all"}
                </button>
            </div>
            <ul>
                {notesToShow.map((note) => (
                    <Note
                        key={note.id}
                        toggleImportance={() => toggleImportance(note.id)}
                        note={note}
                    />
                ))}
            </ul>
        </div>
    );
};

// Exercies 2.1 - 2.5
/*
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
    </div>
  )
}
*/

export default App;
