import React, { useEffect, useState } from "react"
import { Button, Table, Spin } from 'antd'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as reviewActions from '../../../actions/reviewActions'

function Review(props) {
    const [reviews, setReviews] = useState([])
    const { reviewActions } = props

    const onDelete = (id) => {
        reviewActions.deleteReview(id)
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
            title: 'createdAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'text',
            dataIndex: 'text',
            key: 'text',
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
        reviewActions.fetchReviews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setReviews(props.reviews)
    }, [props.reviews])

    const data = reviews.map((item, i) => {
        return {
            id: item.id,
            username: item.User?.name,
            restaurant: item.Restaurant?.name,
            createdAt: item.createdAt.substring(0, 10),
            text: item.text,
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
    reviews: state.reviewReducer.reviews,
    isLoading: state.reviewReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
    reviewActions: bindActionCreators(reviewActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)