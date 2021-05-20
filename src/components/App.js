import React ,{useState , useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from './VideoDetails';
import useVideos from '../hooks/useVideos'
const App =() => {
  const [selectedVideo , setSelectedVideo] = useState(null);
  const [videos , search] = useVideos('buildings')
  useEffect(()=>{
    setSelectedVideo(videos[0]); 
  },[videos]);
    //  
  
// customs hooks are used for making the code reusable and it helps you in making your code more reusable and helping 
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
          <div className="ui row">
              <div className="eleven wide column">
                  <VideoDetails video={selectedVideo}/>
              </div>
              <div className="five wide column">
                  <VideoList 
                  onVideoSelect={(video)=>setSelectedVideo(video)} 
                  videos={videos}/>
              </div>    
          </div>
      </div>
    </div>
  );
}


export default App;
