import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const Statistics = (props) => {
    return (
      <div>
        <StatisticLine text="Good" calc={good} />
        <StatisticLine text="Neutral" calc={neutral} />
        <StatisticLine text="Bad" calc={bad} />
        <StatisticLine text="All" calc={good + neutral + bad} />
        <StatisticLine
          text="Average"
          calc={(good - bad) / (good + neutral + bad)}
        />
        <StatisticLine
          text="Positive"
          calc={(good / (good + neutral + bad)) * 100}
        />
      </div>
    );
  };

  // StatisticLine for displaying a single statistic, e.g. the average score.

  const StatisticLine = (props) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{props.text}</td>
              <td>{props.calc}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  };

  const handleClick = (e) => {
    const name = e.target.innerText;
    setFeedbackGiven(true);
    if (name === "Good") {
      setGood(good + 1);
    } else if (name === "Neutral") {
      setNeutral(neutral + 1);
    } else if (name === "Bad") {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleClick}>Good</button>
      <button onClick={handleClick}>Neutral</button>
      <button onClick={handleClick}>Bad</button>

      {feedbackGiven ? (
        <div>
          <h2>Statistics</h2>
          <Statistics />
        </div>
      ) : (
        <h2>No feedback given</h2>
      )}
    </div>
  );
};

export default App;
