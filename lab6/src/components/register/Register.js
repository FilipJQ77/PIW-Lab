import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  const [typedNickname, setTypedNickname] = useState();
  const [typedPassword, setTypedPassword] = useState();
  const [failedRegister, setFailedRegister] = useState(false);
  const history = useHistory();

  const register = async () => {
    const response = await fetch(`/register`, {
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
    register().then((isCorrect) => {
      if (isCorrect === true) {
        history.push("/login");
      } else setFailedRegister(true);
    });
  };

  return (
    <div>
      {failedRegister && (
        <div className="div-failed-register">
          Nie udało się zarejestrować. Spróbuj ponownie!
        </div>
      )}
      <div className="form">
        <h1>Zarejestruj się</h1>
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
            Zarejestruj się
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
