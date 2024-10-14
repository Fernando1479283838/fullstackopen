import { useState } from 'react';

// Componente Button
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// Componente StatisticLine (ahora muestra una fila de tabla)
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// Componente Statistics con tabla HTML
const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const average = totalFeedback > 0 ? (good - bad) / totalFeedback : 0;
  const positivePercentage = totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;

  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={totalFeedback} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positivePercentage} %`} />
      </tbody>
    </table>
  );
};

// Componente principal App
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
