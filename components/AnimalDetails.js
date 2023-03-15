export default function AnimalDetails({ animals }) {
    if (!animals || animals.length === 0) {
        return <div>No animals to display</div>;
    }
  return (
    <div>
      <h2>Animal Details</h2>
      {animals.map((animal) => (
        <div key={animal.id}>
            <p>Species: {animal.species}</p>
            <p>Name:{animal.name}</p>
            <p>Age: {animal.age}</p>
            <p>Character: {animal.character}</p>
            <p>Owner: {animal.owner}</p>
            <p>Miscellaneous: {animal.miscellaneous}</p>
        </div>
        ))}
    </div>
  );
}
