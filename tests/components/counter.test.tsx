import Counter from '@components/common/counter';
import { useCounter } from '@hooks/useCounter';
import { fireEvent, render, screen } from '@testing-library/react';

const DemoCounter = () => {
  const counterData = useCounter();

  return <Counter {...counterData} />;
};

describe('<Counter />', () => {
  it('Counter Component increase and decrease', async () => {
    render(<DemoCounter />);
    const count = screen.getByLabelText('count') as HTMLInputElement;
    const incButton = screen.getByLabelText('increase-button');
    const decButton = screen.getByLabelText('decrease-button');
    expect(count.value).toBe('0');
    expect(decButton).toBeDisabled();
    fireEvent.click(incButton);
    expect(count.value).toBe('1');
    fireEvent.click(decButton);
    fireEvent.click(decButton);
    fireEvent.click(decButton);
    expect(count.value).toBe('0');
  });
});
