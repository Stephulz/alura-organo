import "./TextInput.css";

const TextInput = ({ label, placeholder, onChange, value, required }) => {
  return (
    <div
      data-testid={`text-input-container-${label}`}
      className="text-input-container"
    >
      <label
        data-testid={`text-input-label-${label}`}
        className="text-input-label"
      >
        {label}
      </label>
      <input
        data-testid={`text-input-${label}`}
        className="text-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
