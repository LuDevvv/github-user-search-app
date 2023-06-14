export const Form = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search Github username..." name="input" />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};
