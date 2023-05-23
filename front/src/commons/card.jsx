import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Divider,
  Image,
  Heading,
  Center,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const Cards = ({ data, path }) => {
  const [parkinStatus, setParkinStatus] = useState(data.dropped);
  const { id } = useSelector((state) => state.user);

  const handleDelete = (e) => {
    e.preventDefault();
    const id = {
      id: data.id,
    };
    axios
      .put("http://localhost:8080/api/parkings/drop-parking", id)
      .then((res) => res.data.data)
      .then((res) => setParkinStatus(res.dropped));
  };

  return (
    <>
      <Card
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "350px" }}
          src="https://i.postimg.cc/Tww4LMvp/unnamed.png"
          alt="MiPark"
        />
        <Stack>
          <CardBody textAlign={"justify"}>
            <Heading size="xl">{data.address}</Heading>
            <br />
            {/* <Text color="blue.600" fontSize="2xl">
            {data.address}
          </Text> */}
            <Text py="2" minW={"100%"}>
              Esta cochera queda en el barrio {data.zone},{" "}
              {data.van_able
                ? "tiene capacidad para albergar camionetas. "
                : "solo tiene capacidad para albergar automoviles. "}
              {data.roof ? "Es techada, " : "No es techada ,"} y sus horarios de
              ocupacion son de {data.from_hour} hrs a {data.to_hour} hrs.
            </Text>
            <br />
            <Text color="blue.600" fontSize="2xl">
              Precio por hora: ${data.price_per_hour}
            </Text>
          </CardBody>
          <Divider />
        </Stack>
        <CardFooter>
          <Center alignItems={"center"}>
            {path ? (
              <Stack spacing={2}>
                {parkinStatus == false ? (
                  <Button
                    variant="solid"
                    colorScheme="green"
                    onClick={handleDelete}
                  >
                    Activar cochera
                  </Button>
                ) : (
                  <Button
                    variant="solid"
                    colorScheme="red"
                    onClick={handleDelete}
                  >
                    Desactivar cochera
                  </Button>
                )}
              </Stack>
            ) : (
              <Button variant="solid" colorScheme="blue">
                Reservar
              </Button>
            )}
          </Center>
        </CardFooter>
      </Card>
      <br />
    </>
  );
};

export default Cards;
