import React, { useEffect } from "react";
import { useFetchBlog } from "../api/blogPostOperation";
import Control from "../ReuseComponents/Control";

function AllBLogPosts(props) {
  const { data, fetchNextPage, hasNextPage, isFetching } = useFetchBlog();

  useEffect(() => {
    const handleScroll = async (e) => {
      const innerHeight = window.innerHeight
      const { scrollHeight, scrollTop } =
        e.target.scrollingElement;
        
      if (scrollHeight - scrollTop <= innerHeight ) {
        fetchNextPage();
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, fetchNextPage]);

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
      ) : (
        <div>
          {" "}
          <Control.BlogCard loading={true} />
          <br></br>
          <Control.BlogCard loading={true} />
          <br></br>
          <Control.BlogCard loading={true} />
        </div>  
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
