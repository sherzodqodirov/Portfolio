import Image from 'next/image'

export default function Home(props) {
    console.log(props)
  return (
   <main>
     home page
   </main>
  )
}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}