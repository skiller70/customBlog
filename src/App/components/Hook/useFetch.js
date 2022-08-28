
import axios from "axios"
 function useFetch(props) {

   const fetchData =  async ()=>{
    const data = await axios.get("http://localhost:4000/blog/owner")
    return data
   }


    return{ 
        owner : "skill",
        fetchData
}}

export default useFetch;