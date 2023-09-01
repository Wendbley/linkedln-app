import { Experiences } from '@/app/constants'
import Image from 'next/image'
import ProfileRow from './ProfileRow'
import { rightArrow } from '@/public/images'
import React from 'react'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const ProfileDesc = (props: Props) => {
	return (
		<div className='profile-description'>
			<h2>Experience</h2>
			{Experiences.map((exp, index) => (
				<ProfileRow key={index} {...exp} />
			))}
			<hr />
			<a href='#' className='experience-link'>
				SHOW ALL 7 experiences <Image src={rightArrow} alt='right-arrow-' />
			</a>
		</div>
	)
}

export default ProfileDesc
