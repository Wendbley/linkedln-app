import Image, { StaticImageData } from 'next/image'

type Props = {
	user: StaticImageData
	name: string
	title: string
	link: string
}

/**
 * 
 * @param param0 
 * @returns 
 */
const PeopleRow = ({ user, name, title, link }: Props) => {
	return (
		<div className='sidebar-people-row'>
			<Image src={user} alt='user' />
			<div>
				<h2>{name}</h2>
				<p>{title}</p>
				<a href='#'>{link}</a>
			</div>
		</div>
	)
}

export default PeopleRow
