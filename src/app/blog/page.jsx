import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const page = async () => {
    const posts = await getAllPosts();
    return (
      <div>
      
        <section className="container mx-auto">
            

            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    posts.map((post)=>{
                        return (


                            
                                <Link href={`/blog/${post.id}`}>
                                <div key={post.id} className="card w-48  bg-gray-300 rounded-lg p-2 m-2">
                                <figure><img className="rounded-lg" src={post.img} alt="car!" /></figure>
                                    <h1 className="title">{post.title}</h1>
                                    <h1 className="title">{post.short}</h1>

                                </div>
                                </Link>


                            
                            
                        
                            
                        )
                    })
                }
            </div>
        </section>
        
      </div>
    );
  };
  
  export default page;