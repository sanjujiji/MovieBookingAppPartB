import React , {useState,useEffect }from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData.js';
import LeftDetails from '../details/LeftDetails';
import MiddlePartDetails from '../details/MiddlePartDetails';
import RightDetails from '../details/RightDetails';
import {useParams , useLocation} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";


function Details(){
    const params = useParams();
    const location = useLocation();
    const bookFlag  = location.state.book;  
    
    let movieDetail;
    movieDetail = moviesData.filter(function(movie){
        return(movie.id === params.id)

   
})
    return(
        <div>
        <Header loginFlag = {false} bookFlag = {bookFlag}/>
            <div className="remaining">
                    <div className="leftDetails">
                        <LeftDetails moviesData = {movieDetail} />
                    </div>
                    <div className="middleDetails">
                        <MiddlePartDetails moviesData = {movieDetail} />
                    </div>
                    <div className="rightDetails">
                        <RightDetails moviesData = {movieDetail} />
                    </div>
            </div>
        </div>      
    )
}
export default Details;