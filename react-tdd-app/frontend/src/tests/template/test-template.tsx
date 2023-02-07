import { ThemeProvider } from '@emotion/react';
import React from 'react';
import theme from '@/styles/theme';

type TestTemplateProps = {
  children: React.ReactNode;
};

const TestTemplate: React.FC<TestTemplateProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default TestTemplate;
