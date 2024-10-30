// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {readCookie} from "./Utils/Cookies.js";

//pages
import UnexcitingPage from "../src/Pages/UnexcitingPage.jsx"
import Header from "../src/Pages/Header.jsx"
import Home from "./Pages/Home.jsx";
import Resume from "./Pages/Resume.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Catalog from "./Pages/Catalog.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home />}/>
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/catalog/:category" element={<Catalog />}/>
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/resume" element={<Resume />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Route>
                <Route path="/*" element={<UnexcitingPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
