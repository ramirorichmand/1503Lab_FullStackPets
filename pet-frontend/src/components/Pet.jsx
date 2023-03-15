const Pet = ({ pet, onDelete }) => {

  const handleDeleteClick = () => {
    onDelete(pet.id);
  };

  return (
    <div className="pet">
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <div className="pet-butons"></div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Pet;
