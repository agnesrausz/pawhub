import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

function Search(props) {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        let response = await axios.get(`http://localhost:8000/api/pets/find?name=${data.search}`);
        console.log(response)
        // props.setPets(response.data.pets)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("search")} type="search" name='search'/>

                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;