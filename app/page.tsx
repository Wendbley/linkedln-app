import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";


export default function Home() {
  return (
    <main className="container">
      <LeftSidebar />
      <MainContent/>
      <RightSidebar/>
    </main>
  )
}
