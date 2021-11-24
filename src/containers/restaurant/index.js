import React, { useEffect, useState } from "react"
import { Button, Table, Modal, Input, Select, Upload, message } from 'antd'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as restaurantActions from '../../actions/restaurantActions'
import * as kitchenActions from '../../actions/kitchenActions'
import "../restaurant/restaurant.css"

function Restaurant(props) {
    const { Option } = Select;
    const [search, setSearch] = useState({ query: '', page: 1})
    const [restaurant, setRestaurant] = useState({
        name: '',
        image: '',
        location: '',
        phone: '',
        amountOfPlace: '',
        averageBill: '',
        ResKitLists: [],
        rate: '' 
    })
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selected, setSelected] = useState()
    const onDelete = (record) => {
        props.restaurantActions.deleteRestaurant(record.id)
    }
    const propsUpload = {
        name: 'file',
        action: '',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                setRestaurant({...restaurant, image: info.file.originFileObj})
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                setRestaurant({ ...restaurant, image: info.file.originFileObj})
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const editModal = (record) => {
        setIsModalVisible(true)
        setRestaurant({ 
            id: record.id,
            name: record.name,
            image: record.image,
            location: record.location,
            phone: record.phone,
            amountOfPlace: record.amountOfPlace,
            averageBill: record.averageBill,
            ResKitLists: record.ResKitLists,
            rate: record.rate
        })
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
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text, data) => (
                <img className="restaurant_image" src={`http://localhost:9000/${data.image}`} alt="image" />
            ),
        },
        {
            title: 'Kitchens',
            key: 'kitchens',
            render: (text, data) => (
                <>
                    {data.ResKitLists.map((item, i) => {
                        return (
                            <div key={i}>
                                {item}<br/>
                            </div>
                        )
                    })}
                </>
            ),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'AmountOfPlace',
            dataIndex: 'amountOfPlace',
            key: 'amountOfPlace',
        },
        {
            title: 'AverageBill',
            dataIndex: 'averageBill',
            key: 'averageBill',
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button onClick={() => editModal(record)}>Edit</Button>
                    <Button onClick={() => onDelete(record)} type="danger">Delete</Button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        // props.restaurantActions.fetchRestaurants()
        props.restaurantActions.searchRestaurants(search)
        props.kitchenActions.fetchKitchens()
    }, [])

    const data = props.restaurants.map((item, i) => {
        return {
            id: item.id,
            name: item.name,
            image: item.image,
            ResKitLists: item.ResKitLists.map(item => item.Kitchen.name),
            location: item.location,
            phone: item.phone,
            amountOfPlace: item.amountOfPlace,
            averageBill: item.averageBill,
            rate: item.rate,
            key: i
        }
    })
    const handleOk = () => {
        if (restaurant.id) {
            restaurant.ResKitLists.forEach((item, index) => {
                props.kitchens.forEach(kitchen => {
                    if (kitchen.name === item) {
                        restaurant.ResKitLists.splice(index, 1, kitchen.id)
                    }
                })
            })
            console.log(restaurant.image)
            props.restaurantActions.editRestaurant(restaurant)
        } else {
            props.restaurantActions.addRestaurant(restaurant)
        }
        handleCancel()
    }

    const handleCancel = () => {
        setIsModalVisible(false)
        setRestaurant({
            name: '',
            image: '',
            location: '',
            phone: '',
            amountOfPlace: '',
            averageBill: '',
            ResKitLists: [],
            rate: ''
        })
        setSelected([])
    }

    const onChange = (e) => {
        setRestaurant({ ...restaurant, [e.target.name]: e.target.value })
    }
    
    const kitchen_data = props.kitchens.map((item, i) => <Option key={i} value={item.id}>{item.name}</Option>)

    const handleChange = value => {
        value.forEach((item, index) => {
            props.kitchens.forEach(kitchen => {
                if (kitchen.name === item) {
                    value.splice(index, 1, kitchen.id)
                }
            })
        })
        setRestaurant({ ...restaurant, ResKitLists: value })
        setSelected(value)
    }
    const onChoose = value => {
        if(value === "all"){
            props.restaurantActions.fetchRestaurants()
        } else {
            props.restaurantActions.filterRestaurants(JSON.stringify([value]))
        }
    }
    const deleteImg = () => {
        setRestaurant({...restaurant, image: ''})
    }
    const onSearchEnter = e => {
        if(e.keyCode === 13){
            const search = {
                query: e.target.value,
                page: 1
            }
            props.restaurantActions.searchRestaurants(search)
        }
        
    }
    return (
        <div>
            <div className="top">
                <Button onClick={() => setIsModalVisible(true)}>Add restaurant</Button>
                <div className="search_block">
                    <label>Search: </label>
                    <Input placeholder="search" onKeyDown={onSearchEnter} />
                </div>
                <div>
                    <label>Filter: </label>
                    <Select className="filter" onChange={onChoose}>{kitchen_data}<Option value="all">все</Option></Select>
                </div>
            </div>
            <Table dataSource={data} columns={columns} pagination={{total: Number(props.total), pageSize: 6 }} />
            <Modal title="Creating restaurant" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input className="input_restaurant" name="name" placeholder="name" value={restaurant.name} onChange={onChange} />
                <Select
                    name="kitchens"
                    mode="multiple"
                    className="input_restaurant"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="select kitchens"
                    onChange={handleChange}
                    defaultValue={selected}
                    value={restaurant.ResKitLists}
                >
                    {kitchen_data}
                </Select>
                {restaurant.image ? <><img className="restaurant_image input_restaurant" src={`http://localhost:9000/${restaurant.image}`} alt="image" />
                <Button onClick={deleteImg}>Delete</Button></> : <Upload className="input_restaurant" {...propsUpload}>
                    <Button>Click to Upload</Button>
                </Upload>}
                <Input className="input_restaurant" name="location" placeholder="location" value={restaurant.location} onChange={onChange} />
                <Input className="input_restaurant" name="phone" placeholder="phone" value={restaurant.phone} onChange={onChange} />
                <Input className="input_restaurant" name="amountOfPlace" placeholder="amountOfPlace" value={restaurant.amountOfPlace} onChange={onChange} />
                <Input className="input_restaurant" name="averageBill" placeholder="averageBill" value={restaurant.averageBill} onChange={onChange} />
                <Input className="input_restaurant" name="rate" placeholder="rate" value={restaurant.rate} onChange={onChange} />
            </Modal>
        </div>
    )
}
const mapStateToProps = state => ({
    restaurants: state.restaurantReducer.restaurants,
    total: state.restaurantReducer.total,
    kitchens: state.kitchenReducer.kitchens
})

const mapDispatchToProps = dispatch => ({
    restaurantActions: bindActionCreators(restaurantActions, dispatch),
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)