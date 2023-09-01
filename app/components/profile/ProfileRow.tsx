import { StaticImageData } from 'next/image'
import Image from 'next/image'

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
				<b>{company}</b>
				<b>{elapsed}</b>
				<p>{text}</p>
				<hr />
			</div>
		</div>
	)
}

export default ProfileRow
