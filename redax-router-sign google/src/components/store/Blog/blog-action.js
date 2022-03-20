import { toast } from 'react-toastify';
import { blogActions } from './blog-slice';
export const addnewblog=(newBlog)=>{
   return async (dispatch)=>{
    try {
        dispatch(blogActions.loadingStart());
        const response = await fetch(
          "https://blog-app-f6511-default-rtdb.firebaseio.com/blogs.json",
          {
            method: "POST",
            body: JSON.stringify({
              blog: newBlog,
            }),
          }
        );
        if(!response.ok){
          throw new Error("ERROR"+response.status)
        }
        toast.success("Join 👌")
      } catch (error) {
        toast.error(error.message);
      }
      dispatch(blogActions.loadingFinish());
   }
}


export const fetchBlogs=()=>{
   return async (dispatch)=>{
    try {
        dispatch(blogActions.loadingStart());
        const response = await fetch(
          "https://blog-app-f6511-default-rtdb.firebaseio.com/blogs.json");

        if(!response.ok){
          throw new Error("ERROR"+response.status)
        }
        const data= await response.json()
        const blogsArray=[];
         for(const val in data){
           blogsArray.unshift(data[val]);
         }
         dispatch(blogActions.fetchBlogs(blogsArray))
      } catch (error) {
        toast.error(error.message);
      }
      dispatch(blogActions.loadingFinish());
   }
}