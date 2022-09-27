import React, {Component} from 'react';
import './Home.css';
import { DisplayImageList } from './DisplayImageList';


export default function LeftPortion(props) {
        return(
          <div className='left'>
              <DisplayImageList moviesData = {props.moviesData} />
          </div>
          )
        }    