import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, message} from 'antd';
import './login.less';
import logo from './images/logo.svg'
import {reqLogin} from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
/**
 登录的路由组件
 */
function Login() {
    let navigate = useNavigate();
    let formRef = React.createRef()

    let onFinish = (values) => {
        const {username, password} = values
        // reqLogin(username, password).then(response => {
        //     console.log('成功~', response.data)
        // }).catch(error => {
        //     console.log('失败!!!', error)
        // })
        const response = reqLogin(username, password)
        if (response.code === '100') {
            /**
             * 跳转到管理界面：
             *  （不需要回退，所以使用replace，否则使用push）
             */
            const user = response.data
            memoryUtils.user = user
            storageUtils.saveUser(user) // localstorage存储
            navigate("/home", {replace: true})

        } else {
            message.error('登录失败')
        }
    }

    /***
     * 对密码进行自定义验证
     */
    let validatePwd = (rule, value, callback) => {
        console.log('validatePwd() ', rule, value)
        /***
         * 要求：
         * 1）必须输入
         * 2）必须大于4位
         * 3）必须小于12位
         * 4）必须是英文、数字或下划线组成
         */
        if (!value) {
            callback('密码必须输入')
        } else if (value.length < 4) {
            callback('密码长度不能小于4')
        } else if (value.length > 12) {
            callback('密码长度不能大于12')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文、数字或下划线组成')
        } else {
            callback()
        }
    }

    useEffect(()=>{
        // 如果用户已经登录，则直接跳转到Admin
        const user = memoryUtils.user
        if (user && user.id) {
            navigate('/')
        }
    }, []);

    return (
        <div className="login" style={{height: document.documentElement.clientHeight}}>
            <header className="login-header">
                <img src={logo} alt="logo"/>
                <h1>React项目：后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>
                <div>
                    <Form
                        ref={formRef}
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            /**
                             * 声明式验证
                             */
                            rules={[
                                {
                                    required: true, whitespace: true,
                                    message: 'Please input your Username!',
                                },
                                {min: 4, message: '用户名至少4个字符'},
                                {max: 12, message: '用户名最多12个字符'},
                                {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或者下划线组成'},
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator: validatePwd
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>
    );

}

export default Login


/***
 * async和await
 * 1. 作用？
 *    简化promise对象的使用：不再使用then()来指定成功/失败的回调函数
 *    以同步编码（没有回调函数了）方式实现异步流程。
 * 2. 哪里写await？
 *    在返回promise的表达式左侧写 await：不想要promise, 想要promise异步执行的成功的value数据
 * 3. 哪里写async?
 *    await所在函数（最近的）定义的左侧
 */

