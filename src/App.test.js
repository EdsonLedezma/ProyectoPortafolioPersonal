import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Projects from './Projects';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render a link with a title', () => {
  
  const { getByText } = render(<Projects />);
  
  
  const hrefElement = getByText(/Entrar al juego/i);
  
  
  expect(hrefElement).toBeInTheDocument();
});
