import React, {useState} from "react";
import styled from "styled-components";
import {Table, Icon, Button, Modal} from "antd";
import {AiFillEdit, AiFillDelete, AiFillFolderAdd} from "react-icons/ai";
import CreateCategoryBtn from "../components/CreateCategoryBtn";
import {useGetAllCategoryQuery} from "../redux/Api";
import ErrorComponent from "../components/ErrorComponent";
import {useNavigate} from "react-router-dom";

const HomePage = () => {

const navigate=useNavigate()
    const {data, isLoading, isError} = useGetAllCategoryQuery()

    const columns = [
        {
            title: "Category Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Product",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <BtnBox>
                    <BtnTable type="#00FF00" onClick={()=>clickAddproducts(record.id)}>
                        <AiFillFolderAdd/> Add product
                    </BtnTable>
                    <BtnTable type="#0000FF">
                        <AiFillEdit/> Edit
                    </BtnTable>
                    <BtnTable type="#FF0000">
                        <AiFillDelete/> Delete
                    </BtnTable>
                </BtnBox>
            ),
        },
    ];

    const clickAddproducts=(id)=>{
        navigate(`products/${id}`);
    }

    return (
        <Container>

            {isError ? <ErrorComponent/> : (
                <>
                    <CreateCategoryBtn/>
                    <Table loading={isLoading} columns={columns} dataSource={data?.data} />
                </>
            )}
        </Container>
    );
};

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const BtnTable = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  gap: 5px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.type};
  cursor: pointer;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;
const Container = styled.div``;
export default HomePage;
