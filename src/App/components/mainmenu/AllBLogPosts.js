import React from "react";
import { useFetchBlog } from "../api/blogPostOperation";
import Control from "../ReuseComponents/Control";


function AllBLogPosts(props) {
  const { isLoading, isError, data,isSuccess,} = useFetchBlog()
  
console.log(isError)
  return (
    <div>



      {isSuccess?data.map((item, index) => {
        
        return (
          <div key={index}>
            <Control.BlogCard img={item.image} author={item.author} postId={item._id}   />
            <br /> <br />{" "}
          </div>
        );
      }):<Control.BlogCard loading={isLoading}  /> 
      
      
      
    }
    </div>
  );
}
export default AllBLogPosts;
