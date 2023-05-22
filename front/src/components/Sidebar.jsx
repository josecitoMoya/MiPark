import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const { admin, firstName } = useSelector((state) => state.user);
  console.log("SOY EL ADMIN DE SIDEBAR", admin);

  return (
    <div>
      <Box
        bg="lightblue"
        w="15%"
        h="100%" // Cambiado a "100%"
        position="fixed" // Cambiado a "fixed"
        left="0"
        top="124px" // Añadido
        bottom="0" // Añadido
        padding={5}
        boxShadow={"2xl"}
      >
        {admin ? (
          <Stack>
            <Link>
              <Button w={"100%"}>Usuarios</Button>
            </Link>
            <Link to={"/admin-cocheras"}>
              <Button w={"100%"}>Cocheras</Button>
            </Link>
            <Link>
              <Button w={"100%"}>Reservas</Button>
            </Link>
            <Link>
              <Button w={"100%"}>Transacciones</Button>
            </Link>
          </Stack>
        ) : (
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "lightgrey" }}>
                  <Box as="span" flex="1" textAlign="center">
                    Quiero ser anfitrion
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                textAlign={"justify"}
                alignItems={"center"}
              >
                Ser anfitrión de una cochera implica ofrecer un espacio seguro y
                cerrado para que los huéspedes alquilen y guarden sus vehículos.
                A cambio de este servicio, recibirás una tarifa por el alquiler.
                Como anfitrión, es importante brindar un entorno confiable,
                mantener la cochera en buen estado.
                <br />
                <br />
                {firstName ? (
                  <Stack flex={1} spacing={1} alignItems={"center"} w={"100%"}>
                    <Link to={"/anfitrion"}>
                      <Button p={4}>Quiero alquilar mi cochera</Button>
                    </Link>
                  </Stack>
                ) : (
                  <Stack flex={1} spacing={1} alignItems={"center"}>
                    <Link to={"/login"}>
                      <Button p={4}>Quiero alquilar mi cochera</Button>
                    </Link>
                  </Stack>
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
                estacionar tu vehículo, especialmente si no hay suficiente
                espacio de estacionamiento disponible en el lugar donde te
                hospedas o si buscas una opción más segura que dejar tu vehículo
                en la vía pública.
                <br />
                <br />
                {firstName ? (
                  <Stack flex={1} spacing={1} alignItems={"center"} w={"100%"}>
                    <Link to={"/huesped"}>
                      <Button w={"100%"} p={4}>
                        Quiero alquilar una cochera
                      </Button>
                    </Link>
                  </Stack>
                ) : (
                  <Stack flex={1} spacing={1} alignItems={"center"}>
                    <Link to={"/login"}>
                      <Button w={"100%"} p={4}>
                        Quiero alquilar una cochera
                      </Button>
                    </Link>
                  </Stack>
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}
      </Box>
    </div>
  );
};

export default Sidebar;
