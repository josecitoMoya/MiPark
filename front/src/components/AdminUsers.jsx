import axios from "axios";
import { useEffect, useState } from "react";
import AdminCardUser from "../commons/AdminCardUser";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import { wrap } from "framer-motion";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const actualUser = useSelector((state) => state.user);

  useEffect(() => {
    const axiosUsers = async () => {
      try {
        const users = await axios.get(
          "http://localhost:8080/api/admin/users/search/all-users"
        );
        setUsers(users.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    axiosUsers();
  }, []);

  return (
    <Flex flexWrap={wrap}>
      {users.map((user, i) => {
        console.log("user:", user);
        if (user.email != actualUser.email)
          return <AdminCardUser key={i} user={user} />;
      })}
    </Flex>
  );
};

export default AdminUser;
