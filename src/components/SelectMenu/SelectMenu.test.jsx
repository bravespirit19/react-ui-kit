import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import SelectMenu from './SelectMenu';

describe('SelectMenu component', () => {
  const options = ['option 1', 'option 2']
  test('selectmenu component renders correctly', () => {
    render(<SelectMenu title='test title' options={options} />)
    const select = screen.getByTestId('select-elem')
    const optionsWrap = screen.getByTestId('options-wrap-elem')
    const selectTitle = screen.getByText('test title')
    expect(optionsWrap).toHaveStyle('display: none')
    expect(select).toBeInTheDocument();
    expect(selectTitle).toBeInTheDocument();
  })
  test('should show options when clicks on placeholder', () => {
    render(<SelectMenu options={options} />)
    const select = screen.getByTestId('select-elem');
    const optionsWrap = screen.getByTestId('options-wrap-elem');
    const option = screen.getByTestId('option-0');
    fireEvent.click(select)
    expect(optionsWrap).toHaveStyle('display: block')
    fireEvent.click(select)
    expect(optionsWrap).toHaveStyle('display: none')
    fireEvent.click(select)
    expect(optionsWrap).toHaveStyle('display: block')
    fireEvent.click(option)
    expect(optionsWrap).toHaveStyle('display: none')
  })
  test('should update placeholder on option click', () => {
    render(<SelectMenu options={options} />)
    const placeholder = screen.getByTestId('select-placeholder');
    const option = screen.getByTestId('option-1');
    const optionText = option.textContent
    fireEvent.click(option)
    expect(placeholder).toHaveTextContent(optionText)
  })
})