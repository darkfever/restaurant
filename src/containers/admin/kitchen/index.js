import React, { useEffect, useState } from "react"
import { Button, Table, Modal, Input, Spin } from 'antd'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as kitchenActions from '../../../actions/kitchenActions'

function Kitchen(props){
    const [kitchen, setKitchen] = useState({id: '', name: ''})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const editModal = (record) => {
        setIsModalVisible(true)
        setKitchen({id: record.id, name: record.name})
    }
    const onDelete = (record) => {
        props.kitchenActions.deleteKitchen(record.id)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button onClick={() => editModal(record)}>Edit {record.name}</Button>
                    <Button onClick={() => onDelete(record)} type="danger">Delete</Button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        props.kitchenActions.fetchKitchens()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const data = props.kitchens.map((item, i) => {
        return {
            id: item.id,
            name: item.name,
            key: i
        }
    })

    const handleOk = () => {
        if(kitchen.id){
            props.kitchenActions.editKitchen(kitchen)
        } else {
            props.kitchenActions.addKitchen(kitchen)
        }
        handleCancel()
    }

    const handleCancel = () => {
        setIsModalVisible(false)
        setKitchen({id: '', name:''})
    }

    const onChange = (e) => {
        setKitchen({...kitchen, [e.target.name]: e.target.value})
    }

    return (
        <Spin spinning = { props.isLoading } size = "large">
            <Button onClick={() => setIsModalVisible(true)}>Add kitchen</Button>
            <Table dataSource={data} columns={columns} />
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input name="name" placeholder="name" value={kitchen.name} onChange={onChange}/>
            </Modal>
        </Spin>
    )
}
const mapStateToProps = state => ({
    kitchens: state.kitchenReducer.kitchens,
    isLoading: state.kitchenReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Kitchen)