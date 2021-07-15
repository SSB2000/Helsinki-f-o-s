import { useState } from 'react'
import React from 'react'
import Note from './Components/Note' // For exercise 2.6 - 2.10
// import { date } from 'check-types';
// import Course from './Components/Course' // For exercise 2.1 - 2.5


// Exercise 2.6 - 2.10
const App = ( props ) => {
  const [ notes, setNotes ] = useState(props.notes);
  const [ newNote, setNewNote ] = useState("");
  const [ showAll, setShowAll ] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random > 0.5,
    };
    
    setNotes(notes.concat(noteObject));
    setNewNote("");
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button 
          type="button" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          placeholder="Enter your note here..."
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

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




export default App