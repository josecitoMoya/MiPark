import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Wrap } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Cards from "../commons/card";

const UserParks = () => {
  const [parks, setParks] = useState([]);
  const [path, setPath] = useState({});
  const user = useSelector((state) => state.user);

  const location = useLocation();

  useEffect(() => {
    // console.log("SOY USER DEL USER GUILLADO", user);
    axios
      .get(`http://localhost:8080/api/parkings/search/?email=${user.id}`)
      .then((res) => res.data.data)
      .then((res) => setParks(res))
      .then(setPath(true))
      .then(console.log("SOY EL PATH DENTRO DE USER PARKS", path))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {parks?.map((item, i) => (
        <Wrap key={i} w={"70%"} p={4} ml={"12%"}>
          <Link to={`/reservation/${item.id}`}>
            <Cards data={item} path={path} />
          </Link>
        </Wrap>
      ))}
    </div>
  );
};

export default UserParks;
