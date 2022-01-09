import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const Playlist = ({playlist,setPlaylist})=>{
    const handleRemove = (song)=> {
      setPlaylist(playlist.filter((item)=>item.id !== song.id))
    }
    return(
        <div className = "playlist-section">
            <p>Your playlist</p>
            { playlist?.length !== 0 
               ?(
                playlist.map((item)=>
                  <li key = {item.id} className="playlist-item">
                    <img src={item.artist.picture_small}  alt="pic"/>
                    <div className = "result-item__info">
                        <strong><span>{item.title_short}</span></strong>
                        <br/>
                        <span>{item.artist.name}</span>
                    </div>
                    <HighlightOffIcon onClick={()=>{handleRemove(item)} }/>
                  </li>
                  )
                )
               :(
                <div className="playlist-no-song">
                  <AudiotrackIcon />
                  <AudiotrackIcon />
                  <AudiotrackIcon />
                  <p>Add your song</p>
                 </div>
                )
            }
        </div>
    );
}

export default Playlist