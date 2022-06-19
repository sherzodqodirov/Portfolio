import React, {useEffect} from 'react';
import AdminForm from "../adminform/AdminForm";
import Addlistgame from "../../components/addlistgame/Addlistgame";

const AdminPanel = () => {

    return (
        <div className='container'>
            <AdminForm/>
            <Addlistgame/>
        </div>
    );
};

export default AdminPanel;
