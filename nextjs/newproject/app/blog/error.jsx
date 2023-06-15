'use client'

export default function ErrorPage({error}) {
    return <h1>{error.message}!</h1>
};
