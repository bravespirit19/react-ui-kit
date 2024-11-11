import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Link from './Link';

describe('Link component', () => {
  test('link component renders correctly', () => {
    render(<Link>Link Title</Link>)
    const link = screen.getByTestId('link-elem')
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Link Title')
  })
  test('link component renders correctly when disabled', () => {
    render(<Link isLinkDisabled>Link Title</Link>)
    const link = screen.getByTestId('link-elem')
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Link Title')
    expect(link.className).toContain('disabled')
  })
})