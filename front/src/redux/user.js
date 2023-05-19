import { createReducer, createAction } from "@reduxjs/toolkit";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
};

export const addUser = createAction("ADDUSER");

const User = createReducer(initial, {
  [addUser]: (state, action) => {
    const { firstName, lastName, email } = action.payload;
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
  },
});

export default User;
