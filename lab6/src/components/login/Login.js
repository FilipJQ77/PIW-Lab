import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Context } from "../../contexts/Context";

const Login = () => {
  const [typedNickname, setTypedNickname] = useState();
  const [typedPassword, setTypedPassword] = useState();
  const [failedLogin, setFailedLogin] = useState(false);
  const history = useHistory();
  const { user, setUser, setLogged } = useContext(Context);

  const checkLogin = async () => {
    const response = await fetch(`/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: typedNickname,
        password: typedPassword,
      }),
    });
    if (!(response.status >= 200 && response.status < 300)) {
      return false;
    }
    const isCorrect = await response.json();
    return isCorrect;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    checkLogin().then((isCorrect) => {
      if (isCorrect === true) {
        setLogged(true);
        setUser(typedNickname);
        history.push("/home");
      } else setFailedLogin(true);
    });
  };

  return (
    <div>
      {failedLogin && (
        <div className="div-failed-login">
          Nie udało się zalogować. Spróbuj ponownie!
        </div>
      )}
      <div className="form">
        <h1>Zaloguj się</h1>
        <Form onSubmit={onFormSubmit}>
          <Form.Group controlId="form-basic-email">
            <Form.Label>Nazwa użytkownika</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Login"
              onChange={({ target: { value } }) => {
                setTypedNickname(value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="form-basic-password">
            <Form.Label>Hasło</Form.Label>
            <Form.Control
              type="password"
              placeholder="Hasło"
              onChange={({ target: { value } }) => {
                setTypedPassword(value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Zaloguj
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
