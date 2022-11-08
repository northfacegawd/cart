import Home from '@pages/index';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
  it('renders component', () => {
    render(<Home />);

    const home = screen.getByText('Next.js!');

    expect(home).toBeInTheDocument();
  });
});
