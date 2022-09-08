import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {usePostBlogs} from "../api/blogPostOperation"

// CUSTOM FORM HOOKS *******************************************************************************************
export const useBlogForm = (initialFValue) => {
  const userId = useSelector(state=>state.userProfile.PROFILE.id)
  const dispatch = useDispatch()
  const [canSubmit, setCanSubmit] = useState(false);
  const {mutate,isLoading,isSuccess}= usePostBlogs()
 




  const onValid = () => {
    setCanSubmit(true);
  };
  const onInvalid = () => {
    setCanSubmit(false);
  };
  const onValidSubmit = (model) => {
    //REDUX DISPATCH
    
const {blogPost,title,content,subject} = model

const formData = new FormData()
formData.append('author',userId)
formData.append('blogPost',blogPost)
formData.append('title',title)
formData.append('content',content)
formData.append('subject',subject)


  
    mutate(formData)

  
 
  };

  return { onValid, onInvalid, onValidSubmit, canSubmit };
};
