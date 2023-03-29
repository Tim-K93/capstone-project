import styled from "styled-components";

export default function Home() {
  return (
    <>
      <HeadContainer>
        <Heading>Shelter Manager</Heading>
      </HeadContainer>
      <StyledLink href="./createCards">Create new Profiles</StyledLink>
      <StyledLink href="./allCards">Show Profiles</StyledLink>
    </>
  );
}

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #444444;
`;

const HeadContainer = styled.div`
  display: flex;
  background-color: #7cbcde;
  height: 83px;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 85px;
  text-decoration: none;
  border: solid 2px #3c97c8;
  border-radius: 10px;
  box-shadow: 2px 2px #888888;
  background-color: #7cbcde;
  color: #ffffff;
`;
