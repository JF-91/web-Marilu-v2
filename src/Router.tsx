import React,{FC} from "react"
import { Routes, Route } from "react-router-dom"
import RouterLayout from "./common/RouterLayout"
import HomePage from './pages/home/index'
import AboutPage from './pages/about/index'
import ContactPage from './pages/contact/index'

const RoruterApp:FC<{}> = () => {

    return (
        <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
            </Route>
        </Routes>
    )
}

export default RoruterApp