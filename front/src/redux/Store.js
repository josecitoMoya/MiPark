import { configureStore } from "@reduxjs/toolkit";

import useReserva from "./reserva";

export const Store = configureStore({
  reducer: {
    reserva: useReserva,
  },
});
