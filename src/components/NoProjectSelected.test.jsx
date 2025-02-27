import { render, screen, fireEvent } from '@testing-library/react';
import NoProjectSelected from './NoProjectSelected';

describe('NoProjectSelected Component', () => {
  test('renders message and button', () => {
    render(<NoProjectSelected onStartAddProject={() => {}} />);
    expect(screen.getByText('No Project Selected')).toBeInTheDocument();
    expect(screen.getByText('Create new project')).toBeInTheDocument();
  });

  test('calls onStartAddProject when button is clicked', () => {
    const handleStartAddProject = jest.fn();
    render(<NoProjectSelected onStartAddProject={handleStartAddProject} />);
    fireEvent.click(screen.getByText('Create new project'));
    expect(handleStartAddProject).toHaveBeenCalledTimes(1);
  });
});
