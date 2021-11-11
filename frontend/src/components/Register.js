import React from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {useHistory} from "react-router-dom";

function Register(props) {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {
        let response = await axios.post('http://localhost:8000/api/register', data);
        if(response.data.token){
            localStorage.setItem('authToken',response.data.token);
            props.setToken(response.data.token);
            history.push('/');
        }
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input  {...register("name")} type="text" name='name' /><br/>

                <label htmlFor="name">Email</label>
                <input  {...register("email")} type="text" name='email' /><br/>

                <label htmlFor="name">Password</label>
                <input  {...register("password")} type="password" name="password"/><br/>

                <label htmlFor="name">Password again</label>
                <input  {...register("password_confirmation")} type="password" name="password_confirmation"/><br/>

                <input type="submit"/>
            </form>
        </div>
    );
}

export default Register;