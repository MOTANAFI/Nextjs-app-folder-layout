import React, { use } from 'react'
async function getPosts(id) {
    let posts = await fetch(`https://dummyjson.com/posts/${id}`)
   return posts.json()
}

export default function page({params}) {
    let id = params.id
    let post = use(getPosts(id))
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
