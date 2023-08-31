import { display, feedback, help, logout, setting, user1 } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  openMenu: boolean
}

const DropDownMenu = ({ openMenu}: Props) => {
  return (
    <div className={`profile-dropdown-menu ${openMenu ? 'active' : ''}`}>
    <div className="profile-menu">
        <div className="user-info">
            <Image src={user1} alt="user"/>
            <div>
                <h3>Rayan Walton</h3>
                <Link href="/profile">See your profile</Link>
            </div>
        </div>
        <hr/>
        <a href="#" className="profile-menu-link">
            <Image src={feedback} alt="feedback"/>
            <p>Give Feedback</p>
            <span>{'>'}</span>
        </a>
        <a href="#" className="profile-menu-link">
            <Image src={setting} alt="setting"/>
            <p>Settings & Privacy</p>
            <span>{'>'}</span>
        </a>
        <a href="#" className="profile-menu-link">
            <Image src={help} alt=""/>
            <p>Help & Support</p>
            <span>{'>'}</span>
        </a>
        <a href="#" className="profile-menu-link">
            <Image src={display} alt="display"/>
            <p>Display & Acccessibility</p>
            <span>{'>'}</span>
        </a>
        <a href="#" className="profile-menu-link">
            <Image src={logout} alt="logout"/>
            <p>Logout</p>
            <span>{'>'}</span>
        </a>  
    </div>
  
</div>
  )
}

export default DropDownMenu