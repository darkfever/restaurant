import { Button, Select } from "antd";
import React, { useState } from "react";
import "../search/search.css"

function Search(props) {
    const { Option } = Select
    const { onChoose, onClick } = props
    const [kitchen, setKitchen] = useState([])
    const onSelect = value => {
        setKitchen(value)
    }
    const search = () => {
        if(kitchen.length === 0){
            onChoose("all")
            return
        }
        onChoose(kitchen)
    }
    const kitchen_data = props.kitchen_data.map((item, i) => <Option key={i} value={item.id}>{item.name}</Option>)
    return (
        <div className="search">
            <div className="filter">
                <div className="filter-block">
                    <div className="search-filters">
                        <Select className="filter-select-kitchen" onSelect={onSelect} defaultValue="all" placeholder="Кухня">{kitchen_data}<Option value="all">все</Option></Select>
                        <Select className="filter-select-kitchen" placeholder="Средний чек">
                            <Option value="all">до 2500</Option>
                            <Option value="all">2500-5000</Option>
                            <Option value="all">5000-10000</Option>
                            <Option value="all">свыше 10000</Option>
                        </Select>
                    </div>
                    <div>
                        <Button onClick={search} className="filter-button">Показать</Button>
                    </div>
                </div>
            </div>
            <div onClick={onClick} className="sort-button">По рейтингу</div>
        </div>
    )
}

export default Search