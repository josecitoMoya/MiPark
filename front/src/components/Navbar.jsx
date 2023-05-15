import React, { useContext } from "react";
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
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <Flex
        width="100%"
        minHeight="90px"
        backgroundColor="lightblue"
        alignItems="center"
        justifyContent="space-between"
        p="2"
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
        <Menu>
          <MenuButton as={Button}>Tenes usuario?</MenuButton>
          <MenuList>
            <Link to="/login">
              <MenuItem>Iniciar Sesion</MenuItem>
            </Link>
            <Link to="/signup">
              <MenuItem>Registrarse</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </div>
  );
};

export default Navbar;
