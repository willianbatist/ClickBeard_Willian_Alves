/* eslint-disable react-hooks/exhaustive-deps */
import HeaderAdmin from "../../components/header/HeaderAdmin";
import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/contextProvider";
import { sendRequest, requestToken } from "../../services";
import { useNavigate } from "react-router-dom";

function HomeAdmin() {
  const { setBarbers, user } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRequestBarbers = async () => {
    const res = await sendRequest("get", "/barber");
    setBarbers(res);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    requestToken(user?.token)
    handleRequestBarbers();
  }, []);

  return (
    <>
      <HeaderAdmin />
    </>
  );
}

export default HomeAdmin;
