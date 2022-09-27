import React from 'react';
import DisplayImageListDetails from '../details/DisplayImageListDetails';

function LeftDetails(props){
    return(
        <DisplayImageListDetails moviesData={props.moviesData}></DisplayImageListDetails>
    )
}

export default LeftDetails;