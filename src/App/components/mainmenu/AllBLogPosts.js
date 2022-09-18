import React, { useEffect } from "react";

import { useFetchBlog } from "../api/blogPostOperation";
import Control from "../ReuseComponents/Control";

function AllBLogPosts(props) {
  const { data, fetchNextPage, hasNextPage, isFetching,  } =
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
      {console.log("allblog post render")}
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
      ) : (
        <>
          <Control.BlogCard loading={true} />
          <br></br>
          <Control.BlogCard loading={true} />
          <br></br>
          <Control.BlogCard loading={true} />
        </>
      )}
      {hasNextPage && isFetching ? (
        <div>
          <Control.BlogCard loading={true} />
          <br></br>
          <Control.BlogCard loading={true} />
          <br></br>
          <Control.BlogCard loading={true} />
        </div>
      ) : null}
    </>
  );
}
export default AllBLogPosts;
