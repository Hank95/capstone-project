import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../util/use-auth";
import UserMenu from "./UserMenu";
import ahoy from "./assets/Ahoy.svg";

const NavBar = () => {
  const auth = useAuth();

  return (
    <Container>
      <NavLink to="/">
        <Logo src={ahoy} alt="ahoy" />
      </NavLink>

      {!auth.user ? (
        <Nav>
          <NavButton as={Link} to="/login">
            Login/Signup
          </NavButton>
        </Nav>
      ) : (
        <Nav>
          <UserMenu />
        </Nav>
      )}
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 100px;
  background-color: rgb(28, 61, 126);
  /* border-bottom: 4px solid rgb(47, 98, 104); */
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  top: 40px;
  left: 20px;
`;

const NavButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  background-color: white;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

const Logo = styled.img`
  margin-top: 16px;
`;

export default NavBar;
