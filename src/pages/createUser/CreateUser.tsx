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
    const newUser = { ...data, id: crypto.randomUUID() };
    console.log(newUser);
    formElement.reset();
    alert("New user entry succesfully created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name="username" label="Username" />
      <DateInput name="birthday" label="Birthday" />
      <SelectInput />
      <TextInput name="email" type="email" label="Email address" />
      <TextInput name="address" label="Address" />
      <TextInput name="phone" label="Phone number" pattern="[0-9+ ]*" />
      <TextInput name="website" label="Website" />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default CreateUser;
