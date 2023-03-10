import Link from "next/link";

export default function Navigation() {
    return(
       <footer>
        <button>
            <Link href="./index">Home</Link>
        </button>
        <button>
            <Link href="/createCards/index">Create Cards</Link>
        </button>
        
       </footer>
    )
}