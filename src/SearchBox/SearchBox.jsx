import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input type="text" />
      </label>
    </form>
  );
};

export default SearchBox;
