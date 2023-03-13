import styled from "styled-components";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div>
      <Heading>Shelter Manager</Heading>
      <ul>
      <Link href="/"><button>Home</button></Link>
        <Link href="./createCards"><button>Create Cards</button></Link>
        <Link href="/allCards"><button>All Cards</button></Link>
      </ul>
    </div>
  
  );
}

const Heading = styled.h1`
text-align: center;
`;
