import { screen } from '@testing-library/react';
import { Option } from '@/containers/app';
import useRender from '@/tests/hooks/use-render';
import OptionList from './option-list';

describe('OptionList component', () => {
  const options: Option[] = [
    {
      name: 'test1',
      description: 'test description',
    },
    {
      name: 'test2',
      description: 'test description2',
    },
    {
      name: 'test3',
      description: 'test description3',
    },
    {
      name: 'test4',
      description: 'test description4',
    },
  ];

  it('should render correctly', () => {
    useRender(<OptionList options={options} />);

    const optionItemTitleEls = screen.getAllByText(/test/);

    expect(optionItemTitleEls).toHaveLength(options.length);

    optionItemTitleEls.forEach((optionItemTitleEl) => {
      expect(optionItemTitleEl).toBeInTheDocument();
    });
  });

  /* FIXME: Zustand state is not updated in the test */
  /* TODO: Fix this test */
  /*
  it('Update total prices with checking and unchecking the checkbox', () => {
    useRender(<OptionList options={options} />);

    const optionPriceEl = screen.getByTestId('option-price');
    const optionItemCheckboxEls = screen.getAllByRole('checkbox');

    expect(optionItemCheckboxEls).toHaveLength(options.length);
    expect(optionPriceEl).toHaveTextContent('0');

    optionItemCheckboxEls.forEach((optionItemCheckboxEl, index) => {
      expect(optionItemCheckboxEl).not.toBeChecked();
      fireEvent.click(optionItemCheckboxEl);
      expect(optionItemCheckboxEl).toBeChecked();
      expect(optionPriceEl).toHaveTextContent((OPTION_PRICE * (index + 1)).toString());
    });
  });
  */
});
