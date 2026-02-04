const TextInput = ({
  name,
  type,
  label,
  pattern,
}: {
  name: string;
  type?: string;
  label: string;
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
        required
        pattern={pattern ? pattern : undefined}
      />
    </div>
  );
};

export default TextInput;
