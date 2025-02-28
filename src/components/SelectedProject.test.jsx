import { render, screen, fireEvent, within } from '@testing-library/react';
import SelectedProject from './SelectedProject';
import { TasksContext } from '../context/TasksContext';

describe('SelectedProject Component', () => {
  const dueDate = new Date('2023-12-31');

  const project = {
    title: 'Test Project',
    description: 'Test Description',
    dueDate,
  };

  const tasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
  ];

  const handleDeleteTask = jest.fn();
  const handleDelete = jest.fn();

  test('renders project details and delete button', () => {
    render(
      <TasksContext.Provider value={{ tasks, handleDeleteTask }}>
        <SelectedProject project={project} onDelete={handleDelete} />
      </TasksContext.Provider>
    );
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('December 31, 2023')).toBeInTheDocument();
    const selectedProject = screen.getByText('Test Project').closest('div');
    const deleteButton = within(selectedProject).getByRole('button', { name: 'Delete' });
    expect(deleteButton).toBeInTheDocument();
  });

  test('calls onDelete when delete button is clicked', () => {
    const handleDelete = jest.fn();
    render(
      <TasksContext.Provider value={{ tasks, handleDeleteTask }}>
        <SelectedProject project={project} onDelete={handleDelete} />
      </TasksContext.Provider>
    );
    const selectedProject = screen.getByText('Test Project').closest('div');
    const deleteButton = within(selectedProject).getByRole('button', { name: 'Delete' });

    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
