import { useState, useEffect } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const PetContainer = () => {
  const [pets, setPets] = useState([]);

  const loadPetData = async () => {
    const response = await fetch("http://localhost:8080/pets");
    const data = await response.json();
    setPets(data);
  };

  useEffect(() => {
    loadPetData();
  }, []);

  const postPet = async (newPet) => {
    const response = await fetch("http://localhost:8080/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    });
    const savedPet = await response.json();
    setPets([...pets, savedPet]);
  };

  const deletePet = async (id) => {
    await fetch(`http://localhost:8080/pets/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    loadPetData();
  };

  return (
    <>
      <PetForm postPet={postPet} />
      <PetList pets={pets} onDelete={deletePet} />
    </>
  );
};

export default PetContainer;
