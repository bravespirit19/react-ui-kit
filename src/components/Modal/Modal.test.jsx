import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Modal from './Modal';

describe('Modal component', () => {
  test('modal component renders correctly with title and description', () => {
    render(<Modal title='test title'>modal desc</Modal>)
    const modal = screen.getByTestId('modal-elem')
    const modalTitle = screen.getByText('test title')
    expect(modal).toBeInTheDocument();
    expect(modalTitle).toBeInTheDocument();
    expect(modal).toHaveTextContent('modal desc')
  })
  test('should close modal when clode button is clicked', () => {
    render(<Modal />)
    const modal = screen.getByTestId('modal-elem')
    const closeBtn = screen.getByAltText('close-modal');
    fireEvent.click(closeBtn);
    expect(modal).toHaveStyle('display: none')
  })
})