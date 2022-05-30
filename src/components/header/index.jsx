/*
    Admin右侧顶部
 */
import React from 'react';
import './index.less'
import {useLocation, useNavigate} from "react-router-dom";

import {Modal} from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import LinkButton from "../link-button";
import menuList from "../../config/menuConfig";
import storageUtils from "../../utils/storageUtils";
import memoryUtils from "../../utils/memoryUtils";

const { confirm } = Modal;



function getTitle (location) {
    let path = location.pathname.substr(1)
    let title = ''
    menuList.forEach(item => {
        if (item.key === path) {
            title = item.title
        } else if (item.children) {
            let cItem = item.children.find(cItem => cItem.key === path)
            if (cItem) {
                title = cItem.title
            }
        }
    })
    return title
}

function Header() {
    let navigate = useNavigate()
    let location = useLocation()

    let title = getTitle(location)
    function logout () {
        confirm({
            title: '确定要退出登录吗?',
            icon: <ExclamationCircleOutlined />,
            content: '退出后，我们将注销信息，并回到登录界面',

            onOk() {
                console.log('OK');
                /*
                1. 删除保存的User数据
                2. 跳转到login
                 */
                storageUtils.removeUser()
                memoryUtils.user = {}
                navigate('/login', {replace: true})
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <div className="header">
            <div className="header-top">
                <span>欢迎，Admin</span>
                <LinkButton onClick={logout}>退出</LinkButton>
            </div>

            <div className="header-bottom">
                <div className="header-bottom-left">
                    {title}
                </div>

                <div className="header-bottom-right">
                    <span>2022-5-29 17:46:50</span>
                    <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="weather"/>
                    <span>晴</span>
                </div>
            </div>
        </div>
    );
}

export default Header;

