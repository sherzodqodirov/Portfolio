import React, {useEffect} from 'react'
import {Button, Col, Divider, notification, Row, Table} from "antd";
import CreateClient from "../components/CreateClient";
import {useDispatch, useSelector} from "react-redux";
import {GetClientthunk} from "../redux/clientSlice";
import Spiner from "../components/Spiner";
import axios from "axios";
import {clientbaseurl} from "../service/apiurl";
import EditClient from "../components/EditClient";

const ClientPage = () => {
    const dispatch = useDispatch()
    const {data, isloading, iserror} = useSelector(state => state.clientdata)
    const [api, contextHolder] = notification.useNotification();


    useEffect(() => {
        dispatch(GetClientthunk())
    }, [])

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


    const clickDelete=(id)=>{
        console.log(id)
        axios.delete(clientbaseurl+id)
            .then(res=>{
                if(res.status===200){
                    openNotificationWithIcon('success')
                    dispatch(GetClientthunk())
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
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
 {
      title: "Course",
      dataIndex: "course",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
          <Row gutter={20}>
              <EditClient record={record}/>
              <Col><Button type="primary" danger onClick={()=>clickDelete(record.id)}>delete</Button></Col>
          </Row>
      ),
    },
  ];



  return (
      <>
        <Divider>Client data</Divider>
          <CreateClient/>
          {contextHolder}
          {isloading ? <Spiner/>:(
              iserror ? "Error":(
                  <Table columns={columns} dataSource={data} bordered size="smally"/>
              )
          )}
      </>
  )
}

export default ClientPage