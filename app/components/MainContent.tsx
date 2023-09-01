import Image from 'next/image'
import CreatePost from './CreatePost'
import { downArrow } from '@/public/images'
import { Posts } from '../constants'
import Post from './Post'

type Props = {}

const MainContent = (props: Props) => {
	return (
		<section className='main-content'>
			<CreatePost />
			<div className='sort-by'>
				<hr />
				<p>
					Sort by:{' '}
					<span>
						top <Image src={downArrow} alt='down-arrow' />
					</span>
				</p>
			</div>
			{ Posts.map((post, index) => (
				<Post
					key={index}
					user={post.user}
					name={post.name}
					title={post.title}
					elapsed={post.elapsed}
					text={post.text}
					postImage={post.postImage}
				/>
			))}
		</section>
	)
}

export default MainContent