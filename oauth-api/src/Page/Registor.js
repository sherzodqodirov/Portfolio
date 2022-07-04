import React from "react";
import axios from "axios";
import {Form, Input, Button, message} from 'antd';
import 'antd/dist/antd.css';

const Register = ({setregist}) => {

    const [form] = Form.useForm()


    const onFinish = (values) => {

        let data = new FormData();
        for (const [key, value] of Object.entries(values)) {
            data.append(key, value);
        }

        axios({
            method: "post",
            url: ` https://${values._subdomain}.ox-sys.com/security/auth_check`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: data,
        })
            .then((res) => {

                localStorage.setItem('token', res.data.token);
                form.resetFields();
                setregist(true)
            })
            .catch((err) => {
                message.error("not entred login" + err.message);
            });
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="container text-center">
            <Form
                form={form}
                style={{width: "600px", margin: "80px auto"}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="_username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label="Company"
                    name="_subdomain"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your compony!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
