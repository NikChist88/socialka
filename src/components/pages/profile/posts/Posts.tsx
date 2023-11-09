import './Posts.scss'
import { RiPencilLine } from 'react-icons/ri'
import { Post } from './post/Post'
import { PostType } from './post/Post'

export type PostsTypes = {
  posts: PostType[]
}

export const Posts: React.FC<PostsTypes> = ({ posts }) => {
  return (
    <div className="Posts">
      <h3 className="Posts__title">
        <RiPencilLine className="Posts__icon" size={'20px'} />
        Create post
      </h3>
      <form className="Posts__form" action="#">
        <textarea className="Posts__field"></textarea>
        <button className="Posts__btn" type="submit">
          Post
        </button>
      </form>
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
