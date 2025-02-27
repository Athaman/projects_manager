import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button with children', () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('applies props to Button', () => {
  render(<Button disabled>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeDisabled();
});
