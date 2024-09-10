import { Button, createTheme, Input, Select, TextInput } from '@mantine/core';

export const theme = createTheme({
  colors: {
    blue: [
      '#eff2fa',
      '#dde1ef',
      '#b6c0e0',
      '#8d9dd2',
      '#6a7fc7',
      '#556cc1',
      '#4a63be',
      '#3b53a8',
      '#334a97',
      '#283f85',
    ],
  },
  defaultRadius: 'md',
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'green.7',
        radius: 'md',
      },
    }),
    Select: Select.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),
    Input: Input.extend({
      defaultProps: {
        size: '48px',
      },
    }),
  },
});
