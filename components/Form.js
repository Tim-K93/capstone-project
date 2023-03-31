import { useState } from "react";
import { useForm } from "react-hook-form";
import { uid } from "uid";
import styled from "styled-components";

export default function AddAnimalForm({ setAnimals, animals }) {
  const [submitMessage, setSubmitMessage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    <FormContainer>
      <Headline>Create a new profile</Headline>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Select {...register("species", { required: true })}>
          <option value="">--Choose Animal--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="tortoise">Tortoise</option>
          <option value="guinea pig">Guinea pig</option>
        </Select>
        {errors.species && <ErrorMessage>Species is required</ErrorMessage>}
        <Input
          {...register("name", { required: true })}
          minLength="2"
          maxLength="15"
          type="text"
          key="name"
          placeholder="Name"
        />
        {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
        <Input
          {...register("age", { required: true })}
          name="age"
          min="0"
          max="3"
          type="number"
          key="age"
          placeholder="Age"
        />
        {errors.age && <ErrorMessage>Age is required</ErrorMessage>}
        <Input
          {...register("color", { required: true })}
          minLength="2"
          maxLength="15"
          type="text"
          key="character"
          placeholder="color"
        />
        {errors.color && <ErrorMessage>Color is required</ErrorMessage>}
        <Input
          {...register("owner", { required: true })}
          name="owner"
          min="0"
          max="3"
          type="number"
          key="owner"
          placeholder="Owners"
        />
        {errors.owner && <ErrorMessage>Owners is required</ErrorMessage>}
        <Input
          {...register("miscellaneous")}
          key="miscellaneous"
          placeholder="miscellaneous"
          maxLength="60"
        />

        <Button type="submit" />
        {submitMessage && (
          <SuccessMessage>Form submitted successfully</SuccessMessage>
        )}
      </Form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7cbcde;
  height: 80px;
  padding: 10px;
  max-width: 340;
  word-wrap: break-word;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #444444;
  margin: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  padding: 20px;
  margin: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.input`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

const SuccessMessage = styled.p`
  margin-top: 20px;
  color: green;
  font-size: 16px;
`;
