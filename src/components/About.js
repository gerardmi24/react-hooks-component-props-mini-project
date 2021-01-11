import React from 'react'

function About( {image = "https://via.placeholder.com/215", about} ) {
    console.log(image)
    return (
        <aside>
            <img alt="blog logo" src={image}/>
            <p> {about} </p>
        </aside>
    )
}

export default About;