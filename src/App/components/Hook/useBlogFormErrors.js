const title = {
    minLength: "Title must contain",

};
const subject = {
    
    minLength: "Subject is required",
   
  };
  const content = {
   
    minLength: "Please enter content",
  };

function useBlogFormErrors(props) {
  return { title, subject, content };
}

export default useBlogFormErrors;
