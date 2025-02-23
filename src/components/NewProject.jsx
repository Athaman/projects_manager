import { useRef } from 'react';
import Input from './Input';

export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    onAdd({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounderd-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={titleRef} />
        <Input label="Description" ref={descriptionRef} textarea />
        <Input label="Due Date" ref={dueDateRef} type="date" />
      </div>
    </div>
  );
}
