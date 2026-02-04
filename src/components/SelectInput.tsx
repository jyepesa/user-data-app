const SelectInput = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <div className="form-item">
      <label className="form-item__label" htmlFor="gender">
        Gender
      </label>
      <select
        className="form-item__input"
        name="gender"
        id="gender"
        defaultValue={defaultValue ? defaultValue : ""}
        required
      >
        <option disabled value="">
          Select your gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
      </select>
    </div>
  );
};

export default SelectInput;
