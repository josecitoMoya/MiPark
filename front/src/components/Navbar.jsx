import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, email } = useSelector((state) => state.user);

  const handleLogOut = (e) => {
    e.preventDefault(e);

    axios
      .get("http://localhost:8080/api/user/logout", { withCredentials: true })
      .then((res) => dispatch(addUser(res)))
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
            borderRadius="full"
            boxSize="90px"
            src="https://i.postimg.cc/Tww4LMvp/unnamed.png"
          />
        </Link>
        <Box>
          <Heading>miPark</Heading>
        </Box>
        {firstName ? (
          <Menu>
            <MenuButton as={Button}>{firstName}</MenuButton>
            <MenuList>
              <Link to="/login">
                <MenuItem>Carrito</MenuItem>
              </Link>
              <Link to="/logout">
                <MenuItem onClick={handleLogOut}>Cerrar sesión</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuButton as={Button}>¿Tienes usuario?</MenuButton>
            <MenuList>
              <Link to="/login">
                <MenuItem>Iniciar sesión</MenuItem>
              </Link>
              <Link to="/signup">
                <MenuItem>Registrarse</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </div>
  );
};

export default Navbar;
