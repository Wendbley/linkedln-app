import React from 'react'

type Props = {}

const ProfileLanguage = (props: Props) => {
	return (
		<div className='profile-description'>
			<h2>Languages</h2>
			<a href='#' className='language-btn'>
				English
			</a>
			<a href='#' className='language-btn'>
				Swahili
			</a>
			<a href='#' className='language-btn'>
				French
			</a>
			<a href='#' className='language-btn'>
				Lingala
			</a>
		</div>
	)
}

export default ProfileLanguage
