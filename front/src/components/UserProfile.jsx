import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar, Switch } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const UserProfile = () => {
  const actualUser = useSelector((state) => state.user);
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
    axiosUser();
  }, []);

  return (
    userUpdate && (
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

        <Badge variant="subtle" colorScheme="teal" mb="2">
          {userUpdate.admin ? "ADMIN" : "USER"}
        </Badge>

        <Switch
          size="lg"
          colorScheme="teal"
          isChecked={userUpdate.admin}
          // onChange={handleRoleChange}
        />
      </Flex>
    )
  );
};
export default UserProfile;
