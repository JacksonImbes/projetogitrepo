import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function RoutesComponent(){ 
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/repositorio/:repositorio" element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    );
}
