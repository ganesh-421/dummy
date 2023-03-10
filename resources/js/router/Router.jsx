import React from "react";
import { Routes, Route} from 'react-router-dom'
import IndexProduct from "../components/products/IndexProduct"
import NotFound from "../components/NotFound"
const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={ <IndexProduct/> }/>
                <Route path="/*" element={ <NotFound/> }/>
            </Routes>
        </div>
    )
}
export default Router