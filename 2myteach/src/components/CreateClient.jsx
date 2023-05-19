import React, {useState} from 'react';
import {Button, Col, Form, Input, InputNumber, Modal, notification, Row, Select, Space} from "antd";
import axios from "axios";
import {adminbaseurl, clientbaseurl} from "../service/apiurl";
import {GetClientthunk} from "../redux/clientSlice";
import {useDispatch} from "react-redux";

const CreateClient = () => {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const dispatch=useDispatch()

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

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        axios.post(clientbaseurl,values)
            .then(res=>{
                if(res.status===201){
                    openNotificationWithIcon('success')
                    dispatch(GetClientthunk())
                }
            })
            .catch(e=> {
                console.log(e.response.data)
                openNotificationWithIcon('error')
            })
        form.resetFields();


    };

    return (
        <Space style={{ margin:"10px 0" }}>
            <Button  type="primary" onClick={showModal}>
                Create Client
            </Button>

            {contextHolder}
            <Modal title="Basic Modal" open={isModalOpen}  onCancel={handleCancel}  footer={null}>
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
                        name="age"
                        label="age"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item
                        name="course"
                        label="course" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <Select>
                            <Select.Option value="English">English</Select.Option>
                            <Select.Option value="Russian">Russian</Select.Option>
                            <Select.Option value="Uzbek"> Uzbek</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="location"
                        label="location" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <Select>
                            <Select.Option value="Xorazm">Xorazm</Select.Option>
                            <Select.Option value="Andijon">Andijon</Select.Option>
                            <Select.Option value="Toshkent">Toshkent</Select.Option>
                            <Select.Option value="Samarqand">Samarqand</Select.Option>
                            <Select.Option value="Farg'ona"> Farg'ona</Select.Option>
                            <Select.Option value="Navoiy">Navoiy </Select.Option>
                            <Select.Option value="Namangan">Namangan</Select.Option>
                            <Select.Option value="Jizzax">Jizzax </Select.Option>
                            <Select.Option value="Qashqadaryo">Qashqadaryo </Select.Option>
                            <Select.Option value="Qoraqalpogʻiston ">Qoraqalpogʻiston </Select.Option>
                            <Select.Option value="Sirdaryo ">Sirdaryo </Select.Option>
                            <Select.Option value="Surxondaryo ">Surxondaryo </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="" justify="end">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form></Modal>
        </Space>

    );
};

export default CreateClient;