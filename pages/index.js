import styled from "styled-components";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div>
      <Heading>Shelter Manager</Heading>
    </div>
  
  );
}

const Heading = styled.h1`
text-align: center;
`;
