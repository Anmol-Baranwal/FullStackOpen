import PropTypes from "prop-types";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

Part.propTypes = {
  part: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired,
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return <h4>total of {totalExercises} exercises</h4>;
};

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {course.map((courseItem) => (
        <div key={courseItem.id}>
          <Header name={courseItem.name} />
          <Content parts={courseItem.parts} />
          <Total parts={courseItem.parts} />
        </div>
      ))}
    </div>
  );
};

export default App;
