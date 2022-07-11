import { Route, Router, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Cards from "../Cards"
import Register from "../Register"

export const CustomRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={Cards} />
            <Route path="/register" element={Register} />
        </Routes>
    </BrowserRouter >
}