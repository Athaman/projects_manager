'use client';

import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, setState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setState((prevState) => ({
      ...prevState,
      tasks: [
        ...prevState.tasks,
        {
          id: uuidv4(),
          projectId: prevState.selectedProjectId,
          text: task,
        },
      ],
    }));
  }

  function handleDeleteTask(taskId) {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  function handleStartAddProject() {
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    const newProject = {
      id: uuidv4(),
      ...projectData,
    };

    setState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      selectedProjectId: newProject.id,
    }));
  }

  function handleSelectProject(projectId) {
    setState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleDeleteProject() {
    setState((prevState) => ({
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      selectedProjectId: undefined,
    }));
  }

  const selectedProject = state.projects.find((project) => project.id === state.selectedProjectId);

  return (
    <AppContext.Provider
      value={{
        state,
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
