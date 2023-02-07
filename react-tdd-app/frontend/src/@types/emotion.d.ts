import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mq: {
      laptop: string;
      mobile: string;
      tablet: string;
    };
    mqt: {
      laptop: string;
      mobile: string;
      tablet: string;
    };
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    colors: {
      primaryColor: string;
      secondaryColor: string;
      accentColor: string;
      primaryTextColor: string;
      secondaryTextColor: string;
      dividerColor: string;
    };
  }
}
