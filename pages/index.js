import styled from "styled-components";
import Navigation from "@/components/Navigation";

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
  width: 270px;
  background-color: blue;
  color: white;
  border: 2px solid;
  border-radius: 15px;
  border-color: black;
`;
