import React, { useState } from "react";
import {
  Box,
  Center,
  Input,
  Stack,
  Button,
  Checkbox,
  Text,
  Card,
  Wrap,
} from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import axios from "axios";
import Cards from "../commons/card";
import { Link } from "react-router-dom";

const Content = () => {
  const provincia = useInput();
  const ciudad = useInput();
  const vehicleType = useInput();
  const [checked, setChecked] = useState(false);
  const [searched, setSearched] = useState([]);

  const handlerCochera = (e) => {
    e.preventDefault();
    const logPark = {
      ciudad: ciudad.value,
      provincia: provincia.value,
      vehicleType: checked,
    };

    axios
      .get("http://localhost:8080/api/parkings/search/allparkings")
      .then((res) => res.data.data)
      .then((res) => {
        setSearched(res);
      });
  };

  console.log("SOY SEARCHED", searched);

  const handleCheckbox = (e) => {
    e.preventDefault();
    setChecked(e.target.checked);
    console.log("SOY EL CHECKBOX", e.target.checked);
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
            <Box display="flex" alignItems="center" justifycontent={"center"}>
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
                <form onSubmit={handlerCochera}>
                  <Box justifycontent={"space-between"}>
                    <Stack spacing={5}>
                      <Input
                        {...provincia}
                        variant="outline"
                        placeholder="¿En que provincia buscas estacionar?"
                      />
                      <Input
                        {...ciudad}
                        variant="outline"
                        placeholder="Y, ¿en que ciudad?"
                      />
                      <br />
                      <Box>
                        <Checkbox {...vehicleType} onChange={handleCheckbox}>
                          Tenes una camioneta?
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
        {searched.length > 0 ? (
          searched.map((item, i) => (
            <div key={i}>
              <Wrap key={i} maxWidth={"80%"}>
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
