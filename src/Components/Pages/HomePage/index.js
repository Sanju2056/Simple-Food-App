import React from 'react'
import Header from '../Header'
import './index.css'
import data from '../../constants/data'
import { useState ,useEffect} from 'react'

const HomePage = () => {

    const ItemCard = ({ item, index }) => {
        return (
            <div className='hp-item-box'>
                <div className='hp-image-css'>
                    <img src={item.image} alt='food images' />
                </div>
                <div className='hp-text-box'>
                    <p className='hp-title'>{item.name}</p>
                    <p className='hp-dis'>{item.text}</p>
                    <button className='hp-price-button'>{item.price}</button>
                </div>
            </div>
        )
    }

    // Use State
    const filterData = (filter) =>{
        const dinnerData = filter == "All" ? data : data.filter((item) => {
            return item.type === filter
        })
        setMenuList(dinnerData)
    }

    // USE EFFECT
     const [active, setActive] = useState("All")
     useEffect(() => {
        const dinnerData = active == "All" ? data : data.filter((item) => {
            return item.type === active
        })
        setMenuList(dinnerData)
     }, [active])
     
     const searchFilter = () =>{
        const searchedFilterData = data.filter((searchedData,index) => {
            return(searchedData.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        })
        setMenuList(searchedFilterData)
     } 

    const [searchValue, setSearchValue] = useState()
    const [menuList ,setMenuList] = useState(data)
    const Category = ['All','Breakfast','Lunch','Dinner']

    return (
        <div className='hp-container'>
            <Header setSearchValue={setSearchValue}  onFilter={searchFilter}/>
            <div className='hp-box'>
                <div className='hp-box-box'>
                    <div className='hp-box-2'>
                    {
                        Category.map((items,index) =>{

                            //Use State
                           return <button className='button-1' onClick={()=> filterData(items)}>

                           {/* UseEffect
                           return <button className='button-1' onClick={()=> setActive(items)}> */}
                            {items}
                           </button>
                        })
                    }
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