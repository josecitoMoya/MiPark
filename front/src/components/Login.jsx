import React, { useContext } from "react";
import {
  Input,
  Button,
  Text,
  Box,
  Center,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const logUser = {
      email: email.value,
      password: password.value,
    };

    axios
      .post("http://localhost:8080/api/user/login", logUser, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then(({ data, message }) => {
        console.log("data", data);
        if (data.admin == true) {
          dispatch(addUser(data));
          navigate("/admin");
        } else {
          dispatch(addUser(data));
          navigate("/");
        }
      })
      .catch(({ message }) => alert("Email or password invalid"));
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
            Iniciar Sesion
          </Text>
          <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <Stack p={"20px"}>
              <Input
                {...email}
                backgroundColor={"white"}
                htmlSize={50}
                type="text"
                placeholder="email"
                required
              />
            </Stack>

            <Stack p={"20px"}>
              <Input
                {...password}
                type="password"
                placeholder="Contraseña"
                backgroundColor={"white"}
                required
              />
            </Stack>
            <Stack>
              <Button colorScheme="blue" type="submit" m={8}>
                Iniciar Sesion
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Login;
