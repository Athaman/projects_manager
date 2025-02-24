import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    const isValid = title.trim() && description.trim() && dueDate.trim();
    if (!isValid) {
      modalRef.current.show();
      return;
    }

    onAdd({
      title,
      description,
      dueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption={'Ok'}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please fill all the fields</p>
        <p className="text-stone-600 mb-4">It looks like you missed one of them</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
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
    </>
  );
}
