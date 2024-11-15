// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {readCookie} from "./Utils/Cookies.js";

//pages
import UnexcitingPage from "../src/Pages/UnexcitingPage.jsx"
import Header from "../src/Pages/Header.jsx"
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Pharmacy from "./Pages/Catalogs/Pharmacy.jsx";
import Laboratory from "./Pages/Catalogs/Laboratory.jsx";
import Suppliers from "./Pages/Suppliers.jsx";
import Hospital from "./Pages/Catalogs/Hospital.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home />}/>
                    <Route path="/hospital" element={<Hospital />}/>
                    <Route path="/pharmacy" element={<Pharmacy />}/>
                    <Route path="/laboratory" element={<Laboratory />}/>
                    <Route path="/suppliers" element={<Suppliers />}/>
                    <Route path="/product/:category/:id" element={<ProductDetails />} />
                    <Route path="/contact" element={<Contact />}/>
                </Route>
                <Route path="/*" element={<UnexcitingPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
