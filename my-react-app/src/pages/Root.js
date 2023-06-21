import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import App from '../App'
import PokemonDetails from '../components/PokemomDetails/index'

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route 
                  path="/pokemon/"
                  element={<PokemonDetails />}
                />
                <Route 
                  path="/pokemon/:id"
                  element={<PokemonDetails />}
                />
                <Route 
                  path="/"
                  element={<App />}
                />
            </Routes>
        </Router>
    )
} 

export default Root