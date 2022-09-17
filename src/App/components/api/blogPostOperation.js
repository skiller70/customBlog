import { MAIN_END_POINT } from "./ApiEndpoint";
import axios from "axios";
import { useMutation, useQueryClient, useInfiniteQuery } from "react-query";
import { useDispatch } from "react-redux";

//************************************************ POST BLOG POST***************************************
export function usePostBlogs(props) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const postBlogs = async (postDetail) => {
    const { data } = await axios.post(
      `${MAIN_END_POINT}/blogPost`,
      postDetail,
      { "Content-type": "multipart/form-data" }
    );
    return data;
  };

  return useMutation(postBlogs, {
    onMutate: async (data) => {
      const objData = {};
      data.forEach((item, key) => {
        objData[key] = item;
      });
      dispatch({ type: "AFTER_POST" });
      dispatch({
        type: "setBlogPosting",
        payload: {
          blog_posting: true,
          blog_details: {
            content: objData.content,
            subject: objData.subject,
            title: objData.title,
          },
        },
      });
    },
    onSettled: (data) => {
      queryClient.invalidateQueries("blog-posts");
      dispatch({
        type: "setBlogPosting",
        payload: {
          blog_posting: true,
          blog_details: {
            content: data.content,
            subject: data.subject,
            title: data.title,
          },
        },
      });
      
    },
    onError: (error, data, context) => {
      console.log("something went wrong")
    },
  });
}
//************************************************ FETCH BLOG POST***************************************

export function useFetchBlog(props) {
  const fetchBlogPost = async (queryFunctionContext) => {
    const pageParams = queryFunctionContext.pageParam
      ? queryFunctionContext.pageParam
      : 1;

    const { data } = await axios.get(
      `${MAIN_END_POINT}/getBlogs?page=${pageParams}&limit=3`
    );

    return { data: data.data, pageParam: data.pageParam };
  };
  const {
    isLoading,
    isError,
    data,
    isSuccess,
    isStale,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(["blog-posts"], fetchBlogPost, {
    getNextPageParam: (lastPage, page) => {
      if (page.length < lastPage.pageParam) {
        return page.length + 1;
      } else {
        return undefined;
      }
    },
  });
  return {
    isLoading,
    isError,
    data,
    isSuccess,
    isStale,
    hasNextPage,
    fetchNextPage,
    isFetching,
  };
}

//************************************************ DELETE BLOG POST***************************************

export function useDeletePost() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const deleteBlog = async (postId) => {
    const { data } = await axios.delete(
      `${MAIN_END_POINT}/deletePost${postId}`
    );
    return data;
  };

  const { isError, isLoading, mutate } = useMutation(deleteBlog, {
    onSettled: () => {
      queryClient.invalidateQueries("blog-posts");
      dispatch({ type: "setConfirmDelete", payload: { isOpen: false } });
    },
  });

  return {
    isError,
    isLoading,
    mutate,
  };
}
