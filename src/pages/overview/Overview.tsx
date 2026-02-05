import { useNavigate } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { useGetData } from "../../context/UserDataContext";
import type { UserData } from "../../types/userType";

const Overview = () => {
  const { state, dispatch } = useGetData();
  const deleteUser = (user: UserData) => {
    dispatch({ type: "DELETE_USER", payload: user });
  };
  const navigate = useNavigate();

  const openEditor = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="usercard-container">
      {state.map((user) => {
        return (
          <UserCard
            user={user}
            key={user.id}
            handleDelete={deleteUser}
            handleEditPage={openEditor}
          />
        );
      })}
    </div>
  );
};

export default Overview;
