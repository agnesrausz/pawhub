import React, {useEffect, useState} from 'react';
import axios from "axios";
import PetCard from "./PetCard";

function PetProfile(props) {
    useEffect(() => {
        fetchPet();
    }, [])
    const [pet, setPet] = useState([])


    const fetchPet = async () => {
        let id = (window.location.pathname).substr(5)
        const response = await axios.get(`http://localhost:8000/api/pet/${id}`);
        console.log(response.data)
        setPet(response.data.pet)
    }


    return (
        <div className='pet-list'>
            <PetCard pet={pet}/>
        </div>

    );
}

export default PetProfile;