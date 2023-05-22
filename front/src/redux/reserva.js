import { createReducer, createAction } from "@reduxjs/toolkit";

const initial = {
  id: "",
  provincia: "",
  ciduad: "",
  ubicacion: "",
  imagen: "",
};

export const addreserva = createAction("ADDRESERVA");

const Reserva = createReducer(initial, {
  [addreserva]: (state, action) => {
    console.log("Reduceritttttototototototto ", action.payload);

    const { id, provincia, ciduad, ubicacion, imagen } = action.payload;
    state.id = id;
    state.provincia = provincia;
    state.ciduad = ciduad;
    state.ubicacion = ubicacion;
    state.imagen = imagen;
  },
});

export default Reserva;
