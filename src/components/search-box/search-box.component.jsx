import React from 'react'
import '../search-box/searchbox.style.css'

export const SearchBox=({placeholder, handleChange})=>(
  <div className="search-container">
  <input className="search"
    placeholder={placeholder}
    type="search"
    onChange={handleChange}
  /></div>

)
