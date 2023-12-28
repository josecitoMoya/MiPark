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
      <Center h="75%" color="white" marginTop={"5%"}>
        <Box
          w={"75%"}
          maxW="50%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Box p="6">
            <Box display="flex" alignItems="center" justifycontent={"center"}>
              <Box
                color="black"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="2xl"
                textTransform="uppercase"
                ml="2"
                w={"80%"}
              >
                <br />
                <Text fontSize="4xl">Registrarse</Text>
                <br />

                <form onSubmit={clickHandler}>
                  <Stack spacing={5}>
                    <Input {...firstName} placeholder="Nombre" required />

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

                    <Input
                      {...email}
                      htmlSize={50}
                      type="email"
                      width="auto"
                      placeholder="email"
                      required
                    />
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
                    <br />
                    <br />
                  </Stack>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Signup;
