import React, { useEffect, useState } from "react"
import { Button, Table, Spin } from 'antd'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActions from '../../../actions/userActions'
import '../user/user.css'

function User(props) {
    const [users, setUsers] = useState([])
    const { userActions } = props

    const onClick = (id, action) => {
        switch (action) {
            case 'delete':
                userActions.deleteUser(id)
                break;
            case 'block':
                userActions.blockUser({ id: id, action: true })
                break;
            case 'unblock':
                userActions.blockUser({ id: id, action: false })
                break;
            default:
                break;
        }
    }

    
    useEffect(() => {
        userActions.fetchUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'createdAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (text, record) => (
                <div className="action-buttons">
                    <Button onClick={() => onClick(record.id, 'delete')} type="danger">Delete</Button>
                    {record.blocked ? <Button onClick={() => onClick(record.id, 'unblock')} className="action-button-unblock">Unblock</Button> :
                        <Button onClick={() => onClick(record.id, 'block')} className="action-button-block">Block</Button>}
                </div>
            ),
        },
    ];

    useEffect(() => {
        setUsers(props.users)
    }, [props.users])

    const data = users.map((item, i) => {
        return {
            id: item.id,
            createdAt: item.createdAt.substring(0, 10),
            email: item.email,
            name: item.name,
            blocked: item.blocked,
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
    users: state.userReducer.users,
    isLoading: state.userReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(userActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(User)