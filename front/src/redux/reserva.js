import { createReducer, createAction } from "@reduxjs/toolkit";

const initial = {
  id: "",
};

export const addreserva = createAction("ADDRESERVA");

const Reserva = createReducer(initial, {
  [addreserva]: (state, action) => {
    state.id = action.payload;
  },
});

export default Reserva;
