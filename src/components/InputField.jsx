function InputField({ label, handleChnage, name, value }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        onChange={(e) => handleChnage(name, e.target.value)}
        value={value[name]}
      />
    </p>
  );
}

export default InputField;
