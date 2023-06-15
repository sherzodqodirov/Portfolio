import React from 'react';
import { Button, Result } from 'antd';
const ErrorComponent = () => {
    return (
        <div>
            <Result
                status="500"
                title=""
                subTitle="Sorry, something went wrong."
            />
        </div>
    );
};

export default ErrorComponent;
