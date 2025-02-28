import { render, screen, fireEvent } from '@testing-library/react';
import Tasks from './Tasks';
import { TasksContext } from '../context/TasksContext';

describe('Tasks Component', () => {
  const tasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
  ];

  test('renders tasks and delete button', () => {
    const handleDeleteTask = jest.fn();
    render(
      <TasksContext.Provider value={{ tasks, handleDeleteTask }}>
        <Tasks />
      </TasksContext.Provider>
    );
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getAllByText('Delete')).toHaveLength(2);
  });

  test('calls handleDeleteTask when delete button is clicked', () => {
    const handleDeleteTask = jest.fn();
    render(
      <TasksContext.Provider value={{ tasks, handleDeleteTask }}>
        <Tasks />
      </TasksContext.Provider>
    );
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(handleDeleteTask).toHaveBeenCalledWith(1);
  });
});
