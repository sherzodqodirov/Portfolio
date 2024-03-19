async function getDataById(id: string) {
    try {
        const res = await fetch(`https://jsonplaceholder.org/users/${id}`, {cache: "no-cache"});
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const resJson = await res.json();
        return resJson
    } catch (err) {
        console.log(err)
    }
}

export default async function UserInfoServer({params}: { params: { id: string } }) {

    const data = await getDataById(params.id);
    console.log(data)
    return (
        <div>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </div>
    );
};
