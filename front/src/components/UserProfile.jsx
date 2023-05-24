import { Badge, Box, Flex, Heading, Text, Wrap } from "@chakra-ui/layout";
import { Avatar, Switch } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import AdminCards from "../commons/Admin_cards";

const UserProfile = () => {
  const actualUser = useSelector((state) => state.user);
  const [parks, setParks] = useState([]);
  const [userUpdate, setUserUpdate] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    const axiosUser = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/user/${userId}`
        );
        setUserUpdate(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const axiosParkingUser = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/parkings/search/?id=${userId}`
        );
        setParks(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosUser();
    axiosParkingUser();
  }, []);

  const handleRoleChange = (e) => {
    if (e.target.checked) {
      axios
        .put("http://localhost:8080/api/admin/users/user-toggle-admin", {
          id: userUpdate.id,
        })
        .then((res) => res.data)
        .then(({ data }) => setUserUpdate(data))
        .catch((error) => console.log(error));
    } else {
      axios
        .put("http://localhost:8080/api/admin/users/user-toggle-admin", {
          id: userUpdate.id,
        })
        .then((res) => res.data)
        .then(({ data }) => setUserUpdate(data))
        .catch((error) => console.log(error));
    }
  };

  return (
    userUpdate && (
      <>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          bg="gray.800"
          color="white"
          py={12}
          px={6}
        >
          <Avatar size="2xl" src={"https://bit.ly/broken-link"} mb={4} />
          <Box>
            <Heading as="h1" size="lg" mb={2} textAlign="center">
              {userUpdate.firstName + " " + userUpdate.lastName}
            </Heading>
          </Box>

          <Text fontSize="sm" color="gray.500" mb="4">
            {userUpdate.email}
          </Text>

          {actualUser.admin && (
            <>
              <Badge variant="subtle" colorScheme="teal" mb="2">
                {userUpdate.admin ? "ADMIN" : "USER"}
              </Badge>

              <Switch
                size="lg"
                colorScheme="teal"
                isChecked={userUpdate.admin}
                onChange={handleRoleChange}
              />
            </>
          )}
        </Flex>
        {parks?.map((item, i) => (
          <Wrap key={i} w={"70%"} p={4} ml={"12%"}>
            <AdminCards data={item} path={false} />
          </Wrap>
        ))}
      </>
    )
  );
};
export default UserProfile;
