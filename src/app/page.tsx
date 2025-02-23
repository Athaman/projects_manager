import ProjectSideBar from '../components/ProjectSidebar';
import NewProject from '../components/NewProject';

export default function Home() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NewProject />
    </main>
  );
}
