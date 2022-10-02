import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red , black } from '@mui/material/colors';
import Button from '@mui/material/Button';
import '../home/Home.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from '../../common/dataSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width : '300px',
    textAlign : "center",
  },
};

let theme = createTheme({
    spacing : 8,
  });
  
  theme = createTheme(theme,{
    typography: {
      body1 : {
        margin : theme.spacing(1),
      }
    },
  });
  

  

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function LoginRegistration() {

    const [modalIsOpen, setIsOpen] = useState(true);
    const [value, setValue] = useState("1");
    const [loginSubmitted,setLoginSubmitted] = useState(false);
    const [loginRegSubmitted,setLoginRegSubmitted] = useState(false);

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [passwordReg,setPasswordReg] = useState("");
    const [contact,setContact] = useState("");
    const [successReg,setSuccessReg] = useState("");
    const [successLogin,setSuccessLogin] = useState("");

 
  const selector = useSelector(state => state.dataSliceReducer);
  const dispatch = useDispatch();

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(dataActions.LOGIN(false));
  }

    const handleChange = (event,newValue) => {
      setValue(newValue);
  }

   const handleChangeLogin = (event) => {
        setUserName(event.target.value);
}

    const handleChangePwd = (event) => {
    setPassword(event.target.value);
}

    const handleChangeEle = (event) =>{
      if (event.target.name =="firstName"){
          setFirstName(event.target.value);
        }
      else if (event.target.name == "lastName") {
        setLastName(document.getElementById("lname").value);
      } 
      else if (event.target.name == "email"){
        setEmail(document.getElementById("mail").value);
      }
      else if (event.target.name == "pwdReg"){
        setPasswordReg(document.getElementById("passwd").value);
      }
      else if (event.target.name == "contact"){
        setContact(document.getElementById("cont").value);
      }
    }


     const handleSubmit = () => {
        setLoginSubmitted({ loginSubmitted: true }, () => {
            setTimeout(() => setLoginSubmitted({ loginSubmitted: false }), 5000);
        });
    }

     const handleRegistrationSubmit = () => {
        setLoginRegSubmitted({ loginRegSubmitted: true }, () => {
        setTimeout(() => setLoginRegSubmitted({ loginRegsubmitted: false }), 5000);
        });
 }

    //Validate Registration Details
    const validateDetails = () => {
        if ((firstName != "") && (lastName != "") && (email != "") && (passwordReg != "") && (contact != ""))
        setSuccessReg("Registration Successful.Please Login!");
    }

    //Redux related

    const handleLogin = (event) =>{
      if ((document.getElementById("loginName").value == "admin") && (document.getElementById("loginPwd").value == "admin"))
      {
        setSuccessLogin("");
        dispatch(dataActions.LOGINSHOW(false));
        dispatch(dataActions.LOGOUTSHOW(true));
         closeModal();
      }
      else {
        setSuccessLogin("Invalid Credentials!");
      }
    }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
         <TabContext value={value}>
         <ThemeProvider theme={theme}>
            <TabList value={value} onChange={handleChange} variant="fullWidth" TabIndicatorProps={{ style: { background: "#FF0000" } }} >
                <Tab label="LOGIN" value = "1"/>
                <Tab label="REGISTER"value ="2" />
            </TabList>
            </ThemeProvider>   
            
            <ValidatorForm onSubmit={handleSubmit}>
            <TabPanel value="1">
            <FormControl>
            <ThemeProvider theme={theme}>
                <Typography variant="body1" gutterBottom>
                <TextValidator type = "text" id="loginName" onChange={handleChangeLogin} name ="username" label="Username*" value={userName} validators={['required']} errorMessages={['required']}>
                </TextValidator>  
                </Typography>
            </ThemeProvider>    
            </FormControl>
            <br></br>
            <FormControl>
            <ThemeProvider theme={theme}>
                <Typography variant="body1" gutterBottom>
                <TextValidator type = "password" id="loginPwd" onChange={handleChangePwd} name ="password" label="Password*" value={password} validators={['required']} errorMessages={['required']}>
                </TextValidator>  
                </Typography>
            </ThemeProvider>  
            </FormControl>
            <br></br>
            <br></br>
            <h4>{successLogin}</h4>
            <br></br>
            <div className="loginBtn">
                <Button variant="contained" type="submit" onClick={handleLogin} >LOGIN</Button>
                {/* {(loginSubmitted && 'Your form is submitted!') || (!loginSubmitted && 'Submit')} */}
            </div>
            </TabPanel>
            </ValidatorForm>
           

            <ValidatorForm onSubmit={handleRegistrationSubmit}>
            <TabPanel value="2">
            <FormControl> 
             <ThemeProvider theme={theme}> 
                 <Typography variant="body1" gutterBottom>
                    <TextValidator textDecoration = "underline" type = "text" label= "First Name*" name ="firstName" id="fname" value={firstName} onChange={handleChangeEle} validators={['required']} errorMessages={['required']}></TextValidator>
                 </Typography> 
            </ThemeProvider>     
             </FormControl> 
            <br></br>
            <FormControl>
            <ThemeProvider theme={theme}>
                <Typography variant="body1" gutterBottom>
                <TextValidator textDecoration = "underline" type = "text" name ="lastName" label="Last Name*" id="lname" value={lastName} onChange={handleChangeEle} validators={['required']} errorMessages={['required']}></TextValidator>
                </Typography>
            </ThemeProvider>  
            </FormControl>
            <br></br>
            <FormControl>
            <ThemeProvider theme={theme}>
                <Typography variant="body1" gutterBottom>
                <TextValidator textDecoration = "underline" type = "text" name ="email" label ="Email*" value={email} id = "mail" onChange={handleChangeEle}validators={['required']} errorMessages={['required']}></TextValidator>
                </Typography>
            </ThemeProvider>  
            </FormControl>
            <br></br>
            <FormControl>
            <ThemeProvider theme={theme}>
                <Typography variant="body1" gutterBottom>
                <TextValidator textDecoration = "underline" type = "password" name ="pwdReg" label="Password*" id="passwd" value={passwordReg} onChange={handleChangeEle} validators={['required']} errorMessages={['required']}></TextValidator>
                </Typography>
            </ThemeProvider>  
            </FormControl>
            <br></br>
            <FormControl>
            <ThemeProvider theme={theme}>
                <Typography variant="body1" gutterBottom>
                <TextValidator textDecoration = "underline" type = "text" id="cont" name ="contact" label="Contact No*" value={contact} onChange={handleChangeEle} validators={['required']} errorMessages={['required']}></TextValidator>
                </Typography>
            </ThemeProvider>  
            <br></br>
            <h4>{successReg}</h4>
            <br></br>
            <div className="loginBtn">
                <Button type="submit" onClick={validateDetails} variant="contained" >REGISTER</Button>
            </div>
            </FormControl>
            </TabPanel>
            </ValidatorForm>
        </TabContext>
        
      </Modal>
    </div>
  );
}

