const DateInput = ({ name, label }: { name: string; label: string }) => {
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
      />
    </div>
  );
};

export default DateInput;
