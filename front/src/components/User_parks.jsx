import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Cards from "../commons/card";

const UserParks = () => {
  const [parks, setParks] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("SOY USER DEL USER GUILLADO", user);
    axios
      .get(`http://localhost:8080/api/user/parkings/search/${user.id}`)
      .then((res) => res.data.data)
      .then((res) => setParks(res));
  });

  return (
    <div>
      {parks?.map((item, i) => (
        <Wrap key={i} w={"70%"} p={4} ml={"12%"}>
          <Link to={`/reservation/${item.id}`}>
            <Cards data={item} />
          </Link>
        </Wrap>
      ))}
    </div>
  );
};

export default UserParks;
