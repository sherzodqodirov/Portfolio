import {Button, Form, Input, Modal} from "antd";
import React, {useState} from "react";
import {IoIosCreate} from "react-icons/io";
import styled from "styled-components";
import {useAddCategoryMutation} from "../redux/Api";
import axios from "axios";

const CreateCategoryBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addCategory, {isError, isLoading}] = useAddCategoryMutation()
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = async (values) => {

        axios({
            method: 'POST',
            url:'http://161.35.220.245:8081/api/admin/category',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user')}`,
            },
            data:values
        })
            .then(res => console.log(res))
            .catch(e=>console.log(e))

    };

    return (
        <>
            <CategoryCreateBtn onClick={showModal}>
                <IoIosCreate/> Create Category
            </CategoryCreateBtn>

            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
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
                        name="name"
                        label="Category "
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item label="" justify="end">
                        <Button type="primary" htmlType="submit" loading={isLoading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
const CategoryCreateBtn = styled.button`
  display: flex;
  gap: 10px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #0000ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: silver;
    color: #fff;
  }
`;
export default CreateCategoryBtn;
