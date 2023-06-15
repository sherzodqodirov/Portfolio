import React, {useEffect, useState} from 'react';
import styled   from "styled-components";
import { Form, Input, Button, notification  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useLoginAdminMutation} from "../redux/Api";
import {useNavigate} from "react-router-dom";


const LoginPage = ({setUser}) => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [loginAdmin, {data,isError, isLoading}]=useLoginAdminMutation()
    const navigate=useNavigate()
    const openNotificationWithIcon = (type) => {
        if (type ==="success"){
            api[type]({
                message: 'Success',
            });
        }
        if (type ==="error"){
            api[type]({
                message: 'Error',
            });
        }

    };

    const onFinish = async values => {
        try{
            await loginAdmin(values).unwrap();
            openNotificationWithIcon('success')

        }
        catch(e){
            console.log(e)
            openNotificationWithIcon('error')
            setUser(false)
        }

        form.resetFields();

    };

    useEffect(() => {
        if (data){
            localStorage.setItem('user',data.token);
            setUser(true)
            navigate('/')
        }
        localStorage.getItem('user') && setUser(true)
    }, [data]);

    

    return (
        <Container>
            {contextHolder}
            <ContainerBox>
                <Title>For Administrator</Title>
            <Form
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        autoComplete="on"
                    />
                </Form.Item>
                <Form.Item style={{display:"flex",justifyContent:"center"}}>
                    <Button  type="primary"
                             loading={isLoading}
                             htmlType="submit"
                             className={`login-form-button ${isLoading ? "disabled" :""}`}
                             >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
            </ContainerBox>
        </Container>

    );
};

const Title=styled.div`
display:flex;
  justify-content: center;
  font-size:18px;
  font-weight:bold;
  margin-bottom: 20px;
`
const ContainerBox=styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  border-radius: 5px;
  border: 1px solid silver;
  padding: 30px 15px 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Container=styled.div`
width:100%;
  .disabled{
    cursor: not-allowed;
  }
`
export default LoginPage;
