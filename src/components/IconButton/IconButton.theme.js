import { Theme } from '@material-ui/core/styles/createMuiTheme';
// import { Overrides } from '@material-ui/core/styles/overrides';

export const iconButtonOverrides = (theme) => ({
  MuiIconButton: {
    root: {
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(0.5),
      overflow: 'hidden',
      '&:hover, &:focus': {
        boxShadow: `0px 0px 0px 2px`,
        backgroundColor: 'transparent'
      }
    },
    colorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: 'transparent'
      }
    },
    colorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: 'transparent'
      }
    }
  }
});
