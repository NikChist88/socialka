import React, { useRef } from 'react'
import './Posts.scss'
import { RiPencilLine } from 'react-icons/ri'
import { Post } from './post/Post'

import { PostType } from '../../../../redux/typesStore'
// import { ProfilePropsType } from '../Profile'

export type PostsPropsTypes = {
  posts: PostType[]
  newPost: string | undefined
  addPost: () => void
  updatePost: (newPost: string | undefined) => void
}

export const Posts: React.FC<PostsPropsTypes> = (props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  // Change text in textarea
  const onChangeHandler = () => {
    const newPost: string | undefined = textAreaRef.current?.value
    props.updatePost(newPost)
  }

  // Add post
  const onClickHandler = () => {
    props.addPost()
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
          ref={textAreaRef}
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
