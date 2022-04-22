import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/login'} element={<Login />} />
              <Route path={'/register'} element={<Register />} />
              <Route path={'/create-post'} element={<CreatePost />} />
              <Route path={'/update-post/:id'} element={<UpdatePost />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
