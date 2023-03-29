import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import AnimalSearch from "./AnimalSearch";

function EditableField({ name, value, onChange }) {
  const isNumeric = name === "age" || name === "owner";
  const handleFieldChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <input
        type={isNumeric ? "number" : "text"}
        name={name}
        value={value}
        onChange={handleFieldChange}
      />
    </>
  );
}

export default function AnimalDetails({
  animals,
  setAnimals,
  handleDeleteAnimalClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [fields, setFields] = useState({});
  const [originalFields, setOriginalFields] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [searchSpecies, setSearchSpecies] = useState("");

  if (!animals || animals.length === 0) {
    return <div>No animals to display</div>;
  }

  const handleEditClick = (id) => {
    setIsEditing(true);
    setEditingId(id);
    const initialFields = animals.reduce((acc, animal) => {
      acc[animal.id] = animal;
      return acc;
    }, {});
    setFields(initialFields);
    setOriginalFields(initialFields);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setEditingId(null);
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) =>
        fields[animal.id] ? { ...animal, ...fields[animal.id] } : animal
      )
    );
    setFields({});
    setOriginalFields({});
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditingId(null);
    setFields(originalFields);
  };

  const filteredAnimals = animals.filter((animal) =>
    animal.species.toLowerCase().includes(searchSpecies.toLowerCase())
  );

  const handleSearch = (searchTerm) => {
    setSearchSpecies(searchTerm);
  };

  return (
    <>
      <HeadContainer>
        <Headline>Profiles</Headline>
      </HeadContainer>
      <AnimalSearch onSearch={handleSearch} />
      {isEditing ? (
        <>
          <ButtonContainer>
            <SaveButton onClick={handleSaveClick}>Save</SaveButton>
            <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
          </ButtonContainer>
        </>
      ) : null}

      {filteredAnimals.map((animal) => (
        <AnimalDetailsContainer key={animal.id}>
          <DeleteButton onClick={() => handleDeleteAnimalClick(animal.id)}>
            Delete
          </DeleteButton>
          <EditButton onClick={() => handleEditClick(animal.id)}>
            Edit
          </EditButton>
          <AnimalProfileLink href={`/animalProfile/${animal.id}`}>
            <AnimalProfileTitle>{animal.name}`s Profile</AnimalProfileTitle>
          </AnimalProfileLink>
          {editingId === animal.id ? (
            <AnimalDetailsList>
              <AnimalDetailsItem>
                <EditableField
                  name="species"
                  value={fields[animal.id]?.species ?? animal.species}
                  onChange={(value) =>
                    setFields((prevFields) => ({
                      ...prevFields,
                      [animal.id]: { ...fields[animal.id], species: value },
                    }))
                  }
                />
              </AnimalDetailsItem>
              <AnimalDetailsItem>
                <EditableField
                  name="name"
                  value={fields[animal.id]?.name ?? animal.name}
                  onChange={(value) =>
                    setFields((prevFields) => ({
                      ...prevFields,
                      [animal.id]: { ...fields[animal.id], name: value },
                    }))
                  }
                />
              </AnimalDetailsItem>
              <AnimalDetailsItem>
                <EditableField
                  name="age"
                  value={fields[animal.id]?.age ?? animal.age}
                  onChange={(value) =>
                    setFields((prevFields) => ({
                      ...prevFields,
                      [animal.id]: { ...fields[animal.id], age: value },
                    }))
                  }
                />
              </AnimalDetailsItem>
              <AnimalDetailsItem>
                <EditableField
                  name="color"
                  value={fields[animal.id]?.color ?? animal.color}
                  onChange={(value) =>
                    setFields((prevFields) => ({
                      ...prevFields,
                      [animal.id]: { ...fields[animal.id], color: value },
                    }))
                  }
                />
              </AnimalDetailsItem>
              <AnimalDetailsItem>
                <EditableField
                  name="owner"
                  value={fields[animal.id]?.owner ?? animal.owner}
                  onChange={(value) =>
                    setFields((prevFields) => ({
                      ...prevFields,
                      [animal.id]: { ...fields[animal.id], owner: value },
                    }))
                  }
                />
              </AnimalDetailsItem>
              <AnimalDetailsItem>
                <EditableField
                  name="miscellaneous"
                  value={
                    fields[animal.id]?.miscellaneous ?? animal.miscellaneous
                  }
                  onChange={(value) =>
                    setFields((prevFields) => ({
                      ...prevFields,
                      [animal.id]: {
                        ...fields[animal.id],
                        miscellaneous: value,
                      },
                    }))
                  }
                />
              </AnimalDetailsItem>
            </AnimalDetailsList>
          ) : (
            <>
              <AnimalUl>
                <AnimalLi>Species: {animal.species}</AnimalLi>
                <AnimalLi>Name: {animal.name}</AnimalLi>
                <AnimalLi>Age: {animal.age}</AnimalLi>
                <AnimalLi>Character: {animal.color}</AnimalLi>
                <AnimalLi>Owner: {animal.owner}</AnimalLi>
                <AnimalLi>Miscellaneous: {animal.miscellaneous}</AnimalLi>
              </AnimalUl>
            </>
          )}
        </AnimalDetailsContainer>
      ))}
    </>
  );
}

const AnimalUl = styled.ul`
  margin-top: 10px;
  margin-right: 10px;
  padding: 0px;
  list-style-type: none;
  font-style: italic;
  font-size: 16px;
`;

const AnimalLi = styled.li`
  padding: 10px;
  text-align: left;
`;

const ButtonContainer = styled.button`
  border: none;
`;

const SaveButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 6px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 3px 2px;
`;

const DeleteButton = styled.button`
  background-color: #adadad;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 6px 6px;
  font-size: 12px;
  margin-bottom: 5px;
`;

const CancelButton = styled.button`
  background-color: #d02424;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 6px 6px;
  font-size: 12px;
`;

const EditButton = styled.button`
  background-color: #adadad;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 6px 6px;
  font-size: 12px;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #444444;
`;

const HeadContainer = styled.div`
  display: flex;
  background-color: #7cbcde;
  height: 83px;
`;

const AnimalDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 250px;
  height: 380px;
  padding: 10px;
  border: 3px solid #ccc;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 58px;
`;

const AnimalProfileLink = styled(Link)`
  color: darkcyan;
  font-weight: bold;
`;

const AnimalProfileTitle = styled.p`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0px;
  margin-right: 80px;
  text-decoration: underline;
`;

const AnimalDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnimalDetailsItem = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
