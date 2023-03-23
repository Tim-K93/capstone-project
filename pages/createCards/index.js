import Form from "@/components/Form";

export default function createCards({ animals, setAnimals }) {
  return (
    <>
      <Form animals={animals} setAnimals={setAnimals} />
    </>
  );
}
