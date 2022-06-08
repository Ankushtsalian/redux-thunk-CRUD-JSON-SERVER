const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case type:
    //   return;
    default:
      return state;
  }
};

export default userReducer;
