import React, { useState } from "react"
import { Modal, Input } from 'antd'


function Review(props) {
    const { isReviewModalVisible, setIsReviewModalVisible, restaurantId, handleReview } = props
    const [data, setData] = useState({
        restaurantId: restaurantId,
        text: ''
    })

    const handleOk = () => {
        setIsReviewModalVisible(false)
        handleReview(data)
        setData({
            restaurantId: restaurantId,
            text: ''
        })
    }

    const handleCancel = () => {
        setIsReviewModalVisible(false);
        setData({
            restaurantId: restaurantId,
            text: ''
        })
    }

    const onChange = (e) => {
        setData({ ...data, text: e.target.value})
    }

    return (
        <Modal title="Добавление отзыва" visible={isReviewModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input value={data.text} onChange={onChange}/>
        </Modal>
    )
}

export default Review