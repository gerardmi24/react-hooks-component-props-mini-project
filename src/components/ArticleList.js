import React from 'react'
import Article from "./Article"

export default function ArticleList({posts}) {
    // console.log(posts)

    const postObj = posts.map((post) => <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />)

    return (
        <main>
            {postObj}
        </main>
    )
}
