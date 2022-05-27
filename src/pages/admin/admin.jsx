import React, {useEffect} from 'react';
import {useNavigate, Route, Routes} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils";

import Home from "../home/home";
import Category from "../category/category";
import Product from "../product/product";
import User from "../user/user";
import Role from "../role/role";
import Bar from "../charts/bar"
import Line from "../charts/line"
import Pie from "../charts/pie"

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
                <Content style={{backgroundColor: '#fff'}}>
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/category' element={<Category/>}/>
                        <Route path='/product' element={<Product/>}/>
                        <Route path='/role' element={<Role/>}/>
                        <Route path='/user' element={<User/>}/>
                        <Route path='/charts/bar' element={<Bar/>}/>
                        <Route path='/charts/line' element={<Line/>}/>
                        <Route path='/charts/pie' element={<Pie/>}/>
                    </Routes>
                </Content>
                <Footer style={{textAlign: 'center', color: '#cccccc'}}>
                    推荐使用谷歌浏览器，可以获得更佳的页面操作体验
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Admin


