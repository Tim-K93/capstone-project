import Form from "@/components/Form"
import { useState } from "react"

export default function createCards({animals, setAnimals}){
    
    return(
        <>
        <Form animals={animals} setAnimals={setAnimals}/>
        </>
    )
}
