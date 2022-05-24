/***
 * 能发送异步ajax请求的函数模块
 * 封装axios
 * 函数的返回值：Promise对象
 */
import axios from "axios";
import {message} from "antd";

export default function ajax(url, data = {}, method = 'GET') {

    if (method === 'GET') {
        return axios.get(url, {params: data})
    } else  {
        return axios.post(url, data)
    }
}
