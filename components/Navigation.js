import styled from "styled-components";
import { MdOutlineAddCircle } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { TfiAlignJustify } from "react-icons/tfi";

export default function Navigation() {
  return (
    <Footer>
      <li>
        <StyledLink href="/" aria-label="Home">
          <AiOutlineHome />
        </StyledLink>
      </li>
      <li>
        <StyledLink href="./createCards" aria-label="Create Cards">
          <MdOutlineAddCircle />
        </StyledLink>
      </li>
      <li>
        <StyledLink href="/allCards" aria-label="All Cards">
          <TfiAlignJustify />
        </StyledLink>
      </li>
    </Footer>
  );
}

const StyledLink = styled.a`
  display: flex;
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
  font-size: 2rem;
  margin: 2rem;
  padding: 1rem;
`;

const Footer = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #282828;
  padding: 0;
  list-style-type: none;
`;
