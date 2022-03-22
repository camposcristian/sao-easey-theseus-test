// import { theme, extendTheme } from '@chakra-ui/react';
import theme from '@/theme/_generated';
import { extendTheme } from '@chakra-ui/react';
import { button } from './components';
import styles from './styles';

// https://chakra-ui.com/docs/theming/customize-theme
const customTheme = extendTheme(
  // Override the global styles with our own
  {
    styles: styles,
  },
  // Override the button theme with our own
  {
    components: {
      Button: button,
    },
  },
  // Base theme to override (usually the default or one generated by figma2theme)
  theme
);
export type Theme = typeof customTheme;

export default customTheme;
