import React, {useEffect, useState} from "react";
import {Button, Col, Divider, Form, Input, Modal, notification, Row, Select, Table} from "antd";
import CreateAdmin from "../components/CreateAdmin";
import {useDispatch, useSelector} from "react-redux";
import {GetAdminthunk} from "../redux/adminSlice";
import Spiner from "../components/Spiner";
import axios from "axios";
import {adminbaseurl} from "../service/apiurl";
import EditAdmin from "../components/EditAdmin";

const AdminPage = () => {

    const dispatch = useDispatch()
    const {data, isloading, iserror} = useSelector(state => state.admindata);
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        if (type=="success"){
            api[type]({
                message: 'Success',
                description:
                    'Delete admin',
            });
        }
        if (type=="error"){
            api[type]({
                message: 'Error ',
                description:
                    'Error delete admin',
            });
        }


    };

    useEffect(() => {
        dispatch(GetAdminthunk())
    }, [])

        const clickDelete=(id)=>{
        console.log(id)
        axios.delete(adminbaseurl+id)
            .then(res=>{
                if(res.status===200){
                    openNotificationWithIcon('success')
                    dispatch(GetAdminthunk())
                }
            })
            .catch(e=>{
                console.log(e.response.data)
                openNotificationWithIcon('error')
            })
    }



    const columns = [
        {
            title: "First Name",
            dataIndex: "first_name",
        },
        {
            title: "Last Name",
            dataIndex: "last_name",
        },
        {
            title: "Role",
            dataIndex: "role",
        },
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (
                <Row gutter={20}>
                   <EditAdmin record={record}/>
                    <Col><Button type="primary" danger onClick={()=>clickDelete(record.id)}>delete</Button></Col>
                </Row>
            ),
        },
    ];


    return (
        <>
            <Divider>Admin data</Divider>
            <CreateAdmin/>
            {contextHolder}
            {isloading ? <Spiner/>:(
                iserror ? "Error":(
                    <Table columns={columns} dataSource={data} bordered size="small"/>
                )
            )}

        </>
    );
};

export default AdminPage;
