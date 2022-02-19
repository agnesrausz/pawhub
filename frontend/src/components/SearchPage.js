import React, {useState, useEffect} from 'react';
import axios from "axios";
import PetCard from "./PetCard";

function SearchPage(props) {
    useEffect(() => {
        searchPets();
    }, [window.location.href])

    const [pets, setPets] = useState([])


    const searchPets = async () => {
        setPets([])
        let url = new URL(window.location.href);
        let data = url.searchParams.get("name");
        let response = await axios.get(`http://localhost:8000/api/pets/find?name=${data}`);
        console.log(response)

        let petList = response.data.pets

        for (let i = 0; i < petList.length; i++) {
            setPets(state => [...state, petList[i]])
        }
    }


    return (
        <div>
            <div className='title'>Search result</div>
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

export default SearchPage;
