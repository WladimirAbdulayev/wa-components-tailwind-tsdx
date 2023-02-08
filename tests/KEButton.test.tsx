
import React from 'react';
import { render } from '@testing-library/react';
import { KEButton } from '../src';
import '@testing-library/jest-dom/extend-expect';

describe("Button", () => {
  
  test("renders the Button component", () => {
    render(<KEButton text="Hello world!" />);
  });

  it('renders with proper text', () => {
    const { getByText } = render(<KEButton text={'Click me'}>Click me</KEButton>);
    const buttonElement = getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

});