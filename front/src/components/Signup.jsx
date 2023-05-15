import React from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Text, Box, Center } from "@chakra-ui/react";

const Signup = () => {
  const nombre = useInput();
  const apellido = useInput();
  const email = useInput();
  const password = useInput();

  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    const newUser = {
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      password: password.value,
    };

    axios
      .post("http://localhost:3000/api/user/signup", newUser)
      .then(navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Center>
        <Box
          marginTop={200}
          maxW="2xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <br />
          <Text fontSize="6xl">Registrarse</Text>
          <br />
          <br />
          <form onSubmit={clickHandler}>
            <Input
              htmlSize={50}
              type="text"
              width="auto"
              placeholder="Nombre"
              required
            />
            <br />
            <br />
            <Input
              htmlSize={50}
              type="text"
              width="auto"
              placeholder="Apellido"
              required
            />
            <br />
            <br />
            <Input
              htmlSize={50}
              type="text"
              width="auto"
              placeholder="email"
              required
            />
            <br />
            <br />
            <Input
              htmlSize={50}
              type="password"
              width="auto"
              placeholder="Contraseña"
              required
            />
            <br />
            <br />
            <Button colorScheme="blue" type="submit">
              Enviar
            </Button>
          </form>
        </Box>
      </Center>
    </div>
  );
};

export default Signup;
