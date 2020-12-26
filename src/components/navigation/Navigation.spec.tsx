import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation Tests', () => {
  it('renders', () => {
    render(<Navigation />, { wrapper: MemoryRouter });
  });

  it('should go back to home on Brand click', () => {
    render(<Navigation />, { wrapper: MemoryRouter });
    let selection = screen.getByText(/iggy celtic/i);
    expect(selection).toBeInTheDocument();
    expect(selection.closest('a')).toHaveAttribute('href', '/');
  });

  it('should go back to home on Home click', () => {
    render(<Navigation />, { wrapper: MemoryRouter });
    let selection = screen.getByText(/home/i);
    expect(selection).toBeInTheDocument();
    expect(selection.closest('a')).toHaveAttribute('href', '/');
  });

  it('should go to Tracker on Tracker click', () => {
    render(<Navigation />, { wrapper: MemoryRouter });
    let selection = screen.getByText(/tracker/i);
    expect(selection).toBeInTheDocument();
    expect(selection.closest('a')).toHaveAttribute('href', '/tracker');
  });
});
