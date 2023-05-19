import { createReducer, createAction } from "@reduxjs/toolkit";

const initial = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
};

export const addUser = createAction("ADDUSER");

const User = createReducer(initial, {
  [addUser]: (state, action) => {
    const { id, firstName, lastName, email } = action.payload;
    state.id = id;
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
  },
});

export default User;
