import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {LocalStoragePersistenceAdapter} from './services/localStoragePersistenceAdapter';

test('renders learn react link', () => {
  render(<App persistence={new LocalStoragePersistenceAdapter()} idGen={() => 'id'} />);

  const linkElement = screen.getByText(/Midient/i);

  expect(linkElement).toBeInTheDocument();
});
