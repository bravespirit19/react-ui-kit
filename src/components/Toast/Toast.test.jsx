import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Toast from './Toast';

describe('Toast component', () => {
  test('toast component renders correctly', () => {
    render(<Toast />)
    const toast = screen.getByTestId('toast-elem')
    expect(toast).toBeInTheDocument();
  })
  test('should close toast when close button is clicked', () => {
    render(<Toast />)
    const toast = screen.getByTestId('toast-elem')
    const closeBtn = screen.getByAltText('close');
    fireEvent.click(closeBtn);
    expect(toast).toHaveStyle('display: none')
  })
})