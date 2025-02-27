import { render, screen, fireEvent } from '@testing-library/react';
import ProjectSidebar from './ProjectSidebar';

describe('ProjectSidebar Component', () => {
  const projects = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
  ];

  test('renders project list and add project button', () => {
    render(<ProjectSidebar projects={projects} onStartAddProject={() => {}} onSelectProject={() => {}} />);
    expect(screen.getByText('Your Projects')).toBeInTheDocument();
    expect(screen.getByText('+ Add Project')).toBeInTheDocument();
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });

  test('calls onStartAddProject when add project button is clicked', () => {
    const handleStartAddProject = jest.fn();
    render(<ProjectSidebar projects={projects} onStartAddProject={handleStartAddProject} onSelectProject={() => {}} />);
    fireEvent.click(screen.getByText('+ Add Project'));
    expect(handleStartAddProject).toHaveBeenCalledTimes(1);
  });

  test('calls onSelectProject when a project is clicked', () => {
    const handleSelectProject = jest.fn();
    render(<ProjectSidebar projects={projects} onStartAddProject={() => {}} onSelectProject={handleSelectProject} />);
    fireEvent.click(screen.getByText('Project 1'));
    expect(handleSelectProject).toHaveBeenCalledWith(1);
  });
});
