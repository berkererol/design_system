import { Theme } from '@material-ui/core/styles/createMuiTheme';

export const buttonOverrides = (theme) => ({
  MuiButton: {
    root: {
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    contained: {
      color: theme.palette.grey[800],
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        boxShadow: 'none'
      }
    },
    textSizeSmall: {
      fontSize: theme.typography.pxToRem(12)
    },
    textSizeLarge: {
      fontSize: theme.typography.pxToRem(12)
    },
    containedSizeSmall: {
      fontSize: theme.typography.pxToRem(12)
    },
    containedSizeLarge: {
      fontSize: theme.typography.pxToRem(12)
    }
  }
});
