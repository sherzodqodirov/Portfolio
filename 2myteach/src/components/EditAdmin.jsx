import React, {useState} from 'react';
import {Button, Col, Form, Input, Modal, notification, Select} from "antd";
import axios from "axios";
import {adminbaseurl} from "../service/apiurl";
import {GetAdminthunk} from "../redux/adminSlice";
import {useDispatch} from "react-redux";

const EditAdmin = ({record}) => {
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
                    'Edit admin',
            });
        }
        if (type=="error"){
            api[type]({
                message: 'Error ',
                description:
                    'Error edit admin',
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
        axios.put(adminbaseurl+editId,values)
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
        form.resetFields();
    };


    return (
        <>
            <Col> <Button type="primary" onClick={()=>clickEdit(record)}>edit</Button></Col>
            {contextHolder}
            <Modal title="Edit Admin" open={isModalOpen}  footer={null} onCancel={handleCancel}>
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

        </>
    );
};

export default EditAdmin;