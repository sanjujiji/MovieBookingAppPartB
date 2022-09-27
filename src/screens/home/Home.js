import React, {Component, useState, useEffect} from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import TopPortion from '../../screens/home/TopPortion';
import moviesData from '../../common/moviesData';
import {BottomPortion} from '../../screens/home/MovieFilter';


class Home extends Component{
   
    constructor(){
        super();
    }
    render(){   
        return (
            <div>
               <Header loginFlag = {true} bookFlag = { false }/> 
                <div id="header2">
                    <span >Upcoming Movies</span>
                </div>
                <div>
                        <TopPortion moviesData={moviesData}></TopPortion>
                </div>
                <div className='flex-containter'>
                    <BottomPortion ></BottomPortion>
                </div>
            </div>
        )
    }      
}

export default Home;