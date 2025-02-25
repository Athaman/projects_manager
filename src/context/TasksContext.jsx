'use client';

import { createContext, useState, useContext, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProjectsContext } from './ProjectsContext';

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const { projectsState } = useContext(ProjectsContext);
  const [tasksState, setTasksState] = useState([]);

  function handleAddTask(task) {
    const projectId = projectsState.selectedProjectId;
    setTasksState((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
        projectId,
        text: task,
      },
    ]);
  }

  function handleDeleteTask(taskId) {
    setTasksState((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  const projectTasks = useMemo(
    () => tasksState.filter((task) => task.projectId === projectsState.selectedProjectId),
    [tasksState, projectsState.selectedProjectId]
  );

  return (
    <TasksContext.Provider value={{ tasks: projectTasks, handleAddTask, handleDeleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}
