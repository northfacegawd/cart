import Home from '@pages/index';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders component', () => {
    const home = screen.getByText('Next.js1');

    expect(home).toBeInTheDocument();
  });
});
