import { Persons } from '@/app/constants'
import { miLogo, user5 } from '@/public/images'
import Image from 'next/image'
import PeopleRow from './PeopleRow'

type Props = {}

const ProfileSidebar = (props: Props) => {
  return (
    <div className='profile-sidebar'>
    <div className="sidebar-ads">
            <small>Ad  &middot; &middot; &middot;</small>
            <p>Master the 2 principles of Web Desing</p>
            <div>
                <Image src={ user5 } alt="user"/>
                <Image src={ miLogo } alt="mi-logo"/>
            </div>
            <b>Brand and Demand in Siaomi</b>
            <a href="#" className="ad-link">Learn More</a>
        </div>

        <div className="sidebar-people">
            <h3>People you may know</h3>
            { Persons.map((person, index) => (
                <PeopleRow key={index} {...person} />
            ))}
        </div>
</div>
  )
}

export default ProfileSidebar