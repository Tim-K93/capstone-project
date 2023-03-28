import { useState } from "react";
import Link from "next/link";

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

  return (
    <>
      <h2>Animal Details</h2>
      {isEditing ? (
        <>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : null}

      {animals.map((animal) => (
        <div key={animal.id}>
          <button onClick={() => handleDeleteAnimalClick(animal.id)}>
            Delete
          </button>
          <Link href={`/animalProfile/${animal.id}`}>
            <p>{animal.name}`s Profile</p>
          </Link>

          <button onClick={() => handleEditClick(animal.id)}>Edit</button>
          {editingId === animal.id ? (
            <ul>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
          ) : (
            <>
              <p>Species: {animal.species}</p>
              <p>Name: {animal.name}</p>
              <p>Age: {animal.age}</p>
              <p>Character: {animal.color}</p>
              <p>Owner: {animal.owner}</p>
              <p>Miscellaneous: {animal.miscellaneous}</p>
            </>
          )}
        </div>
      ))}
    </>
  );
}
