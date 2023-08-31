'use client'

import {
	home,
	jobs,
	logo,
	message,
	network,
	notification,
	search,
	user1,
} from '@/public/images'
import Image from 'next/image'
import { useState } from 'react'
import './index.css'
import DropDownMenu from './DropDownMenu'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
    const [openMenu, setOpenMenu] = useState(false)
    console.log(openMenu)

	return (
		<nav className='navbar'>
			<div className='nav-left'>
				<Link href='/' className='logo'>
					<Image src={logo} alt='logo' priority={true} />
				</Link>
				<div className='search-box'>
					<Image src={search} alt='' />
					<input type='text' placeholder='Search' />
				</div>
			</div>

			<div className='nav-center'>
				<ul className='nav-links'>
					<li className='nav-link'>
						<a href='#' className='active-link'>
							<Image src={home} alt='home' />
							<span>Home</span>
						</a>
					</li>
					<li className='nav-link'>
						<a href='#'>
							<Image src={network} alt='home' />
							<span>My Networks</span>
						</a>
					</li>
					<li className='nav-link'>
						<a href='#'>
							<Image src={jobs} alt='Jobs' />
							<span>Jobs</span>
						</a>
					</li>
					<li className='nav-link'>
						<a href='#'>
							<Image src={message} alt='Message' />
							<span>Messages</span>
						</a>
					</li>
					<li className='nav-link'>
						<a href='#'>
							<Image src={notification} alt='Notifications' />
							<span>Notifications</span>
						</a>
					</li>
				</ul>
			</div>

			<div className='nav-right'>
				<div className='online'>
					<Image src={user1} alt='user' className='nav-profile-img' onClick={() => setOpenMenu(!openMenu)}/>
				</div>
			</div>

            <DropDownMenu openMenu={openMenu}/>
		</nav>
	)
}

export default Navbar
