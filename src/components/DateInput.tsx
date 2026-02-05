const DateInput = ({
  name,
  label,
  value = undefined,
}: {
  name: string;
  label: string;
  value?: string | undefined;
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
        type="date"
        required
        defaultValue={value ? value : undefined}
      />
    </div>
  );
};

export default DateInput;
