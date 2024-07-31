function TextInput({ inputName, value, onChange, label }) {
  return (
    <div className="input-container">
      <label htmlFor={inputName} className="copy">
        {label}
      </label>
      <input
        type="text"
        className="input input__text input--beige"
        name={inputName}
        id={inputName}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextInput;
