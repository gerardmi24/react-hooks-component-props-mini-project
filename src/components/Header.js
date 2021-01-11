import React from 'react'
import blogData from '../data/blog'

function Header( {name} ) {
    // console.log(blogData)
    return (
        <header>
            <h1> {name} </h1>
        </header>
    )
}

export default Header;