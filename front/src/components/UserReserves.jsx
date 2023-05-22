import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardReserve from "../commons/CardReserve";

const UserReserves = () => {
  const user = useSelector((state) => state.user);
  const [allReserves, setAllReserves] = useState([]);

  useEffect(() => {
    if (user.id) {
      axios
        .get(`http://localhost:8080/api/reserves/allreserves:${user.id}`, {
          withCredentials: true,
        })
        .then((res) => res.data)
        .then((reserves) => {
          setAllReserves(reserves.data);
        });
    }
  }, [user]);

  return (
    <div>
      {allReserves.map((reserve, i) => (
        <CardReserve key={i} reserve={reserve} />
      ))}
    </div>
  );
};
export default UserReserves;
