import { chat, connect, cover, user1, user2 } from '@/public/images'
import Image from 'next/image'

type Props = {}

const ProfileContainer = (props: Props) => {
	return (
		<div className='profile-container'>
			<Image src={cover} alt='cover' priority={true} className='cover'/>
			<div className='profile-container-inner'>
				<Image src={ user1 } alt='user' className='profile-pic'  />
				<h1>Rayan Walton</h1>
				<b>
					Web Developer at Microsoft | Former developer at DataStack and Intern
					at Oracle
				</b>
				<p>
					Sand Francisco, United States &middot; <a href='#'>Contact info</a>
				</p>
				<div className='mutual-connection'>
					<Image src={user2} alt='user' />
					<span>1 mutual connection: Orlando Diggs</span>
				</div>
				<div className='profile-btn'>
					<a href='#' className='primary-btn'>
						<Image src={connect} alt='connect' />
						Connect
					</a>
					<a href='#'>
						<Image src={chat} alt='chat' />
						Message
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProfileContainer
