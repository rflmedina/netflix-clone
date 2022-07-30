import { BrowserRouter, Routes as RouterDom, Route } from 'react-router-dom'

import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Register from '~/pages/Login/Register'

const Routes = ( ) => {
    return(
        <BrowserRouter>
            <RouterDom>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Register/>}/>
                <Route path="/browse" element={<Home/>}/>
            </RouterDom>
        </BrowserRouter>
    )
}

export default Routes