import React, { useEffect } from "react";
import LoadingSpinner from "../ReuseComponents/LoadingSpinner";
import { useFetchBlog } from "../api/blogPostOperation";
import Control from "../ReuseComponents/Control";


function AllBLogPosts(props) {
  const { data, fetchNextPage  } =
    useFetchBlog();

  // const userProfile = useSelector((state) => state.userProfile);



 

  useEffect(() => {
    let fetching = false;

    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
      console.log("window event ");
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
                return (
                  <div key={index}>
                    <Control.BlogCard
                      img={item.image}
                      author={item.author}
                      postId={item._id}
                    />
                    <br /> <br />{" "}
                  </div>
                );
              })}
            </div>
          );
        })
      ) :null}
       <div style={{marginLeft : "50%"}}>
      {< LoadingSpinner /> }
      </div>
     
    </>
  );
}
export default AllBLogPosts;
