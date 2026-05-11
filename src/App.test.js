// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PipeWriter title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PipeWriter/i);
    expect(titleElement).toBeInTheDocument();
});
