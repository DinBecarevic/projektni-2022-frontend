import React, {SyntheticEvent, useState} from 'react';
import Nav from "../components/Nav";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Login = () => {
    const[email,setEmail] =useState('');
    const[password,setPassword] = useState('');

    const[redirect,setRedirect] = useState(false);

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            email,
            password
        }
        console.log(data);
        const response = await axios.post('http://localhost:3000/auth/login', data, {withCredentials: true});
        console.log(response);

        setRedirect(true);
    }
    if(redirect) {
        return <Navigate to='/'/>
    }

    return (
        <>
            <Nav/>
            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    <label>Email</label>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="Password" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <br/>
                    <br/>
                    <label>Password</label>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
            </main>
        </>
    )
}
export default Login;