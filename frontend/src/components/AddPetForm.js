import React from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {useHistory} from "react-router-dom";

function AddPetForm(props) {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {
        console.log(data)
        let response = await axios.post('http://localhost:8000/api/add_pet', data,
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authToken')
                }
            });
        console.log(response)
        history.push('/');
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("user_id")} type="hidden" name='user_id' value='1'/>
                <input {...register("profile_picture")} type="hidden" name='profile_picture' value='p'/>

                <label htmlFor="name">Name</label>
                <input  {...register("name")} type="text" name='name'/><br/>

                <label htmlFor="name">Status</label>
                <input  {...register("status")} type="text" name='status'/><br/>

                <label htmlFor="name">Sex</label>
                <input  {...register("sex")} type="text" name="sex"/><br/>

                <label htmlFor="name">Species</label>
                <input  {...register("species")} type="text" name="species"/><br/>

                <label htmlFor="name">Breed</label>
                <input  {...register("breed")} type="text" name="breed"/><br/>

                <label htmlFor="name">Birth date</label>
                <input  {...register("birth_date")} type="date" name="birth_date"/><br/>

                <input type="submit"/>
            </form>
        </div>
    );
}

export default AddPetForm;
