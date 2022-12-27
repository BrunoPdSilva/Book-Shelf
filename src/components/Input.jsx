export function Input({ title, dispatch, value }) {
  function handleChange(e) {
    if (title === 'Categorias') {
      const text = e.target.value;
      const result = text.split(',').map(l => l.trim());
      dispatch({ type: title, payload: result });
    } else {
      dispatch({ type: title, payload: e.target.value });
    }
  }

  return (
    <label>
      <p>{title}</p>
      <input
        type="text"
        onChange={handleChange}
        value={value}
      />
    </label>
  );
}
