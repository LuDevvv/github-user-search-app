export const Form = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Github username..."
          name="input"
          autoComplete="off"
        />
        <button type="submit" className="button">
          Search
        </button>
      </div>
    </form>
  );
};
