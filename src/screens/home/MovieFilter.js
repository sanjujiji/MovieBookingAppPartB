import * as React from 'react';
import {useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import genres from '../../common/genres';
import artists from '../../common/artists';
import moviesData from '../../common/moviesData';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LeftPortion from '../home/LeftPortion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


let theme = createTheme({
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

theme = createTheme(theme,{
  typography: {
    body1 : {
      color: theme.palette.primary.light,
      margin : theme.spacing(2),
    }
  },
  minWidth : 240,
  maxWidth : 240
});


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
        color: theme1.palette.primary.light,
        margin : theme1.spacing(1),
      }
    },
    
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
function BottomPortion(){
  const[movieScreened,setMovieScreen]=useState(moviesData);
  const[genreName,setGenreName]=useState([]);
  const[artistName,setArtistName]=useState([]);
  const[releaseStart,setReleaseStart]=useState("");
  const[releaseEnd,setReleaseEnd]=useState("");

  const showMovie = (e) => {
    
    let movieName = document.getElementById("movie-name").value;
    let genreList = genreName;
    let artistList = artistName;
    let releaseStartDt = releaseStart;
    let releaseEndDt = releaseEnd;

    //if movie name is given then reduce the array list of movies
    var movieNameScreened;
        if ((movieName != "") && (genreList.length > 0) && (artistList.length > 0) && (releaseStartDt != "") && (releaseEndDt != "")) {
          movieNameScreened = moviesData.filter(function(movie){
          return ((movie.title.toLowerCase() === movieName.toLowerCase()) && (genreList.some(r => movie.genres.indexOf(r) >= 0))
          && (movie.artists.some(y => y.id.includes(artistList))) && ((new Date(movie.release_date).getTime() >= new Date(releaseStartDt).getTime()) && (new Date(movie.release_date).getTime() <= new Date(releaseEndDt).getTime())))
          })
        }
        else if ((movieName != "") && (genreList.length > 0) && (artistList.length > 0)) {
          movieNameScreened = moviesData.filter(function(movie){
          return ((movie.title.toLowerCase() === movieName.toLowerCase()) && (genreList.some(r => movie.genres.indexOf(r) >= 0)) && (movie.artists.some(y => y.id.includes(artistList))))
          })
        }
        else if ((movieName != "") && (genreList.length > 0) ){
          movieNameScreened = moviesData.filter(function(movie){
          return ((movie.title.toLowerCase() === movieName.toLowerCase()) && (genreList.some(r => movie.genres.indexOf(r) >= 0)))
          })
        }
        else if ((movieName != "") && (artistList.length > 0)) {
          movieNameScreened = moviesData.filter(function(movie){
          return ((movie.title.toLowerCase() === movieName.toLowerCase()) && (movie.artists.some(y => y.id.includes(artistList))) )
          })
        }
        else if ((movieName != "") && (releaseStartDt != "") && (releaseEndDt != "")) {
          movieNameScreened = moviesData.filter(function(movie){
          return ((movie.title.toLowerCase() === movieName.toLowerCase()) && ((new Date(movie.release_date).getTime() >= new Date(releaseStartDt).getTime()) && (new Date(movie.release_date).getTime() <= new Date(releaseEndDt).getTime())))
          })
        }
        else if ((genreList.length > 0) && (artistList.length > 0) && (releaseStartDt != "") && (releaseEndDt != "")) {
        movieNameScreened = moviesData.filter(function(movie){
        return ((genreList.some(r => movie.genres.indexOf(r) >= 0))
        && (moviesData.filter(x => x.artists.some(y => y.id.includes(artistList)))) && ((new Date(movie.release_date).getTime() >= new Date(releaseStartDt).getTime()) && (new Date(movie.release_date).getTime() <= new Date(releaseEndDt).getTime())))
        })
      }
      else if ((genreList.length > 0) && (releaseStartDt != "") && (releaseEndDt != "")) {
        movieNameScreened = moviesData.filter(function(movie){
        return ((genreList.some(r => movie.genres.indexOf(r) >= 0)) && ((new Date(movie.release_date).getTime() >= new Date(releaseStartDt).getTime()) && (new Date(movie.release_date).getTime() <= new Date(releaseEndDt).getTime())))
        })
      }
      else if ((artistList.length > 0) && (releaseStartDt != "") && (releaseEndDt != "")) {
        movieNameScreened = moviesData.filter(function(movie){
        return ((movie.artists.some(y => y.id.includes(artistList))) && ((new Date(movie.release_date).getTime() >= new Date(releaseStartDt).getTime()) && (new Date(movie.release_date).getTime() <= new Date(releaseEndDt).getTime())))
        })
      }
      else if ((genreList.length > 0) && (artistList.length > 0)) {
        movieNameScreened = moviesData.filter(function(movie){
        return ((genreList.some(r => movie.genres.indexOf(r) >= 0)) && (movie.artists.some(y => y.id.includes(artistList))) )
        })
      }
      else if ((movieName != "")){
        movieNameScreened = moviesData.filter(function(movie){
          return ((movie.title.toLowerCase() === movieName.toLowerCase()))
      })
    }
    else if ((genreList.length > 0)) {
      movieNameScreened = moviesData.filter(function(movie){
      return ((genreList.some(r => movie.genres.indexOf(r) >= 0)))
      })
    }
    else if ((artistList.length > 0)) {
      movieNameScreened = moviesData.filter(x => x.artists.some(y => y.id.includes(artistList)));
    }
    else if ((releaseStartDt != "") && (releaseEndDt != "")) {
      movieNameScreened = moviesData.filter(function(movie){
      return (((new Date(movie.release_date).getTime() >= new Date(releaseStartDt).getTime()) && (new Date(movie.release_date).getTime() <= new Date(releaseEndDt).getTime())))
      })
    }
      
      setMovieScreen(movieNameScreened);
  }

  const handleGenreChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      typeof value === 'string' ? value.split(',') : value,
      );
    };

     const handleArtistChange = (event) => {
        const {
          target: { value },
        } = event;
        setArtistName(
          typeof value === 'string' ? value.split(',') : value,
          );
      };
  return (
    <div>
      <div>
        <LeftPortion  moviesData={movieScreened}></LeftPortion>
      </div>
      <div  className="right">
        <br></br>
        <br></br>
        <Card variant="outlined" sx={{ width: 300, height : 550 , marginLeft : "64px" }}>{card}  
          <ThemeProvider theme={theme}>
            <Typography variant="body1" gutterBottom>
              <FormControl sx={{ width : 250 }} >
                <TextField id="movie-name" label="Movie Name" />
            </FormControl>
            </Typography> 
            </ThemeProvider>
            
          <FormControl sx={{width : 250 }}>
          <ThemeProvider theme={theme}>
          <Typography variant="body1" gutterBottom>
              <InputLabel id="multiple-checkbox-label-genre">Genres</InputLabel>
              </Typography> 
              </ThemeProvider>
                   <Select 
                      labelId="genre-multiple-checkbox-label"
                      id="genre-multiple-checkbox"
                      multiple
                      value={genreName}
                      onChange={handleGenreChange}
                      input={<OutlinedInput label="Genres" />}
                      renderValue={(selected) => selected.join(', ')}
                      MenuProps={MenuProps}
                    >
                    {genres.map((genre) => (
                        <MenuItem key={genre.id} value={genre.name} >
                            <Checkbox checked={genreName.indexOf(genre.name) > -1} />
                            <ListItemText primary={genre.name} />
                        </MenuItem>
                     ))}
                  </Select>
          </FormControl>

          <FormControl sx={{width: 250 }}>
          <ThemeProvider theme={theme}>
          <Typography variant="body1" gutterBottom>
              <InputLabel id="artist-multiple-checkbox-label">Artists</InputLabel>
              </Typography>
              </ThemeProvider>
              <Select
                      labelId="artist-multiple-checkbox-label"
                      id="artist-multiple-checkbox"
                      multiple
                      value={artistName}
                      onChange={handleArtistChange}
                      input={<OutlinedInput label="Artists" />}
                      renderValue={(selected) => (selected.join(', '))}
                        
                    >
                   {artists.map((artist) => (
                        <MenuItem key={artist.id} value={artist.id}>
                            <Checkbox checked={artistName.indexOf(artist.id) > -1} />
                            <ListItemText  primary={artist.first_name+" "+artist.last_name} />
                        </MenuItem>
                     ))}
              </Select>
          </FormControl>
            <ThemeProvider theme={theme}>
          <Typography variant="body1" gutterBottom>
          <FormControl sx={{ width: 250 ,color: 'black'}}>
              <br></br>
              <br></br>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  id = "releaseStartId"
                  inputFormat="dd-MM-yyyy"
                  value={releaseStart|| null}
                  label = "Release Start Date"
                  onChange={(newValue) => {
                        setReleaseStart(newValue);
                  }}
                  renderInput={(params) => <TextField {...params}  id="outlined-required" InputLabelProps={{shrink: true, }} 
                  inputProps={{...params.inputProps,placeholder: "dd-MM-yyyy"}} />} />
              </LocalizationProvider>
          </FormControl>
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
          <Typography variant="body1" gutterBottom>
          <FormControl sx={{width: 250 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    id="releaseEndId"
                    inputFormat="dd-MM-yyyy"
                    value={releaseEnd || null}
                    onChange={(newValue) => {
                                setReleaseEnd(newValue);
                    }}
                    label="Release End Date"
                    renderInput={(params) => <TextField {...params}  id="outlined-required"  InputLabelProps={{shrink: true,}} 
                    inputProps={{...params.inputProps,placeholder: "dd-MM-yyyy"}} />} />  
                </LocalizationProvider>
          </FormControl>
          </Typography>
          </ThemeProvider>
        
          <ThemeProvider theme={theme}>
          <Typography variant="body1" gutterBottom>
        <FormControl sx={{ width: 250 }}> 
            <CardActions>
                <Button size="large" variant="contained" id="applyButton" onClick = {showMovie}>APPLY</Button>
            </CardActions>
        </FormControl>
        </Typography>
        </ThemeProvider>
       
     
      </Card>
    </div>
    </div>
  );
          }

export {BottomPortion};
