export default function Blog({ posts }) {

    return (
        <ul>
            {posts?.map((post,key) => (
                <li key={key}>{post?.title}</li>
            ))}
        </ul>
    )
}
export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json()
    console.log(posts,"getStaticPropssssss")
    return {
        props: {
            posts,
        },
    }
}


