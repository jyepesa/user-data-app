import "./CreateUser.scss";
import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput";
import SelectInput from "../../components/SelectInput";

const CreateUser = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    formElement.reset();
    alert("New user entry succesfully created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name="username" label="Username" required={true} />
      <DateInput name="birthday" label="Birthday" />
      <SelectInput />
      <TextInput
        name="email"
        type="email"
        label="Email address"
        required={true}
      />
      <TextInput name="address" label="Address" required={true} />
      <TextInput
        name="phone"
        label="Phone number"
        required={true}
        pattern="[0-9+ ]*"
      />
      <TextInput name="website" label="Website" />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default CreateUser;
