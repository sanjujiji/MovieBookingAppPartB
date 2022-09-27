import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import format from "date-fns/format";
import YouTube from "react-youtube";

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
      h5 :{
        fontWeight : 'bolder',
      }
      
    },
  });
    

  const opts = {
    height: '390',
    width: "1000",
    playerVars: {
      autoplay: 1,
    },
  };

function MiddlePartDetails(props){
    
    return(
           <div>
           
        <ThemeProvider theme={theme}>
        {
            props.moviesData.map((item) => {
                return(
                    <div key={item.id}>
                        <br></br>
                        <br></br>
                        <Typography variant = "h2" gutterBottom>
                            {item.title}
                        </Typography>
                        <div className="labelAlign">
                            <Typography variant = "h5" gutterBottom>
                                <label htmlFor='genre'>Genre: &nbsp;</label>
                            </Typography>
                            <Typography variant = "h6" gutterBottom>
                                {
                                    item.genres.join(", ")
                                
                                }
                            </Typography>    
                        </div>
                        <div className="labelAlign">
                            <Typography variant = "h5" gutterBottom>
                                <label htmlFor='duration'>Duration: &nbsp;</label>
                            </Typography>
                            <Typography variant ="h6" gutterBottom>
                                {item.duration}
                            </Typography>
                        </div>    
                        <div className="labelAlign">
                            <Typography variant = "h5" gutterBottom>
                                <label htmlFor='release'>Release Date: &nbsp;</label>
                            </Typography>
                            <Typography variant ="h6" gutterBottom>
                                {format(new Date(`${item.release_date}`),'EEE MMM do yyyy')}
                            </Typography>
                        </div>
                        <div className="labelAlign">
                            <Typography variant = "h5" gutterBottom>
                                <label htmlFor='rating'>Rating: &nbsp;</label>
                            </Typography>
                            <Typography variant ="h6" gutterBottom>
                                {item.critics_rating}
                            </Typography>
                        </div>    
                        <div className="labelPlot">
                            <Typography variant = "h5" gutterBottom>
                                <label htmlFor='plot'>Plot: &nbsp;</label>
                            </Typography>
                            <Typography variant ="h6" gutterBottom>
                            &nbsp;<a href={item.wiki_url}>Wiki Link &nbsp;</a>{item.storyline}
                            </Typography>
                        </div>
                        <div className="labelTrailer">
                            <Typography variant = "h5" gutterBottom>
                                <label htmlFor='trailer'>Trailer: </label>
                            </Typography>
                            
                            <YouTube videoId={(item.trailer_url).substring((item.trailer_url).indexOf('=')+1)} opts={opts}/>
                        </div>    
                    </div>
                    )
                }
            )
        }    
        </ThemeProvider>
        </div>

    )
}

export default MiddlePartDetails;