import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from './App';

test('renders learn react link', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  );
});
