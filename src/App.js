import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { postData, testGet } from "./store/testActionType";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Addusers from "./components/addusers/Addusers";
import UpdateUser from "./components/updateUser/UpdateUser";
function App() {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <br />
      <Link to="user/add">add</Link> <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/add" element={<Addusers />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
