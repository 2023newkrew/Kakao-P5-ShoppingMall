import { render } from '@testing-library/react';
import TestTemplate from '../template/test-template';

const useRender = (children: JSX.Element | JSX.Element[]) =>
  render(<TestTemplate>{children}</TestTemplate>);

export default useRender;
