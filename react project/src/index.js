import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Stuff from './Stuff.jsx';
import NotFound from './NotFound.jsx';
import Chatt from './Chattroom.jsx';
import ChattlogAPI from './ChattAPI.json';

const Index = () => {
  const [count, setCount] = useState("testing count props");
  const [Chattlog, setChattlog] = useState(ChattlogAPI);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={count} />} />
        <Route path="/Stuff" element={<Stuff />} />
        <Route path="/Chatt" element={<Chatt Chattlog={Chattlog} setChattlog={setChattlog} />} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}
ReactDOM.render(<Index />, document.getElementById('root')); 