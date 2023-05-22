import { Button, Stack } from "@chakra-ui/react";
import React from "react";

const Admin = () => {
  return (
    <Stack w={"25%"}>
      <Button>Usuarios</Button>
      <Button>Cocheras</Button>
      <Button>Reservas</Button>
      <Button>Transacciones</Button>
    </Stack>
  );
};

export default Admin;
