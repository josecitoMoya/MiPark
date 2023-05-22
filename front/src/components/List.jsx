import {
  Wrap,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [parks, setParks] = useState([]);

  /*  async function getParks() {
    const resul = await fetch(
      "http://localhost:8080/api/parkings/search/allparkings"
    );
    const result = await resul.json();
    console.log(result.data);
    setParks(resul.data);
    console.log(parks);
  } */

  async function getParks() {
    const search = await fetch(
      "http://localhost:8080/api/parkings/search/allparkings"
    );
    const parks = await search.json();
    setParks(parks.data);
  }

  useEffect(() => {
    getParks();
  }, []);

  return (
    <div>
      <h1>.</h1>
      <Wrap>
        {parks.map((park) => {
          return (
            <Card maxW="md" key={park.id} bg="blue.100">
              <CardBody>
                <Image
                  //  onClick={() => handleReserva(park)}

                  src={park.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <br />

                <Link to={`/reservation/${park.id}`}>
                  <Button variant="solid" colorScheme="blue">
                    Reserve now
                  </Button>
                </Link>

                <Link to={`/park/${park.id}`}>
                  <Button variant="ghost" colorScheme="blue">
                    Details
                  </Button>
                </Link>

                <Stack mt="6" spacing="3">
                  <Heading size="md">Park reservation</Heading>
                  <div>
                    <li>Ciudad : {park.city}</li>
                    <li>Provincia :{park.province}</li>
                    <li>ubicacion : {park.address}</li>
                  </div>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>

              <Stack spacing={4} direction="row" align="center">
                <Button colorScheme="teal" variant="outline" size="md">
                  Back
                </Button>
              </Stack>

              <Divider />
            </Card>
          );
        })}
      </Wrap>
    </div>
  );
};

export default List;
