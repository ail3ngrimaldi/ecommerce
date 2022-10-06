import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ecommerce', () => {
  render(<App />);
  const linkElement = screen.getByText(/ecommerce/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders a NavBar', () => {
  render(<App />);
  const linkElement = screen.getByText(/ecommerce/i);
  expect(linkElement).toBeInTheDocument();
});