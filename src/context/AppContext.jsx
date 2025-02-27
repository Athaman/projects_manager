'use client';

import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const [tasksState, setTasksState] = useState([]);

  function handleAddTask(task) {
    setTasksState((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
        projectId: projectsState.selectedProjectId,
        text: task,
      },
    ]);
  }

  function handleDeleteTask(taskId) {
    setTasksState((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

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
    <AppContext.Provider
      value={{
        projectsState,
        tasksState,
        selectedProject,
        handleAddTask,
        handleDeleteTask,
        handleStartAddProject,
        handleCancelAddProject,
        handleAddProject,
        handleSelectProject,
        handleDeleteProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
