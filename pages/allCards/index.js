import Link from "next/link";
import AnimalDetails from "@/components/AnimalDetails";

export default function allCards({
  animals,
  setAnimals,
  handleDeleteAnimalClick,
}) {
  return (
    <>
      <AnimalDetails
        animals={animals}
        setAnimals={setAnimals}
        handleDeleteAnimalClick={handleDeleteAnimalClick}
      />
    </>
  );
}
