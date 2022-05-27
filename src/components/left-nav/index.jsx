import React, {Component} from 'react';
import {Link} from "react-router-dom";
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
                    <Link to='/' className="left-nav-header">
                        <img src={logo} alt="logo"/>
                        <h1>后台管理系统</h1>
                    </Link>
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
                            <Link to='./home'>
                                <HomeOutlined />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>

                        <Menu.SubMenu
                            title={
                                <>
                                    <AppstoreOutlined/>
                                    <span>商品</span>
                                </>
                            }>
                            <Menu.Item key="2">
                                <Link to='./category'>
                                    <BarsOutlined />
                                    <span>分类</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='./product'>
                                    <ToolOutlined />
                                    <span>商品管理</span>
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>

                        <Menu.Item key="4">
                            <Link to='./user'>
                                <UserOutlined />
                                <span>用户管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="5">
                            <Link to='./role'>
                                <SafetyCertificateOutlined />
                                <span>角色管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.SubMenu
                            title={
                                <>
                                    <AreaChartOutlined/>
                                    <span>图形图标</span>
                                </>
                            }>
                            <Menu.Item key="6">
                                <Link to='./bar'>
                                    <BarChartOutlined />
                                    <span>柱形图</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to='./line'>
                                    <LineChartOutlined />
                                    <span>折线图</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to='./pie'>
                                    <PieChartOutlined />
                                    <span>饼图</span>
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>

                </div>
            </div>


        );
    }
}

export default LeftNav;
