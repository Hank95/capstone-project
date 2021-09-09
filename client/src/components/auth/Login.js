import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      {/* <Logo src={laurel} alt="logo" /> */}
      <h1>AHOY</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            New here? &nbsp;
            <Button onClick={() => setShowLogin(false)}>Sign Up</Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button onClick={() => setShowLogin(true)}>Log In</Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 400px;
  margin: 10vh auto;
  padding: 16px;
  background-color: white;
  /* border-radius: 6px; */
`;
const Logo = styled.img`
  margin-left: 13%;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0 16px 0;
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

export default Login;
