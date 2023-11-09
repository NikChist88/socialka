import './Posts.scss'
import { RiPencilLine } from 'react-icons/ri'
import { Post } from './post/Post'

export const Posts: React.FC = () => {
  return (
    <div className="Posts">
      <h3 className="Posts__title">
        <RiPencilLine className='Posts__icon' size={'20px'} />
        Create post
      </h3>
      <form className='Posts__form' action="#">
        <textarea className='Posts__field'></textarea>
        <button className='Posts__btn' type='submit'>Post</button>
      </form>
      <Post />
      <Post />
      <Post />
    </div>
  )
}
