import Link from "next/link"

export default function allCards() {
    return(
        <>
        <Link href="/"><button>Home</button></Link>
        <Link href="./createCards"><button>Create Cards</button></Link>
        </>
    )
}