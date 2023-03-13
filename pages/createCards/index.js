import Form from "@/components/Form"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { useState } from "react"


export default function createCards(){
    return(
        <>
        <Form />
        <Link href="/"><button>Home</button></Link>
        <Link href="./createCards"><button>Create Cards</button></Link>

        </>
    )
}
