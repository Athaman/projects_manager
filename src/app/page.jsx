'use client';

import { useContext } from 'react';
import ProjectSideBar from '../components/ProjectSidebar';
import NewProject from '../components/NewProject';
import NoProjectSelected from '../components/NoProjectSelected';
import SelectedProject from '../components/SelectedProject';
import { AppContext } from '../context/AppContext';

export default function Home() {
  const {
    state,
    selectedProject,
    handleStartAddProject,
    handleCancelAddProject,
    handleAddProject,
    handleSelectProject,
    handleDeleteProject,
  } = useContext(AppContext);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;
  if (state.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (!selectedProject) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={state.selectedProjectId}
        projects={state.projects}
      />
      {content}
    </main>
  );
}
