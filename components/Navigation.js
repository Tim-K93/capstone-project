import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <footer>
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
    </footer>
  );
}
