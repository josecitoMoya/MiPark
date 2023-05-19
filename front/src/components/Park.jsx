import React from "react";
import { useSelector } from "react-redux";

const Park = () => {
  const park = useSelector((state) => state.reserva);

  return (
    <div>
      <h1>park</h1>
      <li>{park.id}</li>
      <li>{park.ciduad}</li>
      <li>{park.provincia}</li>
      <li>{park.ubicacion}</li>
    </div>
  );
};

export default Park;
