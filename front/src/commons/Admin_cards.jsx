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
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminCards = ({ data }) => {
  const { firstName, lastName, id } = data.owner;
  const [authorization, setAuthorization] = useState(data.authorized);

  const handleAutoritation = () => {
    const idCochera = {
      id: data.id,
    };

    axios
      .put(
        "http://localhost:8080/api/admin/parkings/authorize-parking",
        idCochera
      )
      .then((res) => res.data.data)
      .then((res) => setAuthorization(res.authorized));
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "350px" }}
        src={data.image}
        alt="MiPark"
      />

      <Stack>
        <CardBody textAlign={"justify"}>
          <Heading size="xl">
            User: {firstName} {lastName}
          </Heading>
          <br />
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
          <Stack spacing={2}>
            {authorization == false ? (
              <Button
                variant="solid"
                colorScheme="green"
                onClick={handleAutoritation}
              >
                Autorizar cochera
              </Button>
            ) : (
              <Button
                variant="solid"
                colorScheme="red"
                onClick={handleAutoritation}
              >
                Desautorizar cochera
              </Button>
            )}
          </Stack>
        </Center>
      </CardFooter>
    </Card>
  );
};

export default AdminCards;
