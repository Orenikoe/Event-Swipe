import React from 'react'
import DropdownList from '../DropdownList/DropdownList'
import {FilteringOptions} from '../../data/app-data'
import './FilteringBar.css'


const FilteringBar = () => {
    console.log(FilteringOptions);
  return (
    <div className='filtering-bar'>
    {FilteringOptions && FilteringOptions.map((item) => {
     return <DropdownList data={item}/>
    })}
    
    </div>
  )
}

export default FilteringBar