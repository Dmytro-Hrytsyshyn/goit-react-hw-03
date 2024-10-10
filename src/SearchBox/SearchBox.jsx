import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          type="text"
          placeholder="Find contact"
        />
      </label>
    </form>
  );
};

export default SearchBox;
