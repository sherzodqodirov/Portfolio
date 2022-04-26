import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import { useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";
import Message from "./Message";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setvalue] = useState('');
    const [messages,loading]=useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const handlsendmessage = async () => {
        firestore.collection('messages').add({
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL,
            text:value,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })
        setvalue('');
    }

    if (loading){
        return <Loader/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="chatlar   mt-3">

                       <Message messages={messages} user={user}/>

                    </div>
                </div>
                <div className="input-group mt-3 mb-3">
                    <input value={value} onChange={e => setvalue(e.target.value)} type="text" className="form-control p-3"
                           placeholder="message"
                           aria-label="message" aria-describedby="button-addon2"/>
                    <button onClick={handlsendmessage} className="btn btn-outline-secondary" type="button"
                            id="button-addon2">&#x2714;
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Chat;
