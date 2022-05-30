import React, {useEffect} from 'react';
import {useNavigate, Outlet} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils";

import {Layout} from 'antd';
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

const {Footer, Sider, Content} = Layout;

/**
 主页的路由组件
 */
function Admin() {
    let navigate = useNavigate();
    let user = memoryUtils.user

    useEffect(() => {
        if (!user || !user.id) {
            navigate('/login')
        }
    }, []);

    return (
        <Layout style={{height: '1000px'}}>
            <Sider>
                <LeftNav/>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content style={{margin: 20, backgroundColor: '#fff'}}>
                    {/* 指定路由组件的呈现位置 */}
                    <Outlet />
                </Content>
                <Footer style={{textAlign: 'center', color: '#cccccc'}}>
                    推荐使用谷歌浏览器，可以获得更佳的页面操作体验
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Admin


