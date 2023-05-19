import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, Col, Form, Input, InputNumber, Modal, notification, Select} from "antd";
import axios from "axios";
import {adminbaseurl, clientbaseurl} from "../service/apiurl";
import {GetAdminthunk} from "../redux/adminSlice";
import {GetClientthunk} from "../redux/clientSlice";

const EditClient = ({record}) => {
    const dispatch=useDispatch()
    const [form]=Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId,setEditId]=useState("");
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        if (type=="success"){
            api[type]({
                message: 'Success',
                description:
                    'Edit client',
            });
        }
        if (type=="error"){
            api[type]({
                message: 'Error ',
                description:
                    'Error edit client',
            });
        }


    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const clickEdit=(data)=>{
        setIsModalOpen(true)
        setEditId(data.id);
        form.setFieldsValue(data)
    }
    const onFinish = (values) => {
        axios.put(clientbaseurl+editId,values)
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
        form.resetFields();
    };


    return (
        <>
            <Col> <Button type="primary" onClick={()=>clickEdit(record)}>edit</Button></Col>
            {contextHolder}
            <Modal title="Edit Client" open={isModalOpen}  footer={null} onCancel={handleCancel}>
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
                </Form>
            </Modal>

        </>
    );
};

export default EditClient;