import { LOGIN } from "../Actions/actionTypes";

const initialState = {
  currentUser: null
};

export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.currentUser
      };
    default:
      return state;
  }
};
