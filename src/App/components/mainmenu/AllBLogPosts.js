import React, { useEffect } from "react";
import LoadingSpinner from "../ReuseComponents/LoadingSpinner";
import { useFetchBlog } from "../api/blogPostOperation";
import Control from "../ReuseComponents/Control";
import { Backdrop } from "@mui/material";



function AllBLogPosts(props) {
  const { data, fetchNextPage,isFetching,isLoading  } =
    useFetchBlog();

  // const userProfile = useSelector((state) => state.userProfile);



 

  useEffect(() => {
    let fetching = false;

    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
    
      if (!fetching && scrollHeight - scrollTop < clientHeight * 1.5) {
        fetching = true;
        await fetchNextPage();
  
        fetching = false;
      }
    };





    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [data,fetchNextPage]);

  return (
    <>
   
      
      {data ? (
        data.pages.map((pageItem, pageIndex) => {
          return (
            <div key={pageIndex}>
              {pageItem.data.map((item, index) => {
                console.log(item)
                return (
                  <div key={index}>
                    <Control.BlogCard
                      img={item.image || ""}
                      author={item.author || ""}
                      postId={item._id || ""}
                      like={item.likes || []}
                      date={item.date || ""}
                      username={item.author.username || ""}
                      comments={item.comments || []}
                      content={item.content|| ""}
                      subject={item.subject|| ""}
                      title={item.title || "" }
                    />
                    <br /> <br />{" "}
                  </div>
                );
              })}
            </div>
          );
        })
      ) :null}
     
       <div style={{marginLeft : "45%"}}>
      {data&&isFetching?< LoadingSpinner />:null }
      </div>
      {isLoading?<Backdrop sx={{color:"#fafafa", backgroundColor:"fafafa"}} open={true}><LoadingSpinner/></Backdrop>:null}
    </>
  );
}
export default AllBLogPosts;
