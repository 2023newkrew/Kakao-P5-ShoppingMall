import React from 'react';
import { Option } from '@/containers/app';
import {
  OptionListContainer,
  OptionListItemContainer,
  OptionListParagraph,
  OptionListPriceText,
  OptionListTitle,
} from './option-list.style';
import OptionItem from './option-item';
import useBasketStore from '@/stores/use-basket-store';

export type OptionListProps = {
  options: Option[];
};

const OptionList: React.FC<OptionListProps> = ({ options }) => {
  const { totalOptionsPrice } = useBasketStore();

  return (
    <OptionListContainer>
      <OptionListTitle>주문 종류</OptionListTitle>
      <OptionListParagraph>하나의 가격</OptionListParagraph>
      <OptionListParagraph>
        옵션 총 가격:{' '}
        <OptionListPriceText data-testid="option-price">{totalOptionsPrice}</OptionListPriceText>
      </OptionListParagraph>
      <OptionListItemContainer>
        {options.map((option) => (
          <OptionItem option={option} key={crypto.randomUUID()} />
        ))}
      </OptionListItemContainer>
    </OptionListContainer>
  );
};

export default OptionList;
