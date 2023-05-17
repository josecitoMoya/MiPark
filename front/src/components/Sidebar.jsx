import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const { firstName } = useSelector((state) => state.user);

  return (
    <div>
      <Box
        marginTop={"80px"}
        bg="lightblue"
        w="15%"
        h="92%"
        position="fixed"
        left="0" // Cambiar la propiedad de posicionamiento a "left"
        padding={5}
        boxShadow={"2xl"}
      >
        <br />
        <br />
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "lightgrey" }}>
                <Box as="span" flex="1" textAlign="center">
                  Quiero ser anfitrion
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={"justify"} alignItems={"center"}>
              Ser anfitrión de una cochera implica ofrecer un espacio seguro y
              cerrado para que los huéspedes alquilen y guarden sus vehículos. A
              cambio de este servicio, recibirás una tarifa por el alquiler.
              Como anfitrión, es importante brindar un entorno confiable,
              mantener la cochera en buen estado.
              <br />
              <br />
              {firstName ? (
                <Link to={"/anfitrion"}>
                  <Button w={"100%"} p={4}>
                    Quiero alquilar mi cochera
                  </Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button w={"100%"} p={4}>
                    Quiero alquilar mi cochera
                  </Button>
                </Link>
              )}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "lightgrey" }}>
                <Box as="span" flex="1" textAlign="center">
                  Quiero ser huesped
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={"justify"}>
              Como huésped, pagas una tarifa por el alquiler de la cochera, lo
              cual te brinda la tranquilidad de tener un lugar adecuado para
              estacionar tu vehículo, especialmente si no hay suficiente espacio
              de estacionamiento disponible en el lugar donde te hospedas o si
              buscas una opción más segura que dejar tu vehículo en la vía
              pública.
              <br />
              <br />
              {firstName ? (
                <Link to={"/buscar"}>
                  <Button w={"100%"} p={4}>
                    Quiero alquilar una cochera
                  </Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button w={"100%"} p={4}>
                    Quiero alquilar una cochera
                  </Button>
                </Link>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </div>

  );
};

export default Sidebar;
