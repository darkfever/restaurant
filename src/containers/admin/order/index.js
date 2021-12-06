import React, { useEffect, useState } from "react"
import { Button, Table, Spin } from 'antd'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as orderActions from '../../../actions/orderActions'

function Order(props) {
    const [orders, setOrders] = useState([])
    const { orderActions } = props
    
    const onDelete = (id) => {
        orderActions.deleteOrder(id)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Restaurant',
            dataIndex: 'restaurant',
            key: 'restaurant',
        },
        {
            title: 'Guests',
            dataIndex: 'guest',
            key: 'guest',
        },
        {
            title: 'orderdate',
            dataIndex: 'orderdate',
            key: 'orderdate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button onClick={() => onDelete(record.id)} type="danger">Delete</Button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        orderActions.fetchOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setOrders(props.orders)
    }, [props.orders])

    const data = orders.map((item, i) => {
        return {
            id: item.id,
            username: item.User.name,
            restaurant: item.Restaurant.name,
            guest: item.guest,
            orderdate: item.orderdate,
            key: i
        }
    })

    return (
        <Spin spinning={props.isLoading} size="large">
            <Table dataSource={data} columns={columns} />
        </Spin>
    )
}
const mapStateToProps = state => ({
    orders: state.orderReducer.orders,
    isLoading: state.orderReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
    orderActions: bindActionCreators(orderActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Order)