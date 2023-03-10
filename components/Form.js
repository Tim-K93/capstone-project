import { useForm } from "react-hook-form";
import {useLocalStorage} from "react-use"; 
import useLocalStorageState from "use-local-storage-state"; 
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddAnimalForm() {
  const [animalData, setAnimalData] = useLocalStorage("Animal Data", []);
  const [animals, setAnimals] = useLocalStorageState("animals", [] );
  const [submitMessage, setSubmitMessage] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, event) => {
    event.target.reset();
    const id = uuidv4(); 
    const newAnimalData = { ...data, id: id };
    setAnimalData([...animalData, newAnimalData]);
    setAnimals([animals, {...data, id}]);
    setSubmitMessage(true);
    setTimeout(() => setSubmitMessage(false), 3000);
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("species", {required: true})} >
        <option value="">--Choose Animal--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="rabbit">Rabbit</option>
        <option value="tortoise">Tortoise</option>
        <option value="guinea pig">Guinea pig</option>
      </select>
      {errors.species && <span>Species is required</span>}
      <ul>
      <input {...register ("name", {required: true})} placeholder="Name" />
      {errors.name && <span>Name is required</span>}
      <input {...register("age", {required: true})} placeholder="Alter"/>
      {errors.age && <span>Age is required</span>}
      <input {...register("character", {required: true})} placeholder="Gemüt"/>
      {errors.character && <span>Character is required</span>}
      <input {...register("owner", {required: true})} placeholder="Vorbesitzer"/>
      {errors.owner && <span>Owners is required</span>}
      <input {...register("miscellaneous")} placeholder="sonstiges"/>
      </ul>
      <input type="submit" />
    </form>
    {submitMessage && <p>Form submitted successfully</p>}
    </div>
  );
}

