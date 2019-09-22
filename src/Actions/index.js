import { LOGIN } from "../Actions/actionTypes";

export const login = user => ({
  type: LOGIN,
  currentUser: user
});
