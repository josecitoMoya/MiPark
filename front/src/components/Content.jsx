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
import { Link, useLocation } from "react-router-dom";

const Content = () => {
  const [provinces, setProvinces] = useState([]); //pido todas las provincias con cocheras.
  const [provinceSelected, setProvinceSelected] = useState("");
  const [city, setCity] = useState([]); //pido todas las ciudades de la provincia seleccionada que tengas cocheras.
  const [roofChecked, setRoofChecked] = useState(false); // Soy el checkbox de roof
  const [truckChecked, setTruckChecked] = useState(false); // Soy el checkbox de van_able
  const [filtered, setFiltered] = useState([]); // recibo las cocheras dsp de los filtros
  const [path, setPath] = useState({});

  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/parkings/search/allparkings")
      .then((res) => res.data.data)
      .then((res) => {
        let valoresUnicos = res.filter(
          (objeto, index, self) =>
            index === self.findIndex((o) => o.province === objeto.province)
        );

        setProvinces(valoresUnicos);
        console.log("ESTO ES LO QUE LLEGA A PRVINCES", provinces);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProvince = (e) => {
    e.preventDefault();
    const provinceSelected1 = e.target.value;
    if (!provinceSelected1) return alert("Por favor selecciona una provincia");
    setProvinceSelected(provinceSelected1);
    console.log("SOY LA PROVINCIA SELECCIONADA", provinceSelected1);

    axios
      .get(
        `http://localhost:8080/api/parkings/search/?province=${provinceSelected1}`
      )
      .then((res) => res.data.data)
      .then((res) => {
        let valoresUnicos = res.filter(
          (objeto, index, self) =>
            index === self.findIndex((o) => o.city === objeto.city)
        );

        setCity(valoresUnicos);
      })
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
      // van_able: truckChecked,
      // roof: roofChecked,
    };

    axios
      .get(
        `http://localhost:8080/api/parkings/search?province=${logPark.provinces}&city=${logPark.city}` //&roof=${logPark.roof}&van_able=${logPark.van_able}
      )
      .then((res) => setFiltered(res.data.data))
      .then(setPath(false))
      .then(console.log(filtered))
      .catch((err) => err);
  };
  console.log("SOY LO QUE LLEGA DE FILTRAR LA CIUDAD", filtered);

  return (
    <>
      <Center
        textAlign={"center"}
        h="75%"
        color="white"
        marginTop={"5%"}
        borderWidth="3px"
        borderRadius="lg"
        width={"50%"}
      >
        <div>
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
              Busca tu cochera
            </Text>

            <form onSubmit={handlerSearch} style={{ padding: "30px" }}>
              <Box justifycontent={"space-between"}>
                <Stack spacing={5}>
                  <Select
                    placeholder="¿En que provincia buscas estacionar?"
                    backgroundColor={"white"}
                    onClick={handleProvince}
                  >
                    {provinces.map((item, i) => (
                      <option value={item.province} key={item.id}>
                        {item.province}
                      </option>
                    ))}
                  </Select>
                  <br />
                  <Select
                    backgroundColor={"white"}
                    placeholder="Y, ¿en que ciudad?"
                    onClick={handleCity}
                  >
                    {city.map((item, i) => (
                      <option value={item.city} key={item.id}>
                        {item.city}
                      </option>
                    ))}
                  </Select>

                  <Button type="submit" colorScheme="blue">
                    Buscar cochera
                  </Button>
                  <br />
                  <br />
                </Stack>
              </Box>
            </form>
          </Box>
          <div>
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <div>
                  <Wrap key={i} p={4}>
                    <Link to={`/reservation/${item.id}`}>
                      <Cards data={item} path={path} />
                    </Link>
                  </Wrap>
                </div>
              ))
            ) : (
              <Stack p={20}>
                <Text fontSize={"xl"} color={"black"}>
                  No se encontraron resultados
                </Text>
              </Stack>
            )}
          </div>
        </div>
      </Center>
    </>
  );
};

export default Content;
