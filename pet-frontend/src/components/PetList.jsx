import Pet from "./Pet";

const PetList = ({pets, onDelete}) => {

    const petComponents = pets.map(pet => {
        return <Pet 
            key={pet.id} 
            pet={pet}
            onDelete={onDelete}
            />
    });

    return(
        <div id="pet-list">
            {petComponents}
        </div>
    )
}

export default PetList;