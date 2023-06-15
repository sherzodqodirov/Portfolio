import React from 'react';
import { Space, Spin } from 'antd';
import styled from "styled-components";
const Loading = () => {
    return (
        <Container>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </Container>
    );
};

const Container=styled.div`
margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loading;
