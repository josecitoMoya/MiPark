import {
  Button,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Badge,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const AdminReservationsCards = ({ data }) => {
  const handleCancelation = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/api/reserves/remove-reserve:${data.id}`)
      .then((res) => res.data)
      .then((res) => console.log(res));
  };

  return (
    <>
      <Card
        w={"100%"}
        backgroundColor={"whitesmoke"}
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Heading
          size="md"
          objectFit="cover"
          maxW={{ base: "100%", sm: "350px" }}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          height="100%"
          display="flex"
          flexDirection="column"
          p={8}
        >
          FECHA DE RESERVA
          <Text pt={8}>{data.date}</Text>
        </Heading>

        <CardBody display="flex" justifyContent="space-between" pl={"15%"}>
          <Box>
            <Stack>
              <Heading
                textTransform="uppercase"
                size="md"
                objectFit="cover"
                maxW={{ base: "100%", sm: "350px" }}
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                height="100%"
                display="flex"
                flexDirection="column"
                p={8}
              >
                Horario de reserva
                <Text pt={8}>{data.hour}:00</Text>
              </Heading>
            </Stack>
          </Box>
          <Stack spacing={10} pt={"2"}>
            <Box w={"200px"}>
              <Badge
                borderRadius={15}
                variant="subtle"
                colorScheme="green"
                w={"200px"}
                h={"35px"}
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                display="flex"
                flexDirection="column"
              >
                {data.state}
              </Badge>
            </Box>
            <Box>
              <Button w={"200px"} colorScheme="red" onClick={handleCancelation}>
                Eliminar Reserva
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default AdminReservationsCards;
