import React, { useState } from "react";
import '../App.css';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomDialog from './CustomDialog';
import axios from 'axios';

const Search = ({ setPlaylist, playlist }) =>{
 const [open, setOpen] = useState(false);
 const [searchResult, setSearchResult] = useState([]);
 const [searchInput, setSearchInput] = useState("");
 const [more, setMore]= useState(true);
 const style = more ? { overflowY: 'hidden'}:{ overflowY: 'overlay'};
 const fetchResult = async() => {
   if(searchInput !== ""){
    await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchInput}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "28eb8bad80mshaca885a88cb7caep1443f3jsna4de0ddf13fb"
      }
    })
     .then(({data:{data}})=>{
      if(!data){
        alert('Sth went wrong')
      }
      setSearchResult(data)
    })
    .catch(err => {
      console.error(err)
    })
  }
 };
 const moreItems = ((more) ? searchResult?.slice(0,4):searchResult )|| [];
 
 const handleSearch = (e) => {
    setSearchInput(e.target.value.trim().toLowerCase())
  };

 const handleAdd = (song) =>{
    playlist.length <= 4 ? setPlaylist(playlist.concat(song)):alert("Playlist can have max 5 songs")
  };

 const handleOpen = ()=>{
  setOpen(true)
 };

 const handleClose = ()=>{
  setOpen(false)
 };

  return(
      <div className = "search-section" style={style}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
          onBlur={fetchResult}
        />
        { searchResult?.length !== 0 ?
          (
          <>
              {
                moreItems.map((item)=>
                  <li key = {item.id} className="result-item" onClick={()=>handleAdd(item)}>
                    <img src={item.artist.picture_small} alt="pic"/>
                      <div className = "result-item__info">
                        <strong><span>{item.title_short}</span></strong>
                        <br/>
                        <span>{item.artist.name}</span>
                      </div>
                  </li>
                ) 
              } 
              <div className="add">
                <Button variant="contained" endIcon={< DownloadIcon/>} style={{ backgroundColor: "#b65e23f0"}} onClick={()=>{handleOpen()}}>Save</Button>
              </div>
              {
                more&searchResult?.length!==0 ? (
                  <>
                    <Button  endIcon={< ExpandMoreIcon />} style={{ zIndex:"1", color:"white", marginLeft:"40%", marginTop:"3%"}} onClick={()=>{setMore(false)}}>See more</Button>
                  </>
                ):
                null
              }
            </>
          ):(
            <div className="no-result">
              <AudiotrackIcon />
              <AudiotrackIcon />
              <AudiotrackIcon />
              <p>Type in your favorite artist or song</p>
            </div>
          )
        }
        {open ? <CustomDialog handleClose={handleClose} open={open} playlist={playlist} /> : null}
      </div>
  );
}

export default Search