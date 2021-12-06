import React, { useState } from "react"
import { Modal, Input, TimePicker, DatePicker } from 'antd'
import moment from 'moment';


function Order(props){
    const { setIsModalVisible, isModalVisible, orderData, handleOrder } = props
    const [data, setData] = useState({
        date: '',
        time: '',
        guest: 0,
        restaurantId: orderData.id
    })
    const handleOk = () => {
        setIsModalVisible(false)
        let order = {
            ...data,
            orderdate: `${data.date} ${data.time}`,
            restaurantId: orderData.id
        }
        delete order.date
        delete order.time
        handleOrder(order)
    }

    const format = 'HH:mm';
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    const onChangeDate = (date, dateString) => {
        setData({ ...data, date: dateString})
    }
    const onChangeTime = (date, dateString) => {
        setData({ ...data, time: dateString })
    }
    const onChange = (e) => {
        setData({ ...data, guest: e.target.value })
    }
    return (
        <Modal title="Бронирование" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>{orderData.location}</p>
            <DatePicker onChange={onChangeDate} />
            <TimePicker defaultValue={moment('12:08', format)} format={format} onChange={onChangeTime}/>
            <Input onChange={onChange}/>
        </Modal>
    )
}

export default Order