import { MantineProvider } from '@mantine/core';
import theme from './theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
      forceColorScheme="dark"
      withCssVariables={false}
      withGlobalClasses={false}>
      {children}
    </MantineProvider>
  );
}
