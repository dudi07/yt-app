import axios from 'axios';


const KEY = "AIzaSyBnOOZPIwaCe67cr54es4BSyWxytwUt46k";
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    }
})

