import React, { useEffect, useState } from "react";
import { AdminWrapper } from "./styles";
import { Auth } from "@aws-amplify/auth";
import Leftnav from "../../Leftnav";

Admin.propTypes = {};

function Admin() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState({});

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(({ username, attributes }) => {
      setCurrentLoggedInUser({ username, attributes });
    });
  }, []);

  if (!currentLoggedInUser.username) {
    return <h1>Sorry, not authenticated please login again</h1>;
  }

  return (
    <AdminWrapper>
      <Leftnav />
    </AdminWrapper>
  );
}

export default Admin;
