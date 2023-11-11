import React, { useRef } from 'react'
import './Posts.scss'
import { RiPencilLine } from 'react-icons/ri'
import { Post } from './post/Post'
import { PostType } from './post/Post'

export type PostsTypes = {
  posts: PostType[]
  newPost: string
  addPost: (post: string | undefined) => void
  updatePost: (newPost: string | undefined) => void
}

export const Posts: React.FC<PostsTypes> = (props) => {
  const post = useRef<HTMLTextAreaElement>(null)

  // Change text in textarea
  const onChangeHandler = () => {
    const newPost = post.current?.value
    props.updatePost(newPost)
  }

  // Add post on click button
  const onClickHandler = () => {
    const newPost = post.current?.value
    props.addPost(newPost)
  }

  return (
    <div className="Posts">
      <h3 className="Posts__title">
        <RiPencilLine className="Posts__icon" size={'20px'} />
        Create post
      </h3>
      <div className="Posts__form">
        <textarea
          className="Posts__field"
          ref={post}
          value={props.newPost}
          onChange={onChangeHandler}
        />
        <button className="Posts__btn" onClick={onClickHandler}>
          Add Post
        </button>
      </div>
      {props.posts.map((post) => (
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
