import React from 'react'

export default function Article({title, date = "January 1, 1970", preview}) {
    // console.log(post)
    return (
        <article>
            <h3> {title} </h3>
            <small> {date} </small>
            <p> {preview} </p>
        </article>
    )
}
