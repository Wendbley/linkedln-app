import { event, photo, user4, video } from '@/public/images'
import Image from 'next/image'

type Props = {}

const CreatePost = (props: Props) => {
  return (
    <div className="create-post">
    <div className="create-post-input">
        <Image src={user4} alt="user"/>
        <textarea rows={ 2 } placeholder="Write a post"></textarea>
    </div>

    <div className="create-post-links">
        <li><Image src={ photo } alt="photo"/>Photo</li>
        <li><Image src={ video } alt="video"/>Video</li>
        <li><Image src={ event } alt="Event"/>Event</li>
        <li>Post</li>
    </div>
</div>
  )
}

export default CreatePost