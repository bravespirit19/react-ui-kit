import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
  const options = ['option 1', 'option 2']
  test('dropdown component renders correctly', () => {
    render(<Dropdown options={options} />)
    const elem = screen.getByTestId('dropdown-elem')
    const optionsWrap = screen.getByTestId('options-wrap-elem');
    expect(elem).toBeInTheDocument();
    expect(optionsWrap).toHaveStyle('display: none')
  })
  test('should show options when clicks on placeholder', () => {
    render(<Dropdown options={options} />)
    const elem = screen.getByTestId('dropdown-elem');
    const optionsWrap = screen.getByTestId('options-wrap-elem');
    const option = screen.getByTestId('option-0');
    fireEvent.click(elem)
    expect(optionsWrap).toHaveStyle('display: block')
    fireEvent.click(elem)
    expect(optionsWrap).toHaveStyle('display: none')
    fireEvent.click(elem)
    expect(optionsWrap).toHaveStyle('display: block')
    fireEvent.click(option)
    expect(optionsWrap).toHaveStyle('display: none')
  })
  test('should set first option as placeholder', () => {
    render(<Dropdown options={options} />)
    const placeholder = screen.getByTestId('dropdown-placeholder')
    expect(placeholder).toHaveTextContent('option 1')
  })
  test('should update placeholder on option click', () => {
    render(<Dropdown options={options} />)
    const placeholder = screen.getByTestId('dropdown-placeholder');
    const option = screen.getByTestId('option-1');
    const optionText = option.textContent
    fireEvent.click(option)
    expect(placeholder).toHaveTextContent(optionText)
  })
})