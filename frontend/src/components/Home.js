import React, {useState, useEffect} from 'react';
import axios from "axios";

function Home(props) {
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetchPets();
    }, [])

    const fetchPets = async (url) => {
        const pets = await axios.get('http://localhost:8000/api/pets');
        console.log(pets.data.pets[0].name)
    }

    return (
        <div>
            <h1>Home</h1>
            {localStorage.getItem('authToken') ? <p>hello user</p>:<p>hello stranger</p>}
        </div>
    );
}

export default Home;
