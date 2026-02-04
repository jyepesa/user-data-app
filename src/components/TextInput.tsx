const TextInput = ({
  name,
  type,
  label,
  required,
  pattern,
}: {
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  pattern?: string;
}) => {
  return (
    <div className="form-item">
      <label className="form-item__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-item__input"
        id={name}
        name={name}
        type={type ? type : "text"}
        required={required}
        pattern={pattern ? pattern : undefined}
      />
    </div>
  );
};

export default TextInput;
