import AnimalProfile from "../animalProfile/[id]";

export default function profileCard({ animals }) {
  return (
    <>
      <AnimalProfile animals={animals} />
    </>
  );
}
