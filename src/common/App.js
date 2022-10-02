import React, {useState , useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
// import { DisplayContext } from '../screens/home/DisplayImageList';
import BookShow from '../screens/bookshow/BookShow';
import { connect } from 'react-redux';


export default function App() {
    
    return(
        <Router>
            <Routes>
                <Route path ="/"  element = {<Home />} />
                <Route path ="/Details/:id" element = {<Details />} />
                <Route path="/BookShow" element = {<BookShow />}/>
            </Routes>
    </Router>
    )
}

