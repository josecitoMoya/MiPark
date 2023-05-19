import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Input,
  Stack,
  Button,
  Checkbox,
  Text,
  Select,
  Wrap,
} from "@chakra-ui/react";
import axios from "axios";
import Cards from "../commons/card";
import { Link } from "react-router-dom";

const Content = () => {
  const [provinces, setProvinces] = useState([]); //pido todas las provincias con cocheras.
  const [provinceSelected, setProvinceSelected] = useState("");
  const [city, setCity] = useState([]); //pido todas las ciudades de la provincia seleccionada que tengas cocheras.
  const [roofChecked, setRoofChecked] = useState(false); // Soy el checkbox de roof
  const [truckChecked, setTruckChecked] = useState(false); // Soy el checkbox de van_able
  const [filtered, setFiltered] = useState([]); // recibo las cocheras dsp de los filtros

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/parkings/search/allparkings")
      .then((res) => res.data.data)
      .then((res) => {
        console.log("ESTO ES LO QUE LLEGA A PRVINCES", res);
        setProvinces(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProvince = (e) => {
    e.preventDefault();
    const provinceSelected1 = e.target.value;
    if (!provinceSelected1) return alert("Por favor selecciona una provincia");
    setProvinceSelected(provinceSelected1);

    axios
      .get(
        `http://localhost:8080/api/parkings/search/province/${provinceSelected1}`
      )
      .then((res) => setCity(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleCity = (e) => {
    e.preventDefault();
    const citySelected = e.target.value;
    if (!citySelected) return alert("Por favor elegi una ciudad.");
  };

  const handleRoofCheckbox = (e) => {
    e.preventDefault();
    setRoofChecked(e.target.checked);
  };

  const handleTruckCheckbox = (e) => {
    e.preventDefault();
    setTruckChecked(e.target.checked);
  };

  const handlerSearch = (e) => {
    e.preventDefault();
    const logPark = {
      city: city[0].city,
      provinces: provinceSelected,
      van_able: truckChecked,
      roof: roofChecked,
    };

    axios
      .get(
        `http://localhost:8080/api/parkings/searching?province=${logPark.provinces}&city=${logPark.city}&roof=${logPark.roof}&van_able=${logPark.van_able}`
      )
      .then((res) => setFiltered(res.data.data))
      .then(console.log(filtered))
      .catch((err) => err);
  };

  return (
    <div>
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
                <Text fontSize={"4xl"}>Busca tu cochera</Text>
                <br />
                <br />
                <form onSubmit={handlerSearch}>
                  <Box justifycontent={"space-between"}>
                    <Stack spacing={5}>
                      <Select
                        placeholder="¿En que provincia buscas estacionar?"
                        onClick={handleProvince}
                      >
                        {provinces.map((item, i) => (
                          <option value={item.province} key={i}>
                            {item.province}
                          </option>
                        ))}
                      </Select>
                      <br />
                      <Select
                        placeholder="Y, ¿en que ciudad?"
                        onClick={handleCity}
                      >
                        {city.map((item, i) => (
                          <option value={item.city} key={i}>
                            {item.city}
                          </option>
                        ))}
                      </Select>
                      <br />
                      <Box alignContent={"space-between"}>
                        <Checkbox onChange={handleTruckCheckbox}>
                          Tenes una camioneta?
                        </Checkbox>
                        <br />
                        <br />
                        <Checkbox onChange={handleRoofCheckbox}>
                          Buscas que sea techada?
                        </Checkbox>
                      </Box>
                      <br />
                      <br />

                      <Button type="submit" colorScheme="blue">
                        Buscar cochera
                      </Button>
                      <br />
                      <br />
                    </Stack>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
      <br />
      <br />
      <br />
      <br />
      <div>
        {filtered.length > 0 ? (
          filtered.map((item, i) => (
            <div>
              <Wrap key={i} w={"70%"} p={4} ml={"12%"}>
                <Link to={`/reservation/${item.id}`}>
                  <Cards data={item} />
                </Link>
              </Wrap>
            </div>
          ))
        ) : (
          <Text>No se encontraron resultados</Text>
        )}
      </div>
    </div>
  );
};

export default Content;
