import { createContext, useContext, useEffect, useReducer } from "react";
import { userDataReducer, type Action } from "../hooks/userDataReducer";
import type { UserData } from "../types/userType";

type UserContextType = {
  state: UserData[];
  dispatch: React.Dispatch<Action>;
};

const userDataKey = "USER_DATA";

const UserDataContext = createContext<UserContextType | null>(null);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(userDataReducer, [], (initial) => {
    const saved = localStorage.getItem(userDataKey);
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(userDataKey, JSON.stringify(state));
    console.log(state);
  }, [state]);

  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useGetData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("This context can only be used within UserDataProvider");
  }
  return context;
};
