import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useLocalStorageState("animals", {
    defaultValue: [],
  });

  const handleDeleteAnimalClick = (id) => {
    const newAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(newAnimals);
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        animals={animals}
        setAnimals={setAnimals}
        handleDeleteAnimalClick={handleDeleteAnimalClick}
      />
      <Navigation />
    </>
  );
}
