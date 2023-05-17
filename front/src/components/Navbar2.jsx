import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user";

const Navbar2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { firstName, lastName, email } = useSelector((state) => state.user);

  const handleLogOut = (e) => {
    e.preventDefault(e);

    axios
      .get("http://localhost:8080/api/user/logout", { withCredentials: true })
      .then((res) => dispatch(addUser(res)))
      .then(onClose)
      .then(navigate("/"));
  };

  return (
    <div>
      <Flex
        width="100%"
        minHeight="90px"
        backgroundColor="lightblue"
        alignItems="center"
        justifyContent="space-between"
        p="2"
        position="fixed"
        top="0"
        zIndex="999"
      >
        <Link to="/">
          <Image
            marginLeft={"75px"}
            borderRadius="full"
            boxSize="90px"
            src="https://i.postimg.cc/Tww4LMvp/unnamed.png"
          />
        </Link>
        <Box>
          <Link to={"/"}>
            <Heading>miPark</Heading>
          </Link>
        </Box>
        {firstName ? (
          <Button ref={btnRef} onClick={onOpen} w={"200px"}>
            {firstName}
          </Button>
        ) : (
          <Button ref={btnRef} onClick={onOpen} w={"200px"}>
            ¿Tienes usuario?
          </Button>
        )}

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor={"lightblue"}>
            <DrawerCloseButton />
            {firstName ? (
              <DrawerHeader>Menu de {firstName}</DrawerHeader>
            ) : (
              <DrawerHeader alignContent={"center"}>Menu</DrawerHeader>
            )}
            <DrawerBody alignItems={"center"} p={10} w={"400px"}>
              {firstName ? (
                <>
                  <Button w={"190px"}> Carrito </Button>
                  <br />
                  <br />
                  <Button w={"190px"}> Reservas </Button>
                </>
              ) : (
                <div justifyContent="center">
                  <Link to={"login"}>
                    <Button w={"190px"} onClick={onClose}>
                      Iniciar Sesion
                    </Button>
                  </Link>
                  <br />

                  <br />
                  <Link to={"/signup"}>
                    <Button w={"190px"} onClick={onClose}>
                      Registrarse
                    </Button>
                  </Link>
                </div>
              )}
            </DrawerBody>

            <DrawerFooter justifyContent={"center"}>
              {firstName ? (
                <Link to={"/logout"}>
                  <Button onClick={handleLogOut} w={"250px"}>
                    Cerrar Sesion
                  </Button>
                </Link>
              ) : (
                <h1>.</h1>
              )}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </div>
  );
};

export default Navbar2;