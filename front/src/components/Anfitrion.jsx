import React, { useState } from "react";
import {
  Box,
  Center,
  Checkbox,
  Input,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Anfitrion = () => {
  const address = useInput();
  const zone = useInput();
  const city = useInput();
  const province = useInput();
  const roof = useInput();
  const van_able = useInput();
  const [roofChecked, setRoofChecked] = useState(false);
  const [truckChecked, setTruckChecked] = useState(false);
  const from_hour = useInput();
  const to_hour = useInput();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handlerCochera = (e) => {
    e.preventDefault();
    const logPark = {
      address: address.value,
      zone: zone.value,
      city: city.value,
      province: province.value,
      roof: roofChecked,
      van_able: truckChecked,
      hablitada: false,
      ownerId: user.id,
      from_hour: from_hour.value,
      to_hour: to_hour.value,
    };

    axios
      .post("http://localhost:8080/api/parkings/createparking", logPark, {
        withCredentials: true,
      })
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleRoofCheckbox = (e) => {
    e.preventDefault();
    setRoofChecked(e.target.checked);
  };

  const handleTruckCheckbox = (e) => {
    e.preventDefault();
    setTruckChecked(e.target.checked);
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
          <Text fontSize={"4xl"} textAlign={"center"}>
            Alta de cochera
          </Text>

          <form onSubmit={handlerCochera} style={{ padding: "30px" }}>
            <Stack spacing={5}>
              <Input
                {...address}
                htmlSize={50}
                width={"auto"}
                backgroundColor={"white"}
                variant="outline"
                placeholder="Domicilio"
                required
              />
              <Input
                {...zone}
                htmlSize={50}
                width={"auto"}
                backgroundColor={"white"}
                variant="outline"
                placeholder="Barrio"
                required
              />
              <Input
                {...city}
                htmlSize={50}
                width={"auto"}
                backgroundColor={"white"}
                variant="outline"
                placeholder="Ciudad"
                required
              />
              <Input
                {...province}
                htmlSize={50}
                width={"auto"}
                backgroundColor={"white"}
                variant="outline"
                placeholder="Provincia"
                required
              />
              <Input
                {...from_hour}
                htmlSize={50}
                width={"auto"}
                backgroundColor={"white"}
                variant="outline"
                type="time"
                placeholder="Desde que hora esta disponible"
                required
              />
              <Input
                {...to_hour}
                htmlSize={50}
                width={"auto"}
                backgroundColor={"white"}
                variant="outline"
                type="time"
                placeholder="Hasta que hora esta disponible"
                required
              />

              <Box p={4} justifycontent={"left"}>
                <Stack p={2}>
                  <Checkbox {...roof} onChange={handleRoofCheckbox}>
                    Es techada?
                  </Checkbox>
                </Stack>
                <Stack p={2}>
                  <Checkbox {...van_able} onChange={handleTruckCheckbox}>
                    Es apta para camionetas?
                  </Checkbox>
                </Stack>
              </Box>

              <Button type="submit" colorScheme="blue">
                Cargar cochera
              </Button>
            </Stack>
            <input type="hidden" value={user} />
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Anfitrion;
