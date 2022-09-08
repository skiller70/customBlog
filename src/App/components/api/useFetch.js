import { useQuery } from "react-query";

import { END_POINT } from "./ApiEndpoint";

// export function useFetch(props) {
//   const fetchOwner = async (queryFunctionContext) => {
//     const queryKey = queryFunctionContext.queryKey;

//     const { data } = await END_POINT.get(`/owner?name=${queryKey[1]}`);
//     return data;
//   };

//   const { data, refetch } = useQuery(["ggggggg", props], fetchOwner, {
//     enabled: false,
//   });

//   return {
//     data,
//     refetch,
//   };
// }

export function useBlogs(props) {
  const fetchBlog = async (queryFunctionContext) => {
    const queryKey = queryFunctionContext.queryKey;

    const { data } = await END_POINT.get(`/read?_limit=3&page=${queryKey[1]}`);

    return data;
  };

  const { data, refetch, isLoading, isPreviousData } = useQuery(
    ["blogs", props],
    fetchBlog,
    { keepPreviousData: true }
  );

  return {
    data,
    refetch,
    isLoading,
    isPreviousData,
  };
}
