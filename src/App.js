import React from "react";
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import AboutUs from "./about-us/about-us";
import BuyingBoards from "./buying_boards/buying_boards";
import Contacts from "./contacts/contacts";
import PrivacyPolicy from "./privacy-policy/privacy-policy";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={''} element={<Home/>}/>
                    <Route path={'/about-us'} element={<AboutUs/>}/>
                    <Route path={'/buying-boards'} element={<BuyingBoards/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                    <Route path={'/privacy-policy'} element={<PrivacyPolicy/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
