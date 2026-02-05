import "./CreateUser.scss";
import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput";
import SelectInput from "../../components/SelectInput";
import { useGetData } from "../../context/UserDataContext";
import type { UserData } from "../../types/userType";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const { dispatch } = useGetData();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    const newUser = { ...data, id: crypto.randomUUID() } as unknown as UserData;
    dispatch({ type: "CREATE_USER", payload: newUser });
    navigate("/overview");
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
