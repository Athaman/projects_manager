import ProjectSideBar from '../components/ProjectSidebar';
import NewProject from '../components/NewProject';
import NoProjectSelected from '../components/NoProjectSelected';
export default function Home() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NoProjectSelected />
    </main>
  );
}
