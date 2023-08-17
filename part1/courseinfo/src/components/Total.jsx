import PropTypes from "prop-types";

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return <h4>Total of {totalExercises} exercises</h4>;
};

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Total;
