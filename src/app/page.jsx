'use client';

import { v4 as uuidv4 } from 'uuid';

import ProjectSideBar from '../components/ProjectSidebar';
import NewProject from '../components/NewProject';
import NoProjectSelected from '../components/NoProjectSelected';
import SelectedProject from '../components/SelectedProject';
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

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
        selectedProjectId: undefined,
      };
    });
  }

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (!selectedProject) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectsState.selectedProjectId}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}
