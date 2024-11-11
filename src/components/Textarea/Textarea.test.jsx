import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Textarea from './Textarea';

describe('Textarea component', () => {
  test('textarea component renders correctly', () => {
    render(<Textarea title='test title' />)
    const textarea = screen.getByTestId('textarea-elem')
    const textareaTitle = screen.getByText('test title')
    expect(textarea).toBeInTheDocument();
    expect(textareaTitle).toBeInTheDocument()
  })
})