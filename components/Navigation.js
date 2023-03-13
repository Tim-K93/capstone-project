import Link from "next/link";

export default function Navigation() {
    return(
       <footer>
        <button>
            <Link href="/">Home</Link>
        </button>
        <button>
            <Link href="/createCards/index">Create Cards</Link>
        </button>
        
       </footer>
    )
}