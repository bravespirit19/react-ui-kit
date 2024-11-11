import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  test('colorpicker component renders correctly', () => {
    render(<ColorPicker />)
    const elem = screen.getByTestId('color-picker')
    expect(elem).toBeInTheDocument();
  })
  test('color picks correctly', () => {
    render(<ColorPicker />)
    
    const color = screen.getByTestId('color-2')
    fireEvent.click(color);
    expect(color).toHaveStyle('box-shadow: 0 0 0 1px #fff, 0 0 0 2px #323749')

    const otherColor = screen.getByTestId('color-1')
    expect(otherColor).toHaveStyle('box-shadow: none')
  })
})
