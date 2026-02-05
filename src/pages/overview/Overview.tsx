import UserCard from "../../components/UserCard";
import { useGetData } from "../../context/UserDataContext";

const Overview = () => {
  const { state, dispatch } = useGetData();

  return (
    <div>
      {state.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
};
