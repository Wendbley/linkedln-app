import { logo } from '@/public/images'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
	return (
		<div className='profile-footer'>
			<div className='sidebar-useful-links'>
				<a href='#'>About</a>
				<a href='#'>Accessibility</a>
				<a href='#'>Help Center</a>
				<a href='#'>Privacy Policy</a>
				<a href='#'>SAdvertising</a>
				<a href='#'>Get the App</a>
				<a href='#'>More</a>

				<div className='copyright-msg'>
					<Image src={logo} alt='logo' />
					<p>Lindedup © 2023. All right Reserved</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
