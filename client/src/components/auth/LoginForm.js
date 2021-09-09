import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../util/use-auth";
import { useHistory } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [errors, setErrors] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    auth.signin(username, password);
    history.push("/");

    // history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button type="submit">{auth.isLoading ? "Loading..." : "Login"}</Button>
      </FormField>
      <FormField>
        {auth.errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 30px;
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const Input = styled.input`
  /* border-radius: 6px; */
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  /* border-radius: 6px; */
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  background-color: rgba(0, 57, 7, 0.5);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default LoginForm;
