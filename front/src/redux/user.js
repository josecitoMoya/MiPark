import { createReducer, createAction } from "@reduxjs/toolkit";

const initial = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  admin: "",
};

export const addUser = createAction("ADDUSER");

const User = createReducer(initial, {
  [addUser]: (state, action) => {
    const { admin, id, firstName, lastName, email } = action.payload;
    state.id = id;
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
    state.admin = admin;
  },
});

export default User;
