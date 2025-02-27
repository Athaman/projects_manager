import { useContext } from 'react';
import NewTask from './NewTask';
import { TasksContext } from '../context/TasksContext';

export default function Tasks() {
  const { tasks, handleDeleteTask } = useContext(TasksContext);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between py-2 border-b-2 border-stone-300">
              <p className="text-stone-700">{task.text}</p>
              <button className="text-stone-700 hover:text-red-500" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
