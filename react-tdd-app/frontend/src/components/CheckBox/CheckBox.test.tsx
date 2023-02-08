import React from 'react';
import { fireEvent, render } from 'utils/testUtils';
import { CheckBox } from 'components';
import { CheckBoxProps } from 'types';

describe('<CheckBox />', () => {
  const checkBoxProps = {
    name: 'test name',
    description: 'test description',
    updateOrder: jest.fn(),
  } as CheckBoxProps;

  it('name text와 input이 잘 생성되어야 한다.', () => {
    const { getByText, getByRole } = render(<CheckBox {...checkBoxProps} />);
    getByText(checkBoxProps.name);
    getByRole('checkbox');
  });

  it('check box를 클릭하면 값이 false에서 true로 바뀌어야 한다.', () => {
    const { getByRole } = render(<CheckBox {...checkBoxProps} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  it('check box를 클릭하면 값이 true에서 false로 바뀌어야 한다.', () => {
    const { getByRole } = render(<CheckBox {...checkBoxProps} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
});
