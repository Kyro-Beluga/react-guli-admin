/**
 * 包含n个接口请求函数的模块
 * 每个函数返回promise
 */
import ajax from "./ajax";

const BASE = 'http://localhost:5000'

// 登录
export function reqLogin(username, password) {
    return {'code': '100', 'data': {
        'id': '001',
            'username': 'admin',
            'password': '9999999',
            'create_time': '2022-05-26',
            'role': {
            'menus': []
            }
        }}
}
// export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')




