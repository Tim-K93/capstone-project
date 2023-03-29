import { useRouter } from "next/router";
import styled from "styled-components";

export default function AnimalProfile({ animals }) {
  const router = useRouter();
  const { id } = router.query;
  const animal = animals.find((animal) => animal.id === id);

  return (
    <>
      {animal ? (
        <>
          <AnimalDetailsContainer>
            <AnimalName>{animal.name}´s Profile</AnimalName>
            <p>Species: {animal.species}</p>
            <p>Name: {animal.name}</p>
            <p>Age: {animal.age}</p>
            <p>Character: {animal.color}</p>
            <p>Owner: {animal.owner}</p>
            <p>Miscellaneous: {animal.miscellaneous}</p>
          </AnimalDetailsContainer>
        </>
      ) : (
        <p>No animal found with ID {id}</p>
      )}
    </>
  );
}

const AnimalDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 250px;
  height: 400px;
  border: 3px solid #ccc;
  background-color: white;
  border-radius: 10px;
  margin-top: 100px;
  margin-left: 60px;
`;

const AnimalName = styled.h2`
  color: darkcyan;
  font-weight: bold;
`;
