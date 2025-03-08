import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom';
import '@mantine/core/styles.css';

function App(){
    return(
        <>
         <Navbar/>

         <Routes>

            <Route path="/login" element={<Login/>}/>
         </Routes>
        </>
    )
}
export default App;