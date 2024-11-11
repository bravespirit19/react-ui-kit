import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Button from './Button';

describe('button component', () => {
  test('button component renders correctly', () => {
    render(<Button />)
    const btn = screen.getByTestId('button-elem')
    expect(btn).toBeInTheDocument();
  })
  test('button component renders correctly with icon and styleName', () => {
    render(<Button styleName='primary'><img src="#" alt="icon" /></Button>)
    const btn = screen.getByTestId('button-elem')
    const icon = screen.getByAltText('icon')
    expect(btn.className).toContain('primary')
    expect(icon).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })
  test('button component renders correctly when disabled', () => {
    render(<Button styleName='secondary' isBtnDisabled />)
    const btn = screen.getByTestId('button-elem');
    expect(btn.className).toContain('secondary_disabled')
  })
})
