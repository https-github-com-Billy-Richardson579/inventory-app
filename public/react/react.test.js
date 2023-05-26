import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './components/App';

describe('App', () => {
  test('renders the component', () => {
    const { getByText } = render(<App />);

    expect(getByText('Best Store')).toBeInTheDocument();
    expect(getByText('All things 🔥')).toBeInTheDocument();
  });

  test('displays item list when no item is selected', () => {
    const { getByRole } = render(<App />);

    // item list is rendered
    expect(getByRole('button', { name: 'Add Item' })).toBeInTheDocument();
    expect(getByRole('list')).toBeInTheDocument();
  });

  test('displays item details when an item is selected', async () => {
    const { getByText } = render(<App />);


    fireEvent.click(getByText('Item Title'));

    // Wait for the API request to complete
    await waitFor(() => getByText('Item Description'));


    expect(getByText('Item Description')).toBeInTheDocument();
    expect(getByText('Back to List')).toBeInTheDocument();
  });
});
