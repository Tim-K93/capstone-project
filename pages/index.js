import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Heading>Shelter Manager</Heading>
    </div>
  );
}

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100px;
  background-color: blue;
  color: white;
`;
