import * as types from "./actionTypes";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_USERS:
      return { ...state, users: payload, loading: false };

    case type.DELETE_USERS:
      return { ...state, loading: false };

    case type.ADD_USER:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default userReducer;
