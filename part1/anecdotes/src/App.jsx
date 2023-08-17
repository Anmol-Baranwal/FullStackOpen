import { useState } from 'react'
import PropTypes from 'prop-types';

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

const Anecdote = ({ txt, voteCount }) => (
  <div>
    <p>{txt}</p>
    <p>has {voteCount} votes</p>
  </div>
);

Anecdote.propTypes = {
  txt: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
};

const Button = ({onClick, txt}) => {
  return <button onClick={onClick}>{txt}</button>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  txt: PropTypes.string.isRequired,
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleAnecdoteClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(arrayIndex);
  };

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Anecdote txt={anecdotes[selected]} voteCount={0} />
      <Button onClick={handleVoteClick} txt="vote" />
      <Button onClick={handleAnecdoteClick} txt="Next anecdote" />
      
    </div>
  )
}

export default App