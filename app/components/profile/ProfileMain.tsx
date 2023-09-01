import { miLogo, user5 } from '@/public/images'
import ProfileContainer from './ProfileContainer'
import ProfileDesc from './ProfileDesc'
import ProfileEdu from './ProfileEdu'
import ProfileLanguage from './ProfileLanguage'
import ProfileSkills from './ProfileSkills'

type Props = {}

const ProfileMain = (props: Props) => {
	return (
		<div className='profile-main'>
			<ProfileContainer />

			<div className='profile-description'>
				<h2>About</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
					eius nobis porro sunt repellat asperiores quas velit, voluptates vero
					consequuntur a hic soluta necessitatibus voluptas non blanditiis
					dignissimos at. Voluptas.
				</p>
				<a href='#' className='see-more-link'>
					See More
				</a>
			</div>

			<ProfileDesc />
			<ProfileEdu />

			<ProfileSkills />

			<ProfileLanguage />
		</div>
	)
}

export default ProfileMain
