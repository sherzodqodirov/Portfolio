"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Tuser = {
    email: string;
    phone: string;
};

function UserInfoClient() {
    const params = useParams();


    const [userInfo, setUserInfo] = useState<Tuser>({ email: '', phone: '' });

    async function getDataById(id:string | string[]) {
        try {
            const res = await fetch(`https://jsonplaceholder.org/users/${id}`, { cache: 'no-cache' });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const resJson = await res.json();
            setUserInfo(resJson);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDataById(params.id);
    }, []);

    return (
        <div>
            <h3> {userInfo.email} </h3>
            <h3> {userInfo.phone} </h3>
        </div>
    );
}

export default UserInfoClient;
