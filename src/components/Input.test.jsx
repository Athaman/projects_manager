import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import { describe } from 'node:test';

describe('Input Component', () => {
  test('renders input with label', () => {
    render(<Input label="Test Label" type="text" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  test('renders textarea when textarea prop is true', () => {
    render(<Input label="Test Textarea" textarea value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Test Textarea')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  describe('On Change', () => {
    test('calls onChange when input value changes', () => {
      const handleChange = jest.fn();
      render(<Input label="Test Input" type="text" value="" onChange={handleChange} />);
      fireEvent.change(screen.getByLabelText('Test Input'), { target: { value: 'new value' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('calls onChange when textarea value changes', () => {
      const handleChange = jest.fn();
      render(<Input label="Test Textarea" textarea value="" onChange={handleChange} />);
      fireEvent.change(screen.getByLabelText('Test Textarea'), { target: { value: 'new value' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Labels Paired with Inputs', () => {
    test('label and input are matched by an id', () => {
      render(<Input label="Test Label" type="text" value="" onChange={() => {}} />);
      const input = screen.getByLabelText('Test Label');
      expect(input).toBeInTheDocument();
      expect(input.id).toBeTruthy();
      expect(screen.getByLabelText('Test Label').getAttribute('id')).toBe(input.id);
    });

    test('label and textarea are matched by an id', () => {
      render(<Input label="Test Label" textarea value="" onChange={() => {}} />);
      const input = screen.getByLabelText('Test Label');
      expect(input).toBeInTheDocument();
      expect(input.id).toBeTruthy();
      expect(screen.getByLabelText('Test Label').getAttribute('id')).toBe(input.id);
    });
  });
});
