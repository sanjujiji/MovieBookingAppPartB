import React, {Component} from 'react';
import './Home.css';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { MultipleSelect } from './MovieFilter';


let theme1 = createTheme({
  palette: {
    primary: {
      light: '#42a5f5',
      main : '#1976d2'
    },
  },
  spacing : 8,
  minWidth : 240,
  maxWidth : 240
});

theme1 = createTheme(theme1,{
    typography: {
      body1 : {
        color: theme1.palette.primary.light
      }
    },
    spacing : 8,
    minWidth : 240,
    maxWidth : 240
  });

    const card = (
        <React.Fragment>
          <CardContent>
           <ThemeProvider theme={theme1}>
                <Typography variant="body1" sx={{ fontSize: 22 }} gutterBottom>
                    FIND MOVIES BY:
                </Typography>
            </ThemeProvider>
          </CardContent>
          
        </React.Fragment>
      );
       
class RightPortion extends Component{
    render(){
        return(
              <div className="right">
                {/* <ThemeProvider theme={theme}> */}
                  <br></br>
                  <br></br>
                  <Card variant="outlined" sx={{ width: 300, marginLeft : "64px" }}>{card}
                      {/* <MultipleSelect moviesData = {this.props.moviesData}/> */}
                  </Card>
                  {/* </ThemeProvider> */}
                </div>
            )
          }
    }     
    
    
   

export default RightPortion;