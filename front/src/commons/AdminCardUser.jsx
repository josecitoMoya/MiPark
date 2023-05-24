import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Button,
  Switch,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminCardUser = ({ user }) => {
  const [userUpdate, setUserUpdate] = useState(user);
  console.log(userUpdate);
  const avatar =
    "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

  const handleRoleChange = (e) => {
    if (e.target.checked) {
      axios
        .put("http://localhost:8080/api/admin/users/user-toggle-admin", {
          id: user.id,
        })
        .then((res) => res.data)
        .then(({ data }) => setUserUpdate(data))
        .catch((error) => console.log(error));
    } else {
      axios
        .put("http://localhost:8080/api/admin/users/user-toggle-admin", {
          id: user.id,
        })
        .then((res) => res.data)
        .then(({ data }) => setUserUpdate(data))
        .catch((error) => console.log(error));
    }
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      m={"20px"}
      p={"60px"}
    >
      <Flex justify="center" align="center" h="200px">
        <Link to={`/admin/user/${user.id}`}>
          <Image boxSize={"200px"} src={avatar} alt={user.firstName} />
        </Link>
      </Flex>
      <Box p="4">
        <Link to={`admin/user/${user.id}`}>
          <Text fontWeight="bold" fontSize="xl" mb="2">
            {user.firstName} {user.lastName}
          </Text>
        </Link>

        <Text fontSize="sm" color="gray.500" mb="4">
          {user.email}
        </Text>

        <Badge variant="subtle" colorScheme="teal" mb="2">
          {userUpdate.admin ? "ADMIN" : "USER"}
        </Badge>
      </Box>
      <Switch
        size="lg"
        colorScheme="teal"
        isChecked={userUpdate.admin}
        onChange={handleRoleChange}
      />
    </Box>
  );
};
export default AdminCardUser;
