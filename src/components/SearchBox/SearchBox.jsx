import PropTypes from "prop-types";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <>
      <p>Find contact by name: </p>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default SearchBox;
