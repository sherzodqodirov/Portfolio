import React from 'react';
import {Row, Spin} from "antd";

const Spiner = () => {
    return (
        <Row justify={'center'}   size="middle">
            <Spin size="large" />
        </Row>
    );
};

export default Spiner;