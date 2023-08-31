import {
	clap,
	comment,
	downArrow,
	like,
	love,
	send,
	share,
	thumbsup,
} from '@/public/images'
import Image, { StaticImageData } from 'next/image'

type Props = {
	user: StaticImageData
	name: string
	title: string
	elapsed: string
	text: string
	postImage: StaticImageData
}

const Post = ({ user, name, title, elapsed, text, postImage }: Props) => {
	return (
		<div className='post'>
			<div className='post-author'>
				<Image src={user} alt='user' />
				<div>
					<h1>{name}</h1>
					<small>{title}</small>
					<small>{elapsed}</small>
				</div>
			</div>
			<p>{text}</p>
			<Image src={postImage} alt='post-image' className='post-image'/>

			<div className='post-stats'>
				<div>
					<Image src={thumbsup} alt='thumbsup' />
					<Image src={love} alt='love' />
					<Image src={clap} alt='clap' />
					<span className='liked-users'>Abinav Mishrsa and 75 others</span>
				</div>
				<div>
					<span>22 comments &middot; 40 shares</span>
				</div>
			</div>

			<div className='post-activity'>
				<div>
					<Image src={user} alt='user' className='post-activity-user-icon' />
					<Image
						src={downArrow}
						alt='arrow'
						className='post-activity-arrow-icon'
					/>
				</div>
				<div className='post-activity-link'>
					<Image src={comment} alt='comment' />
					<span>Comment</span>
				</div>
				<div className='post-activity-link'>
					<Image src={like} alt='like' />
					<span>Like</span>
				</div>
				<div className='post-activity-link'>
					<Image src={share} alt='share' />
					<span>Share</span>
				</div>
				<div className='post-activity-link'>
					<Image src={send} alt='send' />
					<span>Send</span>
				</div>
			</div>
		</div>
	)
}

export default Post
