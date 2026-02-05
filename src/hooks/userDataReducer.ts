import { type UserData } from "../types/userType";

export type Action = {
  type: "CREATE_USER" | "EDIT_USER" | "DELETE_USER";
  payload: UserData;
};

export function userDataReducer(state: UserData[], action: Action) {
  switch (action.type) {
    case "CREATE_USER":
      return [...state, action.payload];

    case "EDIT_USER":
      return state.map((user) =>
        action.payload.id === user.id ? action.payload : user,
      );

    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload.id);

    default:
      return state;
  }
}
