import React from 'react'
import "./postPane.css"
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'

export default function PostPane() {
  return (
    <div className='postPainBox'>
      <AddPost/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
