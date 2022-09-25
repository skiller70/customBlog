import { useState } from "react";
import { useSelector } from "react-redux";
import { useEditBlog } from "../api/blogPostOperation";

// CUSTOM FORM HOOKS *******************************************************************************************
export const useEditBlogForm = (initialFValue) => {
  const userId = useSelector((state) => state.userProfile.PROFILE.id);
  const POPUP = useSelector((state) => state.popup);

  const [canSubmit, setCanSubmit] = useState(false);

  const { mutate } = useEditBlog();

  const onValid = () => {
    setCanSubmit(true);
  };
  const onInvalid = () => {
    setCanSubmit(false);
  };
  const onValidSubmit = (model) => {
    //REDUX DISPATCH

    const { blogPost, title, content, subject } = model;

    const formData = new FormData();
    formData.append("postId",POPUP.EDIT_BLOG_ID);
    formData.append("author", userId);
    formData.append("blogPost", blogPost);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("subject", subject);

    mutate(formData);
  };

  return { onValid, onInvalid, onValidSubmit, canSubmit };
};
