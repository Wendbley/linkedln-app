import { logo, more, user1 } from '@/public/images'
import Image from 'next/image'

type Props = {}

const RightSidebar = (props: Props) => {
	return (
		<div className='right-sidebar'>
			<div className='sidebar-news'>
				<Image src={more} alt='more' className='info-icon' />
				<h3>Trending News</h3>
				<a href='#'>High demand for skilled manpower</a>
				<span>1d age &middot; 10,934 readers</span>

				<a href='#'>Career growing horizontally too</a>
				<span>19h age &middot; 1,552 readers</span>

				<a href='#'>Less work visa for US, more for UK</a>
				<span>1d age &middot; 27,290 readers</span>

				<a href='#'>More hiring = higher confidence?</a>
				<span>18h age &middot; 8,208 readers</span>

				<a href='#'>Gautam Adani is the world&apos;s third richest</a>
				<span>12h age &middot; 4,205 readers</span>

				<a href='#' className='read-more-link'>
					Read more
				</a>
			</div>

			<div className='sidebar-ads'>
				<small>Ad &middot; &middot; &middot;</small>
				<p>Master the 2 principles of Web Desing</p>
				<div>
					<Image src={user1} alt='user' />
					<Image src={logo} alt='mi-logo' />
				</div>
				<b>Brand and Demand in Siaomi</b>
				<a href='#' className='ad-link'>
					Learn More
				</a>
			</div>

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

export default RightSidebar
