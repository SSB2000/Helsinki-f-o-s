import "./App.css";
import { useState } from "react";

/*
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

function Content(props) {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
*/

/*
const Hello = ({ name, age }) => {
  const birthYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <h1>
        Hello {name}, you are {age} years old.
      </h1>
      <p>You were born is {birthYear()}</p>
    </div>
  );
};

Hello.defaultProps = {
  name: "Nobody",
  age: 0,
};

const App = () => {
  const name = "Maya";
  const age = 22;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Shubham" age="20" />
      <Hello name={name} age={age} />
      <Hello />
    </div>
  );
};
*/

//setState

// const Display = (props) => {
//   return <p>{props.counter}</p>;
// };

// const Button = (props) => {
//   return <button onClick={props.handleClick}>{props.text}</button>;
// };

// const App = (props) => {
//   const [counter, setCounter] = useState(0);

//   const handleIncrement = () => {
//     setCounter(counter + 1);
//   };

//   const setToZero = () => {
//     setCounter(0);
//   };

//   const handleDecrement = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={handleIncrement} text="Increment" />
//       <Button handleClick={setToZero} text="Set to Zero" />
//       <Button handleClick={handleDecrement} text="Decrement" />
//     </div>
//   );
// };

//setState Array
// const ArrayElement = (props) => {
//   const { element } = props;
//   return (
//     <span>
//       <p>{element} </p>
//     </span>
//   );
// };

// const Array = () => {
//   const arr = [1, 2, 3, 4, 5];
//   const [Array, setArray] = useState(arr);
//   const handleAddition = () => {
//     console.log("Element Added");
//     Array.push(10);
//     console.log(Array);
//     const arrNew = Array;
//     console.log(arrNew);
//     setArray(arrNew);
//   };
//   return (
//     <span>
//       {Array.map((element, i) => (
//         <ArrayElement element={element} />
//       ))}
//       <button onClick={handleAddition}>Add</button>
//     </span>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Array />
//     </div>
//   );
// };

//Object as states
/*
const App = () => {
  const [clicks, setClicks] = useState({
    top: 0,
    bottom: 0,
  });

  const handleClickTop = () => {
    const newClicks = {
      ...clicks,
      top: clicks.top + 1,
    };
    setClicks(newClicks);
  };

  const handleClickBottom = () => {
    const newClick = {
      ...clicks,
      bottom: clicks.bottom + 1,
    };
    setClicks(newClick);
  };

  const Button = (props) => {
    return <button onClick={props.handleclick}>{props.text}</button>;
  };

  return (
    <div>
      <p>{clicks.top}</p>
      <Button handleclick={handleClickTop} text="Increase Top"></Button>
      <p>{clicks.bottom}</p>
      <Button handleclick={handleClickBottom} text="Increase Bottom"></Button>
    </div>
  );
};
*/

//Handling array
/*
const History = (props) => {
  const { allClicks } = props;
  if (allClicks.length === 0) {
    return <div>Your Button clicked history will be shown here.</div>;
  }
  return <div>Your Button clicked history: {allClicks.join(" ")}</div>;
};

const App = () => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleTop = () => {
    setAllClicks(allClicks.concat("T"));
    setTop(top + 1);
  };

  const handleBottom = () => {
    setAllClicks(allClicks.concat("B"));
    setBottom(bottom + 1);
  };

  const Button = (props) => {
    const { handleClick, text } = props;
    return <button onClick={handleClick}>{text}</button>;
  };

  return (
    <div>
      {top}
      <Button handleClick={handleTop} text="Increment"></Button>
      <br />
      {bottom}
      <Button handleClick={handleBottom} text="Increment"></Button>
      <br />
      <History allClicks={allClicks} />
    </div>
  );
};
*/

//Event handler functions

const App = () => {
  const [value, setValue] = useState(0);

  const setToValue = (value) => () => {
    setValue(value);
  };

  return (
    <div>
      {value}
      <br />
      <button onClick={setToValue(value + 1)}>Increment</button>
      <button>Zero</button>
      <button>Hundred</button>
    </div>
  );
};

export default App;
