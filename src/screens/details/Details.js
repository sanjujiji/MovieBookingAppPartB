import React ,{useEffect} from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/moviesData.js';
import LeftDetails from '../details/LeftDetails';
import MiddlePartDetails from '../details/MiddlePartDetails';
import RightDetails from '../details/RightDetails';
import {useParams , useLocation} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from '../../common/dataSlice';

const theme = createTheme({
    typography: {
      button: {
        marginLeft : '24px',
        marginTop : '8px',
        marginBottom : '0px',
        height : '24px',
        textTransform : 'capitalize',
        color : 'black',
      },
    },
  });

function Details(props){
    const params = useParams();
    const location = useLocation();
    // const bookFlag  = location.state.book;  
    
    let movieDetail;
    movieDetail = moviesData.filter(function(movie){
        return(movie.id === params.id);  
})

    const selector = useSelector(state => state.dataSliceReducer);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(dataActions.BOOKSHOW(true));
    },[selector.bookShow])

    const goHome = () =>
    {
      dispatch(dataActions.BOOKSHOW(false));
    }
    return(
        <div>
       
        {
            <Header />
        }
        <ThemeProvider theme={theme}>
                        <Stack direction="row" spacing={2}>
                         <Typography>
                                <Link to="/" target="_self"  style={{ textDecoration: 'none'}}><Button onClick={goHome}><span>&#60;&nbsp;&nbsp;</span>Back to Home</Button></Link>
                         </Typography>
                        </Stack>
        </ThemeProvider>  
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