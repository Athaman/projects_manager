import { render, screen } from '@testing-library/react';
import Modal from './Modal';

beforeEach(() => {
  // Add a main element to the document body
  const main = document.createElement('main');
  document.body.appendChild(main);
});

afterEach(() => {
  // Clean up the main element after each test
  document.body.innerHTML = '';
});

describe('Modal Component', () => {
  test('renders children and button caption', () => {
    render(<Modal buttonCaption="Close">Test Content</Modal>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
});
