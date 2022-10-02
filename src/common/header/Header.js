import React , {useEffect, useState} from  'react';
import '../../common/header/Header.css';
import { ReactComponent as Logo} from '../../assets/svg0.svg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../header/Header.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LoginRegistration from '../../screens/home/LoginRegistration';
// import { createStore } from "redux";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { dataActions } from '../dataSlice';
import { StaticDatePicker } from '@mui/x-date-pickers';


const theme = createTheme({
    typography: {
      button: {
        marginLeft : '24px',
        marginTop : '8px',
        marginBottom : '0px',
        height : '24px',
        textTransform : 'capitalize',
      },

    },
  });

  
 

  function Header(props){
    const[login,setLogin] = useState();
    const[logout,setLogout] = useState();
    const[bookNow,setBookNow] = useState();
    const[loginClickedNew,setLoginClickedNew] = useState();

    const dispatch = useDispatch();
    const selector = useSelector(state => state.dataSliceReducer);

    useEffect(() => {
      setLoginClickedNew(selector.loginClicked);
    },[selector.loginClicked])

    useEffect(() => {
      setLogin(selector.loginShow);
      setLogout(selector.logoutShow);
      setBookNow(selector.bookShow);
    },[selector.loginShow,selector.logoutShow,selector.bookShow]);
    
  const openLoginPage = () => { 
    dispatch(dataActions.LOGIN(true));
    setLoginClickedNew(selector.loginClicked);
  }

  const showLoginButton = () => {
    dispatch(dataActions.LOGINSHOW(true));
    dispatch(dataActions.LOGOUTSHOW(false));
  }

  const bookShowPage = () => {
    if(selector.loginShow){
      openLoginPage();
    }
  }

        return(
            <div>
                <div className='header'>
                        <Logo className='logo'/>
                        <div className = "btn">
                        <Stack spacing={4} direction="row">
                                {bookNow ?
                                <Button variant = "contained" color = "primary" onClick={bookShowPage}>Book Show</Button>
                                : null};
                                {login ?
                                <Button variant = "contained" className="btnDisplay" onClick={() => openLoginPage()}>Login</Button>
                                : null};
                                {logout ?
                                <Button variant = "contained" className="btnDisplay" onClick={() => showLoginButton()}>Logout</Button>
                                : null};
                        </Stack>   
                        <br></br>
                        <br></br>
                        
                        <br></br>
                        <br></br>

                              {loginClickedNew && <LoginRegistration />}
                        </div>     
                </div>
            </div>
        )

    }

    export default Header;

    
    
    