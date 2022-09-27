import React , {Component,useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import format from "date-fns/format";
import Details from './Details';




function  DisplayImageListDetails(props){
    //function to handle the onClick() on the image
       
    return(
        <div>
        <ImageList sx={{ width: "auto", height: "auto" }} variant="quilted" cols={1} rows = {1} >
        {
            props.moviesData.map((item) => {
                return(
                <ImageListItem key = {item.id} sx={{height: 350 , margin : 4}}  >
                    <img
                        src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.poster_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className = "image"
                    />
                </ImageListItem>

                )
        })    
        }  
        </ImageList>  
        </div>
      
    )
    }

export default  DisplayImageListDetails ;