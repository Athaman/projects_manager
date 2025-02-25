import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState('');
  const { handleAddTask } = useContext(AppContext);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
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
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
}
