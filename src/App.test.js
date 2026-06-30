// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EmberGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EmberGrid/i);
    expect(titleElement).toBeInTheDocument();
});
