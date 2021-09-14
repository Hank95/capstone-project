import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import dock from "../assets/dock.jpeg";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Image src={dock} alt="Dock" />
      <Wrapper>
        {/* <Logo src={laurel} alt="logo" /> */}
        <h3>Please sign in!</h3>
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
    </>
  );
}
const Image = styled.img`
  width: 100%;
  position: absolute;
  /* height: 100vh; */
  z-index: -100;
`;
const Wrapper = styled.section`
  position: relative;
  max-width: 400px;
  margin: 10vh auto;
  padding: 16px;
  background-color: white;
  border-radius: 6px;
  z-index: 10;
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

export default Login;
