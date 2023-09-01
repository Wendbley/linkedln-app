import { StaticImageData } from 'next/image'
import Image from 'next/image'
import parse from 'html-react-parser'

type Props = {
	title: string
	company: string
	elapsed: string
	text?: string
	firm: StaticImageData
}

const ProfileRow = ({ title, company, elapsed, text, firm }: Props) => {
	return (
		<div className='profile-desc-row'>
			<Image src={firm} alt='firm' />
			<div>
				<h3>{title}</h3>
				<b>{ parse(company)}</b>
				<b>{elapsed}</b>
				<p>{ text }</p>
				{title !== 'Web Developer' && <hr />}
			</div>
		</div>
	)
}

export default ProfileRow
