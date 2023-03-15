import Link from "next/link";
import AnimalDetails from "@/components/AnimalDetails";

export default function allCards({ animals }) {
  return (
    <>
      <AnimalDetails animals={animals} />
    </>
  );
}
