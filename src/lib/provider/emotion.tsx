"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import theme from "../styles/theme";
import globals from "../styles/global";

const EmotionProvider = ({ children }: PropsWithChildren) => {

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
