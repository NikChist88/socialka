import React, { ChangeEventHandler, useState } from 'react'
import './Posts.scss'
import { RiPencilLine } from 'react-icons/ri'
import { Post } from './post/Post'
import { PostType } from './post/Post'

export type PostsTypes = {
  posts: PostType[]
  addPost: (post: string) => void
}

export const Posts: React.FC<PostsTypes> = ({ posts, addPost }) => {
  const [post, setPost] = useState<string>('')

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value)
  }

  const onClickHandler = () => {
    addPost(post)
    setPost('')
  }

  return (
    <div className="Posts">
      <h3 className="Posts__title">
        <RiPencilLine className="Posts__icon" size={'20px'} />
        Create post
      </h3>
      <div className="Posts__form">
        <textarea className="Posts__field" value={post} onChange={changeHandler}></textarea>
        <button className="Posts__btn" onClick={onClickHandler}>
          Add Post
        </button>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          post={post.post}
          date={post.date}
          avatar={post.avatar}
        />
      ))}
    </div>
  )
}
