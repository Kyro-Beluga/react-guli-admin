import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.less'
import logo from '../../assets/images/logo.svg'

import {
    AppstoreOutlined,
    BarsOutlined,
    UserOutlined,
    PieChartOutlined,
    HomeOutlined,
    SafetyCertificateOutlined,
    ToolOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

/*
    Admin 左侧导航组件
 */
class LeftNav extends Component {



    render() {
        return (
            <div>
                <div className="left-nav">
                    <NavLink to='/' className="left-nav-header">
                        <img src={logo} alt="logo"/>
                        <h1>后台管理系统</h1>
                    </NavLink>
                </div>

                <div
                    style={{
                        width: '100%',
                    }}
                >
                    <Menu
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1">
                            <NavLink to='home'>
                                <HomeOutlined />
                                <span>首页</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.SubMenu
                            title={
                                <>
                                    <AppstoreOutlined/>
                                    <span>商品</span>
                                </>
                            }>
                            <Menu.Item key="2">
                                <NavLink to='category'>
                                    <BarsOutlined />
                                    <span>分类</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to='product'>
                                    <ToolOutlined />
                                    <span>商品管理</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>

                        <Menu.Item key="4">
                            <NavLink to='user'>
                                <UserOutlined />
                                <span>用户管理</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item key="5">
                            <NavLink to='role'>
                                <SafetyCertificateOutlined />
                                <span>角色管理</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.SubMenu
                            title={
                                <>
                                    <AreaChartOutlined/>
                                    <span>图形图标</span>
                                </>
                            }>
                            <Menu.Item key="6">
                                <NavLink to='charts/bar'>
                                    <BarChartOutlined />
                                    <span>柱形图</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <NavLink to='charts/line'>
                                    <LineChartOutlined />
                                    <span>折线图</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <NavLink to='charts/pie'>
                                    <PieChartOutlined />
                                    <span>饼图</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>

                </div>
            </div>


        );
    }
}

export default LeftNav;
