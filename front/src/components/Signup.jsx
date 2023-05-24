import React from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { Input, Button, Text, Box, Center, Stack } from "@chakra-ui/react";

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

    axios
      .post("http://localhost:8080/api/user/register", newUser)
      .then(navigate("/login"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Center
        h="75%"
        color="white"
        marginTop={"5%"}
        borderWidth="3px"
        borderRadius="lg"
        width={"50%"}
      >
        <Box
          display="inline-block"
          p={"50px"}
          alignItems="center"
          justifyContent={"center"}
          color="black"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="2xl"
          textTransform="uppercase"
        >
          <Text fontSize="4xl" textAlign={"center"}>
            Registrarse
          </Text>

          <form onSubmit={clickHandler} style={{ padding: "30px" }}>
            <Stack spacing={5}>
              <Input
                {...firstName}
                backgroundColor={"white"}
                placeholder="Nombre"
                required
              />

              <Input
                {...lastName}
                backgroundColor={"white"}
                htmlSize={50}
                type="text"
                width="auto"
                placeholder="Apellido"
                required
              />

              <Input
                {...email}
                backgroundColor={"white"}
                htmlSize={50}
                type="email"
                width="auto"
                placeholder="email"
                required
              />

              <Input
                {...password}
                backgroundColor={"white"}
                htmlSize={50}
                type="password"
                width="auto"
                placeholder="Contraseña"
                required
              />

              <Button colorScheme="blue" type="submit">
                Enviar
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Signup;
