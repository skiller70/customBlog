import { MAIN_END_POINT } from "./ApiEndpoint";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
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

      dispatch({ type: "setLoading", payload: true });
      // await queryClient.cancelQueries("blog-posts");
      dispatch({ type: "AFTER_POST" });
      const previousData = queryClient.getQueryData("blog-posts");

      queryClient.setQueryData("blog-posts", (oldQueryData) => {
        
        return [objData,...oldQueryData];
      });

      return {
        previousData
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("blog-posts");
      dispatch({ type: "AFTER_POST" });
    },
    onError: (error, data, context) => {
      queryClient.setQueryData("blog-posts", context.previousData);
    },
  });
}
//************************************************ FETCH BLOG POST***************************************

export function useFetchBlog(props) {
  const fetchBlogPost = async () => {
    const { data } = await axios.get(`${MAIN_END_POINT}/getBlogs`);
    return data;
  };
  const { isLoading, isError, data, isSuccess, isStale } = useQuery(
    "blog-posts",
    fetchBlogPost,
    {
      retry: 0,
    }
  );
  return {
    isLoading,
    isError,
    data,
    isSuccess,
    isStale,
  };
}

//************************************************ DELETE BLOG POST***************************************

export function useDeletePost() {
  const queryClient = useQueryClient();
  const deleteBlog = async (postId) => {
    const { data } = await axios.delete(
      `${MAIN_END_POINT}/deletePost${postId}`
    );
    return data;
  };

  const { isError, isLoading, mutate } = useMutation(deleteBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries("blog-posts");
    },
  });

  return {
    isError,
    isLoading,
    mutate,
  };
}
