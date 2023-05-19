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

const Cards = ({ data }) => {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "350px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody textAlign={"justify"}>
            <Heading size="xl">{data.address}</Heading>
            <br />
            {/* <Text color="blue.600" fontSize="2xl">
            {data.address}
          </Text> */}
            <Text py="2">
              Esta cochera queda en el barrio {data.zone},{" "}
              {data.van_able
                ? "tiene capacidad para albergar camionetas."
                : "solo tiene capacidad para albergar automoviles."}
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
            <Button variant="solid" colorScheme="blue">
              Reservar
            </Button>
          </Center>
        </CardFooter>
      </Card>
      <br />
    </>
  );
};

export default Cards;
