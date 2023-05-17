import React, { useState } from "react";
import {
  Link,
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
} from "@chakra-ui/react";

const Sidebar = () => {
  const [prov, setProv] = useState("");

  const handelprov = (e) => {
    console.log(e);
  };

  return (
    <Box
      marginTop={"80px"}
      bg="lightblue"
      w="10%"
      h="92%"
      position="fixed"
      left="0" // Cambiar la propiedad de posicionamiento a "left"
      padding={5}
      boxShadow={"2xl"}
    >
      <Flex direction="column" height="100%">
        <Box flex="1">
          <br />
          <Button colorScheme="gray" w={"95%"}>
            Quiero ser huesped
          </Button>
          <br />
          <br />
          <Button colorScheme="gray" w={"95%"}>
            Quiero ser anfitrion
          </Button>
          <br />
          <br />
          <Menu>
            <MenuButton as={Button} colorScheme="gray" w={"95%"}>
              Provincia
            </MenuButton>

            <MenuList>
              <MenuItem id="Entre Rios" onClick={() => handelprov()}>
                Entre Rios
              </MenuItem>
              <MenuItem onClick={handelprov}>Salta</MenuItem>
            </MenuList>
          </Menu>
          <br />
          <br />
          <Menu>
            <MenuButton as={Button} colorScheme="gray" w={"95%"}>
              Ciudad
            </MenuButton>
            <MenuList>
              <Link to="/login">
                <MenuItem>Salta</MenuItem>
              </Link>
              <Link to="/signup">
                <MenuItem>Parana</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <br />
          <br />
          <Input placeholder="Buscar" w={"95%"}></Input>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
