import { render, screen, fireEvent } from '@testing-library/react';
import { TasksContext } from '@/context/TasksContext';
import NewTask from './NewTask';

describe('NewTask Component', () => {
  describe('Initial Render', () => {
    test('renders input and button', () => {
      render(
        <TasksContext.Provider value={{ handleAddTask: jest.fn() }}>
          <NewTask />
        </TasksContext.Provider>
      );

      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /add task/i });

      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    test('input is focused on render', () => {
      render(
        <TasksContext.Provider value={{ handleAddTask: jest.fn() }}>
          <NewTask />
        </TasksContext.Provider>
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveFocus();
    });
  });

  describe('Input Behavior', () => {
    test('updates input value on change', () => {
      render(
        <TasksContext.Provider value={{ handleAddTask: jest.fn() }}>
          <NewTask />
        </TasksContext.Provider>
      );

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'New Task' } });

      expect(input.value).toBe('New Task');
    });
  });

  describe('Button Behavior', () => {
    test('button is disabled when input is empty', () => {
      render(
        <TasksContext.Provider value={{ handleAddTask: jest.fn() }}>
          <NewTask />
        </TasksContext.Provider>
      );

      const button = screen.getByRole('button', { name: /add task/i });
      expect(button).toBeDisabled();
    });

    test('button is enabled when input is not empty', () => {
      render(
        <TasksContext.Provider value={{ handleAddTask: jest.fn() }}>
          <NewTask />
        </TasksContext.Provider>
      );

      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /add task/i });

      fireEvent.change(input, { target: { value: 'New Task' } });
      expect(button).not.toBeDisabled();
    });

    test('calls handleAddTask and clears input on button click', () => {
      const handleAddTask = jest.fn();
      render(
        <TasksContext.Provider value={{ handleAddTask }}>
          <NewTask />
        </TasksContext.Provider>
      );

      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /add task/i });

      fireEvent.change(input, { target: { value: 'New Task' } });
      fireEvent.click(button);

      expect(handleAddTask).toHaveBeenCalledWith('New Task');
      expect(input.value).toBe('');
    });

    test('does not call handleAddTask when input is empty', () => {
      const handleAddTask = jest.fn();
      render(
        <TasksContext.Provider value={{ handleAddTask }}>
          <NewTask />
        </TasksContext.Provider>
      );

      const button = screen.getByRole('button', { name: /add task/i });
      fireEvent.click(button);

      expect(handleAddTask).not.toHaveBeenCalled();
    });
  });
});
