import React, { useState } from "react";
import { Box, Center, Checkbox, Input, Stack, Button } from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import axios from "axios";

const Anfitrion = () => {
  const address = useInput();
  const barrio = useInput();
  const ciudad = useInput();
  const provincia = useInput();
  const roof = useInput();
  const coordinates = useInput();
  const vehicleType = useInput();
  const pricePerHour = useInput();
  const [checked, setChecked] = useState(false);

  const handlerCochera = (e) => {
    e.preventDefault();
    const logPark = {
      address: address.value,
      barrio: barrio.value,
      ciudad: ciudad.value,
      provincia: provincia.value,
      roof: checked,
      coordinates: coordinates.value,
      vehicleType: vehicleType.value,
      pricePerHour: pricePerHour.value,
    };

    console.log("ESTA ES LA CARGA DE ANFITRION", logPark);

    axios
      .post("http://localhost:8080/api/parkings/crearparking", logPark, {
        withCredentials: true,
      })
      .then((res) =>
        console.log("SOY LA RTA DE BACK PARA LA CARGA DE PARKING", res)
      )
      .catch((err) => console.log(err));
  };

  const handleCheckbox = (e) => {
    e.preventDefault();
    setChecked(e.target.checked);
    console.log("SOY EL CHECKBOX", e.target.checked);
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
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              <Box
                color="black"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="2xl"
                textTransform="uppercase"
                ml="2"
                w={"80%"}
              >
                <h1>Alta de cochera</h1>
                <br />
                <br />
                <form onSubmit={handlerCochera}>
                  <Stack spacing={5}>
                    <Input
                      {...address}
                      variant="outline"
                      placeholder="Domicilio"
                    />
                    <Input {...barrio} variant="outline" placeholder="Barrio" />
                    <Input {...ciudad} variant="outline" placeholder="Ciudad" />
                    <Input
                      {...provincia}
                      variant="outline"
                      placeholder="Provincia"
                    />
                    <Input
                      {...coordinates}
                      variant="outline"
                      placeholder="Coordenadas"
                    />
                    <Input
                      {...vehicleType}
                      variant="outline"
                      placeholder="Tipo de vehiculo"
                    />
                    <Input
                      {...pricePerHour}
                      variant="outline"
                      placeholder="Precio"
                    />

                    <Box p={4} justifyContent={"space-between"}>
                      <Checkbox {...roof} onChange={handleCheckbox}>
                        Es techada?
                      </Checkbox>
                    </Box>
                    <Button type="submit">Cargar cochera</Button>
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

export default Anfitrion;
