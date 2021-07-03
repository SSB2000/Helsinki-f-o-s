import React, { useState } from "react";

function App() {
  const t_anecdotes = [
    {
      text: "If it hurts, do it more often",
      vote: 0,
    },
    {
      text: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    {
      text: "Premature optimization is the root of all evil.",
      vote: 0,
    },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
      vote: 0,
    },
  ];
  const [anecdotes, setAnecdotes] = useState(t_anecdotes);
  const [selected, setSelected] = useState(1);

  const Button = (props) => {
    const { handleClick, text } = props;
    return <button onClick={handleClick}>{text}</button>;
  };

  const handleNextAnecotes = () => {
    setSelected(Math.floor(Math.random() * (6 - 0) + 1));
  };

  const handleVote = () => {
    const newAnecdotes = [...anecdotes];
    newAnecdotes[selected]["vote"] = newAnecdotes[selected]["vote"] + 1;
    setAnecdotes(newAnecdotes);
  };

  const MostVotedAnedote = () => {
    const length = anecdotes.length;
    let max = 0;
    let maxAnecdote = anecdotes[max];
    for (let i = 1; i < length; i++) {
      if (anecdotes[i]["vote"] > maxAnecdote["vote"]) {
        maxAnecdote = anecdotes[i];
      }
    }
    return (
      <div>
        <h3>Most Voted Anecdote is: </h3>
        <h4>{maxAnecdote["text"]}</h4>
        <p>With {maxAnecdote["vote"]} votes.</p>
      </div>
    );
  };

  return (
    <div>
      <React.StrictMode>
        <h2>{anecdotes[selected]["text"]}</h2>
        <p>Vote: {anecdotes[selected]["vote"]}</p>
        <Button handleClick={handleVote} text="Vote" />
        <Button handleClick={handleNextAnecotes} text="Next Anecdote" />
        <MostVotedAnedote />
      </React.StrictMode>
    </div>
  );
}

export default App;
