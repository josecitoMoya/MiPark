import React, { useContext } from "react";
import { Input, Button, Text, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const logUser = {
      email: email.value,
      password: password.value,
    };

    axios
      .post("http://localhost:3000/api/user/login", logUser)
      .then((res) => res.data)
      .then((res) => {
        user.logUser(res);
        navigate("/");
      })
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
          <Text fontSize="6xl">Iniciar Sesion</Text>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              htmlSize={50}
              width="auto"
              placeholder="Nombre"
              required
            />
            <br />
            <br />

            <Input
              htmlSize={50}
              width="auto"
              type="password"
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

export default Login;
