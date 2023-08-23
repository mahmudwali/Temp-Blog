import getSinglePost from "@/lib/getSinglePost";
import Link from "next/link";

const page = async ({params}) => {
  const id = params.id;
  const post = await getSinglePost(id);
    return (
      <div>
      
        <div className="container mx-auto">
        
                <figure><img src={post.postDetails.img} alt="fdh" /></figure>
                <h1 className="p-4">{post.postDetails.title}</h1>
                <div className="p-4">{post.postDetails.content}</div>
            
        </div>
        
      </div>
    );
  };
  
  export default page;