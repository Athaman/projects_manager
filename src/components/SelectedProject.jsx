import { useContext } from 'react';
import Tasks from './Tasks';
import { AppContext } from '../context/AppContext';

export default function SelectedProject({ project, onDelete }) {
  const { state } = useContext(AppContext);

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const projectTasks = state.tasks.filter((task) => task.projectId === state.selectedProjectId);

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks tasks={projectTasks} />
    </div>
  );
}
