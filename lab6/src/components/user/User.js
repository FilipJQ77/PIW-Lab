import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import "./User.css";
import { Context } from "../../contexts/Context";
import { useHistory } from "react-router-dom";

const User = () => {
  const { user, setUser, setLogged } = useContext(Context);
  const history = useHistory();

  const logout = () => {
    setUser("");
    setLogged(false);
    history.push("/login");
  };

  return (
    <div className="useroptions">
      <h1>Opcje użytkownika</h1>
      <br />
      <Button onClick={logout} variant="primary">
        Wyloguj
      </Button>
    </div>
  );
};

export default User;
