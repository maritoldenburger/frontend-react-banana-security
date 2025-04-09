import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function SignUp() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post("http://localhost:3000/register", {
                email: data.email,
                password: data.password,
                username: data.username,
            });
            if (response.status === 200) {
                login(response.data.accessToken);
            }
            navigate("/signin");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    E-mail
                    <input
                        type="email"
                        id="email-field"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam
                    <input
                        type="username"
                        id="username-field"
                        {...register("username")}
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
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;