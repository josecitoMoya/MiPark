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
import { useSelector } from "react-redux";

const List = () => {
  const [parks, setParks] = useState([]);
  const user = useSelector((state) => state.user);
  async function getParks() {
    const { data } = await axios.get(
      "http://localhost:8080/api/parkings/search/allparkings"
    );
    setParks(data.data);
  }

  useEffect(() => {
    getParks();
  }, []);

  return (
    <Wrap h={"100%"}>
      {!parks ? (
        <h1>NO hay Parks</h1>
      ) : (
        parks.map((park) => {
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
                  {user.id ? (
                    <Button variant="solid" colorScheme="blue">
                      Reserve now
                    </Button>
                  ) : (
                    ""
                  )}
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
                    Valor $ {park.price_per_hour}
                  </Text>
                </Stack>
              </CardBody>

              <Divider />
            </Card>
          );
        })
      )}
    </Wrap>
  );
};

export default List;
