import { useState } from "react";

const Button = (props) => {
  const {handleClick, text} = props
  return (
    <button onClick={handleClick}>{text}</button> 
  );
}

const Statistic = (props) => {
  const {text, value} = props;
  return (<tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>)
}

const Statistics = (props) => {
  const { good, bad, neutral, total } = props;
  if(total === 0) {
    return (
      <div>
        <h2>No Feedback given yet.</h2>
      </div>
    );
  }
  return (
    <div>
      <table>
          <th>Statistic</th>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutal" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Total" value={total} />
          <Statistic text="Positive Percentage" value={(good / total) * 100} />
      </table>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };
  const handleNeural = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeural} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <br />
      <br />
      <hr />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
}

export default App;
