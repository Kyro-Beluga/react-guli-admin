import React from 'react';
import {NavLink, useNavigate, useLocation} from "react-router-dom";
import './index.less'
import logo from '../../assets/images/logo.svg'

import {Menu} from 'antd';
import menuList from '../../config/menuConfig'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

let path
let openKeys = ''

function resolveItems(menuList) {
    return menuList.map(item => {
        if (!item.children) {
            return getItem(item.title, item.key, item.icon)
        } else {
            let cItem = item.children.find(cItem => cItem.key === path)
            if (cItem) {
                openKeys = item.key
            }
            return getItem(item.title, item.key, item.icon, resolveItems(item.children))
        }
    })
}

/*
    Admin 左侧导航组件
 */
function LeftNav() {
    let navigate = useNavigate()
    let location = useLocation()

    path = location.pathname.substr(1)
    let menuNodes = resolveItems(menuList)

    function onClick(item) {
        navigate(item.key)
    }

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
                    // defaultSelectedKeys={[location.pathname.split('\/')[1]]}
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKeys]}
                    mode="inline"
                    theme="dark"
                    items={menuNodes}
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default LeftNav;
