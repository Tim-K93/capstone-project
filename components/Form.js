import { useState } from "react";
import { useForm } from "react-hook-form";
import { uid } from "uid";


export default function AddAnimalForm({setAnimals, animals}) {
  const [submitMessage, setSubmitMessage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, event) => {
    event.target.reset();
    const newAnimal = { ...data, id: uid() };
    setAnimals([...(animals || []), newAnimal]); 
    setSubmitMessage(true);
    setShowDetails(true);
    setTimeout(() => {
      setSubmitMessage(false);
      setShowDetails(false);
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("species", { required: true })}>
          <option value="">--Choose Animal--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="tortoise">Tortoise</option>
          <option value="guinea pig">Guinea pig</option>
        </select>
        {errors.species && <span>Species is required</span>}
        <ul>
          <input {...register("name", { required: true })} key="name" placeholder="Name" />
          {errors.name && <span>Name is required</span>}
          <input {...register("age", { required: true })} key="age" placeholder="Age" />
          {errors.age && <span>Age is required</span>}
          <input {...register("character", { required: true })} key="character" placeholder="Character" />
          {errors.character && <span>Character is required</span>}
          <input {...register("owner", { required: true })} key="owner" placeholder="Owners" />
          {errors.owner && <span>Owners is required</span>}
          <input {...register("miscellaneous")} key="miscellaneous" placeholder="miscelleaneous" />
        </ul>
        <input type="submit" />
      </form>
      {submitMessage && <p>Form submitted successfully</p>}
    </div>
  );
  }