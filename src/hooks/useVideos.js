import {useState , useEffect} from 'react'
import youtube from '../components/apis/youtube'

const useVideos = (defaultSearchTerm) =>{
    const [videos , setVideo]=useState([]);
//   
    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm])
    const search = async(term) => {
        const response = await youtube.get('/search' , {
            params:{
                q:term
            }
        });
        // console.log(response);
        setVideo(response.data.items);
    };

    return [videos , search];
}

export default useVideos