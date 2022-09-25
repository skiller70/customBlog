import { MAIN_END_POINT } from "./ApiEndpoint";
import axios from "axios";
import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
 
} from "react-query";
import { useDispatch, useSelector } from "react-redux";

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
          blog_posting: false,
          blog_post_loading: false,
          blog_details: {
            content: data.content,
            subject: data.subject,
            title: data.title,
            image: data.image,
            date: data.date,
          },
        },
      });
      dispatch({ type: "AFTER_POST", payload: false });
    },
    onError: (error, data, context) => {
      dispatch({ type: "AFTER_POST", payload: true });
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

//************************************************like Post***************************************

export const useLikePost = () => {
  const queryClient = useQueryClient();
  const postLike = async (data) => {
    await axios.get(
      `${MAIN_END_POINT}/postLike?postId=${data.postId}&author=${data.author}&remove=${data.remove}`
    );
  };

  const { data, isLoading, mutate } = useMutation(postLike, {
    onMutate: (BlogData) => {
      const previousData = queryClient.getQueryData("blog-posts");
      if (BlogData.remove === "true") {
        queryClient.cancelQueries("blog-posts");

        queryClient.setQueriesData("blog-posts", (oldData) => {
          const pages = oldData.pages.map((pageItem, index) => {
            const data = pageItem.data.filter((filterItem) => {
              if (filterItem._id === BlogData.postId) {
                return filterItem.likes.pop(BlogData.author);
              } else {
                return filterItem;
              }
            });
            return { data, pageParam: pageItem.pageParam };
          });

          return {
            pages,
            pageParams: oldData.pageParams,
          };
        });
      } else {
        queryClient.cancelQueries("blog-posts");

        queryClient.setQueriesData("blog-posts", (oldData) => {
          const pages = oldData.pages.map((pageItem, index) => {
            const data = pageItem.data.filter((filterItem) => {
              if (filterItem._id === BlogData.postId) {
                return filterItem.likes.push(BlogData.author);
              } else {
                return filterItem;
              }
            });
            return { data, pageParam: pageItem.pageParam };
          });

          return {
            pages,
            pageParams: oldData.pageParams,
          };
        });
      }

      return {
        previousData,
      };
    },
    onError: (_error, _data, context) => {
      queryClient.setQueriesData("blog-posts", context.previousData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("blog-posts");
    },
  });

  return {
    data,
    isLoading,
    mutate,
  };
};

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
    onSuccess: () => {
      queryClient.invalidateQueries("blog-posts");
      dispatch({ type: "setConfirmDelete", payload: { isOpen: false } });
      dispatch({ type: "AFTER_DELETE_POST", payload: false });
    },
    onError: () => {
      dispatch({ type: "AFTER_DELETE_POST", payload: true });
    },
  });

  return {
    isError,
    isLoading,
    mutate,
  };
}

//************************************************ GET COMMENTS***************************************

export const useGetComments = (pages) => {
  const POPUP = useSelector((state) => state.popup);
  const fetchComments = async (queryFunctionContext) => {
    const pageParams = queryFunctionContext.pageParam
      ? queryFunctionContext.pageParam
      : 1;

    const queryData = queryFunctionContext.queryKey;

    const { data } = await axios.get(
      `${MAIN_END_POINT}/getComment?postId=${queryData[1]}&pages=${pageParams}`
    );

    return data;
  };

  const { data, isLoading, isPreviousData, fetchNextPage } = useInfiniteQuery(
    [`blog-comments`, POPUP.COMMENT_POST_ID],
    fetchComments,
    {
      getNextPageParam: (lastPage, page) => {
        if (page.length < POPUP.GET_COMMENTS_PAGES) {
          return page.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  return {
    data,
    isLoading,
    isPreviousData,
    fetchNextPage,
  };
};
//************************************************ POST COMMENTS***************************************

export const usePostComments = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient();
  const postComment = async (commentData) => {
   const { data } = await axios.post(`${MAIN_END_POINT}/comments`, commentData);
   return data
  };

  const { mutate, isLoading } = useMutation(postComment, {
    onMutate: (data) => {

      dispatch({type:"setPostingComment",payload:{postingComment:true,postingCommentDetail:data}})

    },
    onSuccess : ()=>{
      dispatch({type:"setPostingComment",payload:{postingComment:false,postingCommentDetail:{}}})
      queryClient.invalidateQueries("blog-comments")

    }
  });

  return {
    mutate,
    isLoading,
  };
};

//************************************************ EDIT BLOG POST ***************************************

export const useEditBlog = () => {
  const dispatch = useDispatch()
  const editBlog = async (updateData) => {
  const {data} = await axios.put(`${MAIN_END_POINT}/updateBlog`, updateData);
  return data
  };

  const { mutate } = useMutation(editBlog, {
    onMutate: (data) => {
      const objData = {};
      data.forEach((item, key) => {
        objData[key] = item;
      });

      dispatch({ type: "setUpdatingBlog",payload: { updatingBlog: true } });
    },

    onSettled: (data) => {
     
      dispatch({ type: "setUpdatingBlog",payload: { updatingBlog: false } });
      dispatch({ type: "AFTER_UPDATE_POST", payload: false });
    },
    onError: () => {
      dispatch({ type: "AFTER_UPDATE_POST", payload: true });
    },
  });

  return { mutate };
};
