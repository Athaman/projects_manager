'use client';

import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    const newProject = {
      id: uuidv4(),
      ...projectData,
    };

    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      selectedProjectId: newProject.id,
    }));
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      selectedProjectId: undefined,
    }));
  }

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  return (
    <ProjectsContext.Provider
      value={{
        projectsState,
        selectedProject,
        handleStartAddProject,
        handleCancelAddProject,
        handleAddProject,
        handleSelectProject,
        handleDeleteProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
