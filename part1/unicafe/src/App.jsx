import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

const Button = ({ onClick, txt }) => {
  return (
    <button onClick={onClick}>
      {txt}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  txt: PropTypes.string.isRequired,
};

const Statistic = ({ txt, val }) => {

  if(txt==='positive'){
    return (
      <tr>
        <td>{txt} {val} %</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{txt} {val} </td>
    </tr>
  );
  
};

Statistic.propTypes = {
  txt: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
};

const Statistics = ({ clicks }) => {
  const totalStats = clicks.good + clicks.neutral + clicks.bad;
  const avgStats = (clicks.good * 1 + clicks.bad * -1) / totalStats;
  const posStats = (clicks.good / totalStats) * 100;

  if (!totalStats) {
    return (
      <div>No feedback given</div>
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic txt="good" val={clicks.good} />
          <Statistic txt="neutral" val={clicks.neutral} />
          <Statistic txt="bad" val={clicks.bad} />
          <Statistic txt="all" val={totalStats} />
          <Statistic txt="average" val={avgStats} />
          <Statistic txt="positive" val={posStats} />
        </tbody>
      </table>
    </div>
  );
};

Statistics.propTypes = {
  clicks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

const App = () => {
  const [clicksAll, setClicksAll] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setClicksAll({ ...clicksAll, good: clicksAll.good + 1 });
  };

  const handleNeutralClick = () => {
    setClicksAll({ ...clicksAll, neutral: clicksAll.neutral + 1 });
  };

  const handleBadClick = () => {
    setClicksAll({ ...clicksAll, bad: clicksAll.bad + 1 });
  };

  return (
    <div>
      <Header name="Customer feedback" />
      <Button txt="good" onClick={handleGoodClick} />
      <Button txt="neutral" onClick={handleNeutralClick} />
      <Button txt="bad" onClick={handleBadClick} />
      <Header name="statistics" />
      <Statistics clicks={clicksAll} />
    </div>
  );
};

export default App;