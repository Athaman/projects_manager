'use client';

import { v4 as uuidv4 } from 'uuid';

import ProjectSideBar from '../components/ProjectSidebar';
import NewProject from '../components/NewProject';
import NoProjectSelected from '../components/NoProjectSelected';
import { useState } from 'react';
export default function Home() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      id: uuidv4(),
      ...projectData,
    };

    setProjectsState((prevState) => {
      return {
        projects: [...prevState.projects, newProject],
        selectedProjectId: newProject.id,
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}
