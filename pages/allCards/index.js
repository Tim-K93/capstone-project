import AnimalDetails from "@/components/AnimalDetails";

export default function allCards({
  animals,
  setAnimals,
  handleDeleteAnimalClick,
  handleEditAnimalClick,
}) {
  return (
    <>
      <AnimalDetails
        animals={animals}
        setAnimals={setAnimals}
        handleDeleteAnimalClick={handleDeleteAnimalClick}
        handleEditAnimalClick={handleEditAnimalClick}
      />
    </>
  );
}
