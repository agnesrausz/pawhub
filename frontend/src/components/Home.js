import React, {useState, useEffect} from 'react';
import axios from "axios";
import PetCard from "./PetCard";

function Home(props) {
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetchPets();
    }, [])

    const fetchPets = async () => {
        const pets = await axios.get('http://localhost:8000/api/pets');
        // console.log(pets.data.pets[0])
        // console.log(pets.data.pets.length)
        let petList = pets.data.pets

        for (let i = 0; i < petList.length; i++) {
            if (pets.length !== 0) {
                setPets(state => [...state, petList[i]])
            }
        }
    }


    return (
        <div>
            <div className='title'>Pets</div>
            {localStorage.getItem('authToken') ? <p>hello user</p> : <p>hello stranger</p>}
            <div className='pet-list'>
                {pets.map((pet) => (
                    <div key={pet.id}>
                        <PetCard pet={pet}/>
                    </div>
                ))}
            </div>
            <br/>

        </div>
    );
}

export default Home;
