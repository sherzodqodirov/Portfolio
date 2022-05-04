import React from "react";
import "antd/dist/antd.css";
import {Layout, Menu} from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined
} from "@ant-design/icons";

const {Header, Content, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}

const items = [
    getItem("Option 1", "1", <PieChartOutlined/>),
    getItem("Option 2", "2", <DesktopOutlined/>),
    getItem("Files", "9", <FileOutlined/>)
];

class Coreinform extends React.Component {
    state = {
        collapsed: false
    };
    onCollapse = (collapsed) => {
        this.setState({
            collapsed
        });
    };

    render() {
        const {collapsed} = this.state;
        return (
            <Layout
                style={{
                    minHeight: "100vh"
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <Menu
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Content
                        style={{
                            margin: "0"
                        }}
                    >
                        <div className="site-layout-background">Bill is a cat.</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default () => <Coreinform/>;
