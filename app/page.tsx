import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'

/**
 * 
 * @returns 
 */
export default function Home() {
	return (
		<main className='container'>
			<LeftSidebar />
			<MainContent />
			<RightSidebar />
		</main>
	)
}
