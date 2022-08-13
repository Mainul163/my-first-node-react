import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { postData, testGet } from "./store/testActionType";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Addusers from "./components/addusers/Addusers";
function App() {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <br />
      <Link to="user/add">add</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/add" element={<Addusers />} />
      </Routes>
    </div>
  );
}

export default App;
