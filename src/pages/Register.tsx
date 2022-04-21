import React, {SyntheticEvent, useState} from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import './Register.css'
import {Navigate} from "react-router-dom";

const Register = () => {
    const[first_name,setFirstName] =useState('');
    const[last_name,setLastName] =useState('');
    const[email,setEmail] =useState('');
    const[password,setPassword] = useState('');
    const[password_confirm,setPasswordConfirm] = useState('');


    const[redirect,setRedirect] = useState(false);
    //test
    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            first_name,
            last_name,
            email,
            password,
            password_confirm
        }
        console.log(data);
        const response = await axios.post('http://localhost:3000/auth/register', data)
        console.log(response);

        setRedirect(true);
    }
    if(redirect) {
        return <Navigate to={'/login'}/>
    }

    return (
        <>
            <Nav/>
            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Register</h1>
                    <label>First Name</label>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <label>Last Name</label>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
                    </div>
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
                    <label>Repeat password</label>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password" onChange={e => setPasswordConfirm(e.target.value)}/>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
            </main>
        </>
    )
}
export default Register;