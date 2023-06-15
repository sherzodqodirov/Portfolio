import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  if (!response.ok) throw new Error("Error fetching")

  return response.json();
}

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h3>Blog page</h3>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}> {item.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
