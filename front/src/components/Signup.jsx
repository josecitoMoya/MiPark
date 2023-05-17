import React from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Text, Box, Center } from "@chakra-ui/react";

const Signup = () => {
  const firstName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    console.log("SOY LO QUE MANDO DESDE EL FRONT PARA EL REGISTRO", newUser);

    axios
      .post("http://localhost:8080/api/user/register", newUser)
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
              {...firstName}
              htmlSize={50}
              type="text"
              width="auto"
              placeholder="Nombre"
              required
            />
            <br />
            <br />
            <Input
              {...lastName}
              htmlSize={50}
              type="text"
              width="auto"
              placeholder="Apellido"
              required
            />
            <br />
            <br />
            <Input
              {...email}
              htmlSize={50}
              type="text"
              width="auto"
              placeholder="email"
              required
            />
            <br />
            <br />
            <Input
              {...password}
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
