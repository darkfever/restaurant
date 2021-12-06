import React from "react"
import '../own-order/ownOrder.css'
import { Table, Space, Button } from 'antd';

function OwnOrder(props) {
    const { orders, deleteOrder } = props

    let today = Date.now()

    const columns = [
        {
            title: 'Ресторан',
            dataIndex: 'name',
            key: 'name',
            render: text => <>{text}</>,
        },
        {
            title: 'Кол-во гостей',
            dataIndex: 'guest',
            key: 'guest',
        },
        {
            title: 'На дату',
            dataIndex: 'orderdate',
            key: 'orderdate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    {record.isDisabled ? <Button type="danger" disabled >Отменить</Button> : <Button onClick={() => deleteOrder(record.id)} type="danger">Отменить</Button>}
                </Space>
            ),
        },
    ]

    let data = orders.map((item, i) => {
        return (
            {
                key: i,
                name: item.Restaurant.name,
                guest: item.guest,
                orderdate: item.orderdate,
                isDisabled: (Date.parse(item.orderdate) - today) > 10800000 ? false : true,
                id: item.id
            }
        )
    })

    return (
        <div className="own-orders">
            <div className="own-orders-title">Мои заказы</div>
            <Table className="order-table" columns={columns} dataSource={data} pagination={false} bordered />
        </div>
    )
}

export default OwnOrder