import { render, screen, fireEvent } from '@testing-library/react';
import NewProject from './NewProject';
import Modal from './Modal';

beforeEach(() => {
  // Add a main element to the document body
  const main = document.createElement('main');
  document.body.appendChild(main);
  render(<Modal />);
});

afterEach(() => {
  // Clean up the main element after each test
  document.body.innerHTML = '';
});

describe('NewProject Component', () => {
  test('renders input fields and buttons', () => {
    render(<NewProject onAdd={() => {}} onCancel={() => {}} />);
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Due Date')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  // test('calls onAdd with valid input', () => {
  //   const handleAdd = jest.fn();
  //   render(<NewProject onAdd={handleAdd} onCancel={() => {}} />);
  //   fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Project' } });
  //   fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Project Description' } });
  //   fireEvent.change(screen.getByLabelText('Due Date'), { target: { value: '2023-12-31' } });
  //   fireEvent.click(screen.getByText('Save'));
  //   expect(handleAdd).toHaveBeenCalledWith({
  //     title: 'New Project',
  //     description: 'Project Description',
  //     dueDate: '2023-12-31',
  //   });
  // });

  // test('shows modal with invalid input', () => {
  //   render(<NewProject onAdd={() => {}} onCancel={() => {}} />);
  //   fireEvent.click(screen.getByText('Save'));
  //   expect(screen.getByText('Invalid Input')).toBeInTheDocument();
  // });
});
