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

const MaxAnecdote = ({anecdotes, votesAll}) => {
  const maxVoteCount= Math.max(...votesAll);
  const idx= votesAll.indexOf(maxVoteCount);
  const finalAnecdote = anecdotes[idx];
  if(maxVoteCount === 0)  return <p>no votes yet</p>;

  return (
    <div>
      <p>{finalAnecdote}</p> 
      <p>has {maxVoteCount} votes</p>
    </div>
  );
}

MaxAnecdote.propTypes = {
  anecdotes: PropTypes.array.isRequired,
  votesAll: PropTypes.array.isRequired,
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
  const [votesAll, setVotesAll] = useState(Array(8).fill(0)); // length of anecdotes

  const handleVoteClick = () => {
    const newVotes= [...votesAll];
    newVotes[selected] += 1;
    setVotesAll(newVotes);
  }

  const handleAnecdoteClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(arrayIndex);
  };

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Anecdote txt={anecdotes[selected]} voteCount={votesAll[selected]} />
      <Button onClick={handleVoteClick} txt="vote" />
      <Button onClick={handleAnecdoteClick} txt="Next anecdote" />
      <Header name="Anecdote with most votes" />
      <MaxAnecdote anecdotes={anecdotes} votesAll={votesAll} />
    </div>
  )
}

export default App