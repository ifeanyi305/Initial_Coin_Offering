import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Icolist from '../pages/IcoList';

it('renders Icolist page', () => {
  render(
    <BrowserRouter>
      <Icolist />
    </BrowserRouter>,
  );
  screen.getByRole('searchbox');
  screen.getByRole('combobox');
});
