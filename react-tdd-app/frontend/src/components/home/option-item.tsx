import React, { useCallback } from 'react';
import { Option } from '@/containers/app';
import useBasketStore from '@/stores/use-basket-store';
import { OptionItemCheckbox, OptionItemLabel } from './option-item.style';

export type OptionItemProps = {
  option: Option;
};

const OptionItem: React.FC<OptionItemProps> = ({ option }) => {
  const { optionsBasket, setOptionsBasket } = useBasketStore();

  const onClick = useCallback(() => {
    setOptionsBasket(option.name, !optionsBasket[option.name]);
  }, [setOptionsBasket, option.name, optionsBasket]);

  return (
    <OptionItemLabel htmlFor={`check-box-${option.name}`}>
      <OptionItemCheckbox
        type="checkbox"
        id={`check-box-${option.name}`}
        defaultChecked={!!optionsBasket[option.name]}
        data-testid={`option-item-checkbox--${option.name}`}
        onClick={onClick}
      />
      {option.name}
    </OptionItemLabel>
  );
};

export default OptionItem;
