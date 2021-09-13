import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../util/use-auth";

function SignUpForm({ onLogin }) {
  const [signUpData, setSignUpData] = useState({
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    join_date: "",
  });
  const today = new Date();

  const auth = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    auth.signup(signUpData);
  }
  function handleChange(event) {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          autoComplete="off"
          value={signUpData.email}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          autoComplete="off"
          value={signUpData.username}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={signUpData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          name="password_confirmation"
          value={signUpData.passwordConfirmation}
          onChange={handleChange}
          autoComplete="current-password"
        />
      </FormField>
      <input type="hidden" name="join_date" value={today}></input>
      <FormField>
        <Button type="submit">
          {auth.isLoading ? "Loading..." : "Sign Up"}
        </Button>
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
  border-radius: 6px;
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
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  background-color: rgb(58, 142, 216);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default SignUpForm;
