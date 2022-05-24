import React, {Component} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './login.less';
import logo from './images/logo.svg'

/**
 登录的路由组件
 */
export default class Login extends Component {
    formRef = React.createRef()
    onFinish = (values) => {
        console.log('Received values of form: ', values);

        const form = this.formRef.current
        console.log('username: ', form.getFieldValue('username'))
        console.log('password: ', form.getFieldValue('password'))
    };

    /***
     * 对密码进行自定义验证
     */
    validatePwd = (rule, value, callback) => {
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

    render() {
        return (
            <div className="login" style={{ height: document.documentElement.clientHeight }}>
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <div>
                        <Form
                            ref={this.formRef}
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
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
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        validator: this.validatePwd
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
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
}

