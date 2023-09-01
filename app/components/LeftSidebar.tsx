import { cover, group, hashtag, items, premium, recent, user1 } from '@/public/images'
import Image from 'next/image'

type Props = {}

const LeftSidebar = (props: Props) => {
  return (
    <div className="left-sidebar">
            <div className="sidebar-profile-box">
                <Image src={ cover } alt="cover" className='cover'/>
                <div className="sidebar-profile-info">
                    <Image src={ user1 } alt="user"/>
                    <h1>Ryan Walton</h1>
                    <h3>Web Developer at Microsoft</h3>
                    <ul>
                        <li>Your profile <span>52</span></li>
                        <li>Your post views <span>810</span></li>
                        <li>Your connections <span>205</span></li>
                    </ul>
                </div>

                <div className="sidebar-profile-link">
                    <a href="#"><Image src={ items } alt="items"/>My items</a>
                    <a href="#"><Image src={ premium } alt="premium"/>Try premium</a>
                </div>
            </div>

            <div className="sidebar-activity">
                <h3>RECENT</h3>
                <a href="#"><Image src={ recent } alt="recent"/>Web Development</a>
                <a href="#"><Image src={ recent } alt="recent"/>User Interface</a>
                <a href="#"><Image src={ recent } alt="recent"/>Online Learning</a>
                <a href="#"><Image src={ recent } alt="recent"/>Lean Online</a>
                <a href="#"><Image src={ recent } alt="recent"/>Code Better</a>
                <a href="#"><Image src={ recent } alt="recent"/>Group Learning</a>
                <h3>GROUPS</h3>
                <a href="#"><Image src={ group } alt="group"/>Design Group</a>
                <a href="#"><Image src={ group } alt="group"/>HTML & CSS Learners</a>
                <a href="#"><Image src={ group } alt="group"/>Python & Javascript Group</a>
                <a href="#"><Image src={ group } alt="group"/>Learn Coding Online</a>
                <h3>HASTAG</h3>
                <a href="#"><Image src={ hashtag } alt="hashtag"/>Web Development</a>
                <a href="#"><Image src={ hashtag } alt="hashtag"/>User Interface</a>
                <a href="#"><Image src={ hashtag } alt="hashtag"/>Online Learning</a>

                <div className="discover-more-link">
                    <a href="#">Discover more</a>
                </div>
            </div>
            <p id="showMoreLink">Show more <b>+</b></p>
        </div>
  )
}

export default LeftSidebar