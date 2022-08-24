import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App, { Home, About } from './App';

test('renders app', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
});

test('renders home', () => {
  render(<BrowserRouter><Home /></BrowserRouter>);
});

test('renders about', () => {
  render(<BrowserRouter><About /></BrowserRouter>);
});