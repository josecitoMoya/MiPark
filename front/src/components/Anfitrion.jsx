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
    console.log("SOY EL CHECKBOX", e.target.checked);
  };

  const handleTruckCheckbox = (e) => {
    e.preventDefault();
    setTruckChecked(e.target.checked);
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
                <br />
                <br />
                <Text fontSize={"4xl"}>Alta de cochera</Text>
                <br />
                <br />
                <form onSubmit={handlerCochera}>
                  <Stack spacing={5}>
                    <Input
                      {...address}
                      variant="outline"
                      placeholder="Domicilio"
                      required
                    />
                    <Input
                      {...zone}
                      variant="outline"
                      placeholder="Barrio"
                      required
                    />
                    <Input
                      {...city}
                      variant="outline"
                      placeholder="Ciudad"
                      required
                    />
                    <Input
                      {...province}
                      variant="outline"
                      placeholder="Provincia"
                      required
                    />
                    <Input
                      {...from_hour}
                      variant="outline"
                      type="number"
                      placeholder="Desde que hora esta disponible"
                      required
                    />
                    <Input
                      {...to_hour}
                      variant="outline"
                      type="number"
                      placeholder="Hasta que hora esta disponible"
                      required
                    />
                    <br />

                    <Box p={4} justifycontent={"left"}>
                      <Checkbox {...roof} onChange={handleRoofCheckbox}>
                        Es techada?
                      </Checkbox>

                      <br />
                      <Checkbox {...van_able} onChange={handleTruckCheckbox}>
                        Es apta para camionetas?
                      </Checkbox>
                    </Box>
                    <br />
                    <Button type="submit" colorScheme="blue">
                      Cargar cochera
                    </Button>
                  </Stack>
                  <input type="hidden" value={user} />
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

export default Anfitrion;
