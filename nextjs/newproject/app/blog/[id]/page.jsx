import Link from "next/link";

async function getData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
        next:{
            revalidate: true,
        }
    }
    );
    if (!response.ok) throw new Error("Error fetch JSON data from JSON placeholder")
  
    return response.json();
  }

export default async function Post ({params:{id}}) {
    const post =await getData(id)
  return (
  <>
    <h1>{post.title}</h1>
   <Link href='blog'><button>back</button></Link>
    <p>{post.body}</p>
  </>
  )
}
