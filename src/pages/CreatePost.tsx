import React, {SyntheticEvent, useState} from 'react';
import Nav from "../components/Nav";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const[content,setContent] = useState('');
    const navigation = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        let data = {
            content
        };
      const res = await axios.post('http://localhost:3000/post', data,{withCredentials: true});
      if(res.status === 201) {
          navigation({
              pathname:'/',
          })
      }
    }

  return (
    <>
        <Nav/>
        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Create Post</h1>
                <input type="text" onChange={e => setContent(e.target.value)}/>
                <br/>
                <br/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Objavi</button>
            </form>
        </main>
    </>
  );
}
export default CreatePost;