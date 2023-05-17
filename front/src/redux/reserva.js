import { createReducer, createAction } from "@reduxjs/toolkit";

const initial = {
  id: "",
  provincia: "",
  ciduad: "",
  ubicacion: "",
};

export const addreserva = createAction("ADDRESERVA");

const Reserva = createReducer(initial, {
  [addreserva]: (state, action) => {
    console.log(action.payload);

    const { id, provincia, ciduad, ubicacion } = action.payload;
    state.id = id;
    state.provincia = provincia;
    state.ciduad = ciduad;
    state.ubicacion = ubicacion;
  },
});

export default Reserva;
