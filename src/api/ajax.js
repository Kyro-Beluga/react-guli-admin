/***
 * 能发送异步ajax请求的函数模块
 * 封装axios
 * 函数的返回值：Promise对象
 *
 * 1. 优化：统一处理异常
 *      在外层包一个自己创建的Promise对象
 *      在请求出错时，不去reject(error)，而是显示错误提示
 * 2. 优化2：异步得到的不是response，而是response.data
 *      在请求成功resolve时：resolve(response.data)
 */
import axios from "axios";
import {message} from "antd";

export default function ajax(url, data = {}, method = 'GET') {

    return new Promise((resolve, reject) => {
        let promise
        // 1. 执行异步ajax请求
        if (method === 'GET') {
            promise =  axios.get(url, {params: data})
        } else  {
            promise =  axios.post(url, data)
        }
        promise.then(response => {  // 2. 如果成功了，调用resolve(value)
            resolve(response.data)
        }).catch(error => { // 3. 如果失败了，此处不调用reject(reason)，而是提示异常信息
            message.error('请求出错了: ' + error.message)
        })
    })

}
