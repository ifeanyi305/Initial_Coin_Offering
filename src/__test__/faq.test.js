import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Faq from '../pages/Faq';

it('should test the home component', () => {
  render(
    <BrowserRouter>
      <Faq />
    </BrowserRouter>,
  );
  screen.getByText(
    /if you have a question about easy launch, you are in the right place\./i,
  );
  screen.getByText(
    /easy launch is a fundraising mechanism used by startups and projects that are built on blockchain technology\. it is a type of crowdfunding where investors can purchase digital tokens or coins in exchange for funding a project\. the tokens represent a stake in the project and can be used within its ecosystem\./i,
  );
});
