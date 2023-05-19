import React, {useState} from 'react';
import {Button, Col, Modal, notification, Row, Space} from "antd";
import {
    Form,
    Input,
    Select,
} from 'antd';
import {useDispatch} from "react-redux";
import {GetAdminthunk, PostAdminthunk} from "../redux/adminSlice";
import axios from "axios";
import {adminbaseurl} from "../service/apiurl";

const CreateAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };
const dispatch=useDispatch()
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        if (type=="success"){
            api[type]({
                message: 'Success',
                description:
                    'Create admin',
            });
        }
        if (type=="error"){
            api[type]({
                message: 'Error ',
                description:
                    'Error create admin',
            });
        }


    };

    const onFinish = (values) => {
        axios.post(adminbaseurl,values)
            .then(res=>{
                 if(res.status===201){
                     openNotificationWithIcon('success')
                     dispatch(GetAdminthunk())
                 }
            })
            .catch(e=> {
                console.log(e.response.data)
                openNotificationWithIcon('error')
            })
        form.resetFields();
    };

    return (
        <Space style={{margin: "10px 0"}}>
            {contextHolder}
            <Button type="primary" onClick={showModal}>
                Create Admin
            </Button>


            <Modal
                title="Create Admin"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                >
                    <Form.Item
                        name="first_name"
                        label="First name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        label="Last name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="role"
                        label="Role" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <Select>
                            <Select.Option value="admin">Admin</Select.Option>
                            <Select.Option value="operator">Operator</Select.Option>
                            <Select.Option value="manager">Manager</Select.Option>
                            <Select.Option value="tutor">Tutor</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="" justify="end">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Space>

    );
};

export default CreateAdmin;