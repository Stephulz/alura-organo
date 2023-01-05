import "./Select.css";

const Select = ({ label, placeholder, value, options, onChange }) => {
  return (
    <div data-testid={`select-container-${label}`} className="select-container">
      <label data-testid={`select-label-${label}`} className="select-label">
        {label}
      </label>
      <select
        data-testid={`select-${label}`}
        className={"select"}
        value={value || ""}
        onChange={onChange}
      >
        <option data-testid={`select-option-${placeholder}`} value={""}>
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option
            data-testid={`select-option-${label}`}
            key={label}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
