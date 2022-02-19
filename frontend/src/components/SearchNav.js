import React from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

function SearchNav(props) {
    const {register, handleSubmit, reset} = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {
        console.log(data)
        history.push(`/find?name=${data.search}`);
        reset();
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

export default SearchNav;