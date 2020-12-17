import React from "react";
import { addDecorator } from "@storybook/react";
import CssBaseline from "../src/theme/Baseline";
import { ThemeProvider } from "styled-components";
import theme, { Typography } from "../src/theme/default";
// import { useForm, FormProvider } from "react-hook-form";

addDecorator((storyFn) => {
  // const methods = useForm();
  return (
    <>
      <CssBaseline Typography={Typography} />
      <ThemeProvider theme={theme}>
        {/* <FormProvider {...methods}> */}
        {storyFn()}
        {/* </FormProvider> */}
      </ThemeProvider>
    </>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
