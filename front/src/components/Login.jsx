import React, { useContext } from "react";
import { Input, Button, Text, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { AuthContext } from "../context/AuthContext";
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

    // dispatch(addUser(logUser));

    axios
      .post("http://localhost:8080/api/user/login", logUser, {
        withCredentials: true,
      })
      .then((res) => res.data.data)
      .then((res) => {
        if (res.admin == true) {
          console.log("SOY LO QUE LLEGA POR RES", res);
          dispatch(addUser(res));
          console.log("ENTRO EN TRUE", user);
          navigate("/admin");
        } else {
          dispatch(addUser(res));
          console.log("ENTRO EN FALSE", user);
          navigate("/");
        }
      })

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
                <Text fontSize="4xl">Iniciar Sesion</Text>
                <br />
                <br />
                <form onSubmit={handleSubmit}>
                  <Input
                    {...email}
                    type="text"
                    htmlSize={50}
                    width="auto"
                    placeholder="email"
                    required
                  />
                  <br />
                  <br />

                  <Input
                    {...password}
                    htmlSize={50}
                    width="auto"
                    type="password"
                    placeholder="Contraseña"
                    required
                  />
                  <br />
                  <br />
                  {/* <Link to="/signup">
                    <h6> No tengo cuenta en miPark </h6>
                  </Link> */}
                  <br />
                  <br />
                  <Button colorScheme="blue" type="submit">
                    Iniciar Sesion
                  </Button>
                </form>
                <br />
                <br />
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Login;
