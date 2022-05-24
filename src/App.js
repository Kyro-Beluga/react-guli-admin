import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from "./pages/admin/admin";
import './App.less';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/' element={<Admin/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
