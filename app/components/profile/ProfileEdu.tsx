import { Educations } from '@/app/constants'
import React from 'react'
import ProfileRow from './ProfileRow'

type Props = {}

const ProfileEdu = (props: Props) => {
	return (
		<div className='profile-description'>
			<h2>Education</h2>
			{Educations.map((edu, index) => (
				<ProfileRow key={index} {...edu} />
			))}
		</div>
	)
}

export default ProfileEdu
