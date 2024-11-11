import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Checkbox from './Checkbox';

describe('checkbox component', () => {
  test('checkbox component renders correctly with label', () => {
    render(<Checkbox>Label</Checkbox>)
    const checkbox = screen.getByTestId('checkbox-elem')
    const label = screen.getByTestId('checkbox-label-elem')
    expect(checkbox).toBeInTheDocument();
    expect(label).toHaveTextContent('Label')
  })
  test('checkbox renders correctly without label', () => {
    render(<Checkbox />)
    const checkbox = screen.getByTestId('checkbox-elem')
    const label = screen.queryByTestId('checkbox-label-elem')
    expect(checkbox).toBeInTheDocument()
    expect(label).not.toBeInTheDocument()
  })
  test('toggle checkbox checked when clicked', () => {
    render(<Checkbox />)
    const checkbox = screen.getByTestId('checkbox-elem')

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  })
})
