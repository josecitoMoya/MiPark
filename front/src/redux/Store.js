import { configureStore } from "@reduxjs/toolkit";

import useReserva from "./reserva";
import user from "./user";

export const Store = configureStore({
  reducer: {
    reserva: useReserva,
    user: user,
  },
});
