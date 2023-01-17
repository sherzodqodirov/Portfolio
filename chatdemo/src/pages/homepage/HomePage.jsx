import React from 'react';
import './homepage.scss';
import Boxleft from "../../components/boxleft/Boxleft";
import Boxright from "../../components/boxright/Boxright";

const HomePage = () => {
    return (
        <div className='corebox '>
            <div className="linksurl">
                <p className='my-2'><span className='text-secondary'>Home page /</span> Chat</p>
            </div>
            <div className="boxlar">
                <div className="row m-0">
                    <div className="col-3 p-0">
                        <Boxleft/>
                    </div>
                    <div className="col-9 ps-4 pe-0">
                        <Boxright/>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomePage;