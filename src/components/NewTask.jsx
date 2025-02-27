import { useState, useContext } from 'react';
import { TasksContext } from '@/context/TasksContext';

export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState('');
  const { handleAddTask } = useContext(TasksContext);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    // TODO, add user feedback?
    if (!enteredTask) return;
    handleAddTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm text-stone-700 bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
        autoFocus
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick} disabled={!enteredTask}>
        Add Task
      </button>
    </div>
  );
}
