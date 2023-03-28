import AnimalProfile from "@/pages/animalProfile/[id]";

export default function profileCard() {
  return (
    <>
      <AnimalProfile animals={animals} />
    </>
  );
}
