import React from 'react'
import ProfileMain from '../components/profile/ProfileMain'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import './profile.css'
import Footer from '../components/profile/Footer'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const page = (props: Props) => {
	return (
		<>
			<div className='container'>
				<ProfileMain />
				<ProfileSidebar />
			</div>
			<Footer />
		</>
	)
}

export default page
