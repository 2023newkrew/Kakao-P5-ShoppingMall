import { fireEvent, screen } from '@testing-library/react';
import { Option } from '@/containers/app';
import useRender from '@/tests/hooks/use-render';
import OptionItem from './option-item';

describe('OptionItem component', () => {
  const option: Option = {
    name: 'test',
    description: 'test description',
  };

  it('should render correctly', () => {
    useRender(<OptionItem option={option} />);

    const optionItemTitleEl = screen.getByText('test');
    const optionItemCheckboxEl = screen.getByRole('checkbox');

    expect(optionItemTitleEl).toBeInTheDocument();
    expect(optionItemCheckboxEl).toBeInTheDocument();

    expect(optionItemTitleEl).toHaveTextContent('test');
    expect(optionItemCheckboxEl).not.toBeChecked();
  });

  it('should render correctly with basket and be able to checked and unchecked the checkbox', () => {
    useRender(<OptionItem option={option} />);

    const optionItemCheckboxEl = screen.getByRole('checkbox');

    expect(optionItemCheckboxEl).not.toBeChecked();
    fireEvent.click(optionItemCheckboxEl);
    expect(optionItemCheckboxEl).toBeChecked();
  });
});
