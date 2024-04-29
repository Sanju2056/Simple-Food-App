import React from 'react'
import './index.css'
import data from '../../constants/data'
import { useState, useEffect, useContext, createContext } from 'react'
import { userContext } from '../../../Provider'
import Header from '../Header'
import { FaSearch } from "react-icons/fa";


const HomePage = () => {
    const { cost, setCost } = useContext(userContext)
    const [searchValue, setSearchValue] = useState()
    const [menuList, setMenuList] = useState(data)
    const Category = ['All', 'Breakfast', 'Lunch', 'Dinner']

    const ItemCard = ({ item, index }) => {
        return (
            <div className='hp-item-box'>
                <div className='hp-image-css'>
                    <img src={item.image} alt='food images' />
                </div>
                <div className='hp-text-box'>
                    <p className='hp-title'>{item.name}</p>
                    <p className='hp-dis'>{item.text}</p>
                    <div className='hp-po-buttons'>
                        <button className='hp-price-button'>Rs.{item.price}</button>
                        <button className='hp-order-button' onClick={() => orderFood(item)}>Order</button>
                    </div>
                </div>
            </div>
        )
    }

    // ORDER FOOD
    const [orderedFood, setOrderedFood] = useState([]);
    // const [cost, setCost] = useState(0)
    const orderFood = (item) => {

        // NOT DO
        // const selectedFood = [
        //     ...orderedFood, item
        // ]

        setOrderedFood((prev) => {
            return [
                ...prev, item
            ]
        });

        // TOTAL AMOUNT OF ORDER 


    }
    useEffect(() => {
        var totalSum = 0
        orderedFood.map((opItem) => {
            console.log(opItem.price)
            totalSum += opItem.price
            console.log(cost)
        })
        setCost(totalSum);
    }, [orderedFood])
    console.log(orderedFood)

    const updateOrderList = () => {
        setMenuList(orderedFood)
    }
    // Use State
    const filterData = (filter) => {
        const dinnerData = filter === "All" ? data : data.filter((item) => {
            return item.type === filter
        })
        setMenuList(dinnerData)
    }

    // USE EFFECT
    const [active, setActive] = useState("All")
    useEffect(() => {
        const dinnerData = active === "All" ? data : data.filter((item) => {
            return item.type === active
        })
        setMenuList(dinnerData)
    }, [active])

    const searchFilter = () => {
        const searchedFilterData = data.filter((searchedData, index) => {
            console.log(searchedData.name)
            console.log(searchValue)
            return (searchedData.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        })
        console.log(searchedFilterData)
        setMenuList(searchedFilterData)
    }
  
    const KeyPress = (event) => {
        if (event.key === 'Enter') {
            searchFilter();
        }
    };

    return (

        <div className='hp-container'>
            <div className='header-container'>
                <div className='hc-box-1'>
                    <p className='h-text'>N<span className='span-tag'>b</span>ot C<span className='span-tag'>a</span>fe</p>
                    <div className='search-bar'>
                        <input
                            className='sb-input'
                            placeholder='Search for food...'
                            onChange={(e) => { setSearchValue(e.target.value) }}
                            onKeyPress={KeyPress}
                            
                        />
                        <FaSearch className='sb-icon'  />
                    </div>
                    <p className='total-text'>Total : {cost}</p>
                </div>

            </div>
            <div className='hp-box'>
                <div className='hp-box-box'>
                    <div className='hp-box-2'>
                        {
                            Category.map((items, index) => {

                                //Use State
                                return <button className='button-1' onClick={() => filterData(items)}>

                                    {/* UseEffect
                           return <button className='button-1' onClick={()=> setActive(items)}> */}
                                    {items}
                                </button>
                            })
                        }
                        <button className='button-1' onClick={updateOrderList}>Order-List</button>
                        {/* <Link to = "/orderList">
                        </Link> */}
                    </div>
                    <div className='item-container'>
                        {
                            menuList.map((item, index) => {
                                return <ItemCard item={item} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage