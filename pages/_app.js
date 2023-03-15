import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import Link from "next/link";


export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useLocalStorageState("animals", []);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} animals={animals} setAnimals={setAnimals} />
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link href="./createCards">
            <button>Create Cards</button>
          </Link>
        </li>
        <li>
          <Link href="/allCards">
            <button>All Cards</button>
          </Link>
        </li>
      </ul>
    </>
  );
}
