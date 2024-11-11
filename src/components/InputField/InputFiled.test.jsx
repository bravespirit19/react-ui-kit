import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import InputField from './InputField';

describe('InputField component', () => {
  test('inputfield component renders correctly with placeholder', () => {
    render(<InputField placeholder='type...' />)
    const elem = screen.getByTestId('input-field-elem')
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveAttribute('placeholder', 'type...')
  })
  test('should show error when input data is not valid', () => {
    render(<InputField isErrors />)
    const err = screen.getByTestId('input-error-elem')
    expect(err).toBeInTheDocument();
  })
  test('should update input value when user types', () => {
    render(<InputField />)
    const elem = screen.getByTestId('input-field-elem')
    fireEvent.change(elem, { target: { value: 'new value' } });
    expect(elem.value).toBe('new value')
  })
  test('should toggle eye icon and password visibility on click', () => {
    render(<InputField type="password" />)
    const eyeIcon = screen.getByAltText('icon')
    const elem = screen.getByTestId('input-field-elem')
    expect(elem).toHaveAttribute('type', 'password')
    fireEvent.click(eyeIcon)
    expect(elem).toHaveAttribute('type', 'text')
    fireEvent.click(eyeIcon)
    expect(elem).toHaveAttribute('type', 'password')
  })
})