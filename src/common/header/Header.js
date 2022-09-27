import React , {useEffect, useState} from  'react';
import '../../common/header/Header.css';
import { ReactComponent as Logo} from '../../assets/svg0.svg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../header/Header.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';



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
  const[login,setLogin] = useState(true);
  const[logout,setLogout] = useState(false);
  const[bookNow,setBookNow] = useState(false);

  useEffect(() => {
    setBookNow(props.bookFlag);
    setLogin(props.loginFlag);
  },[])
  

        return(
            <div>
                <div className='header'>
                        <Logo className='logo'/>
                        <div className = "btn">
                        <Stack spacing={4} direction="row">
                                {bookNow ?
                                <Button variant = "contained" color = "primary" >Book Show</Button>
                                : null};
                                {login ?
                                <Button variant = "contained" className="btnDisplay">Login</Button>
                                : null};
                                {logout ?
                                <Button variant = "contained" className="btnDisplay">Logout</Button>
                                : null};
                        </Stack>   
                        </div>     
                </div>
            </div>
        )

    }


export default Header;