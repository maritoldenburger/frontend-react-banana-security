import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email: data.email,
                password: data.password,
            });
            if (response.status === 200) {
                login(response.data.accessToken);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    E-mail
                    <input
                        type="email"
                        id="email-field"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord
                    <input
                        type="password"
                        id="password-field"
                        {...register("password")}
                    />
                </label>
                <button
                    type="submit"
                >Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;