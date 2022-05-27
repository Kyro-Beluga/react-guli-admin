import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils";

/**
 主页的路由组件
 */
function Admin() {
    let navigate = useNavigate();
    let user = memoryUtils.user

    useEffect(()=>{
        if (!user || !user.id) {
            navigate('/login')
        }
    }, []);

    return (
        <div>
            Hello, {user.username}
        </div>
    );
}
export default Admin


