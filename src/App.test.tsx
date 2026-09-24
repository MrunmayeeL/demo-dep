import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders candidate name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mrunmayee/i);
  expect(linkElement).toBeInTheDocument();
});
