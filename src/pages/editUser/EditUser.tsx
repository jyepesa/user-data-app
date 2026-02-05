import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput";
import SelectInput from "../../components/SelectInput";
import { useGetData } from "../../context/UserDataContext";
import { type UserData } from "../../types/userType";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const { state, dispatch } = useGetData();
  const navigate = useNavigate();
  const userToEdit = state.find((user) => user.id === id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    const newUser = { ...data, id } as unknown as UserData;
    dispatch({ type: "EDIT_USER", payload: newUser });
    navigate("/overview");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="username"
        label="Username"
        value={userToEdit?.username}
      />
      <DateInput
        name="birthday"
        label="Birthday"
        value={userToEdit?.birthday}
      />
      <SelectInput defaultValue={userToEdit?.gender} />
      <TextInput
        name="email"
        type="email"
        label="Email address"
        value={userToEdit?.email}
      />
      <TextInput name="address" label="Address" value={userToEdit?.address} />
      <TextInput
        name="phone"
        label="Phone number"
        pattern="[0-9+ ]*"
        value={userToEdit?.phone}
      />
      <TextInput name="website" label="Website" value={userToEdit?.website} />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default EditUser;
