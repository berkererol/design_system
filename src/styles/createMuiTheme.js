import { createMuiTheme as muiCreateMuiTheme } from '@material-ui/core/styles';

// import { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';

import {
  buttonOverrides,
  iconButtonOverrides,
} from '../components';

export const createMuiTheme = (theme) => {
  // override default MUI theme, https://material-ui.com/customization/palette/
  const themeOverrides = muiCreateMuiTheme(theme);

  // if you want to customize what values components refer to in the MUI theme you can override here, https://material-ui.com/customization/components/#global-theme-override
  // note, the order of overrides only matters if you are referring to new or custom theme values from themeOverrides.
  const componentOverrides = {
    overrides: {
      ...buttonOverrides(themeOverrides),
      ...iconButtonOverrides(themeOverrides),
    }
  };

  return muiCreateMuiTheme({
    ...themeOverrides,
    ...componentOverrides
  });
};
