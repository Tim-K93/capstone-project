import { useRouter } from "next/router";

export default function AnimalProfile({ animals }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(animals);
  const animal = animals.find((animal) => animal.id === id);

  return (
    <>
      {animal ? (
        <>
          <h2>{animal.name}´s Profile</h2>
          <p>Species: {animal.species}</p>
          <p>Name: {animal.name}</p>
          <p>Age: {animal.age}</p>
          <p>Character: {animal.color}</p>
          <p>Owner: {animal.owner}</p>
          <p>Miscellaneous: {animal.miscellaneous}</p>
        </>
      ) : (
        <p>No animal found with ID {id}</p>
      )}
    </>
  );
}
