import PropTypes from "prop-types";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
