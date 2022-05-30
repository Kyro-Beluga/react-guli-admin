/*
    商品分类路由
 */
import React from 'react';
import {
    Card,
    Table,
    Button
} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import LinkButton from "../../components/link-button";


const dataSource = [
    {
        "parentId": '0',
        "_id": "1",
        "name": '家用电器',
        "__v": 0
    },
    {
        "parentId": '0',
        "_id": "2",
        "name": '电脑',
        "__v": 0
    },
    {
        "parentId": '0',
        "_id": "3",
        "name": '图书',
        "__v": 0
    },
    {
        "parentId": '0',
        "_id": "4",
        "name": '服装',
        "__v": 0
    },
    {
        "parentId": '0',
        "_id": "5",
        "name": '视频',
        "__v": 0
    },
    {
        "parentId": '0',
        "_id": "6",
        "name": '玩具',
        "__v": 0
    },

];

const columns = [
    {
        title: '分类名称',
        dataIndex: 'name', // 指定显示数据对应的属性名
    },
    {
        title: '操作',
        width: 300,
        render: () => ( // 返回需要显示的界面标签
            <span>
                <LinkButton>修改分类</LinkButton>
                <LinkButton>查看子分类</LinkButton>
            </span>
        ),
    }
];

export default function Category(props) {
    const title = "一级分类列表"
    const extra = (
        <Button>
            <PlusOutlined/>
            添加
        </Button>
    )

    return (
        <Card
            title={title}
            extra={extra}
            style={{
                width: "100%"
            }}
        >
            <Table dataSource={dataSource} columns={columns} bordered rowKey='_id'/>
        </Card>
    );
}


